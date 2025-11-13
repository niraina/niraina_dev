"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  defaultActiveId?: number; // nouvel prop pour l'item actif par défaut
}

export default function RadialOrbitalTimeline({ timelineData, defaultActiveId }: RadialOrbitalTimelineProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(() => {
    const initState: Record<number, boolean> = {};
    if (defaultActiveId) initState[defaultActiveId] = true; // item actif par défaut
    return initState;
  });

  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(!isMobile); // pas de rotation sur mobile
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(defaultActiveId || null);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(!isMobile);
    }
  };

  const toggleItem = (id: number) => {
    animateCenterOnNode(id); // recentrer à chaque clic

    setExpandedItems(prev => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach(key => {
        const keyNum = parseInt(key);
        newState[keyNum] = keyNum === id ? !prev[keyNum] : false;
      });
      if (!(id in prev)) newState[id] = true;

      if (newState[id]) {
        setActiveNodeId(id);
        setAutoRotate(!isMobile ? false : false); // toujours désactiver autoRotate sur mobile
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach(relId => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(!isMobile);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const animateCenterOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex(item => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    const startAngle = rotationAngle;
    const endAngle = 270 - targetAngle;
    const duration = 500;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      setRotationAngle(startAngle + (endAngle - startAngle) * easedProgress);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(step);
      }
    };

    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (isMobile) return; // ne pas tourner sur mobile

    const rotate = () => {
      if (autoRotate) {
        setRotationAngle(prev => (prev + 0.05) % 360); // rotation lente
      }
      requestRef.current = requestAnimationFrame(rotate);
    };
    requestRef.current = requestAnimationFrame(rotate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [autoRotate, isMobile]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find(item => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const t = useTranslations("skills");

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <h2 className="text-white/80 absolute z-10 top-10 font-bold text-4xl">{t("title")}</h2>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>

          {timelineData.map((item, index) => {
            const pos = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              zIndex: isExpanded ? 200 : pos.zIndex,
              opacity: isExpanded ? 1 : pos.opacity,
              transition: "transform 0.5s ease, opacity 0.5s ease",
            };

            return (
              <div
                key={item.id}
                className="absolute cursor-pointer"
                style={nodeStyle}
                onClick={e => { e.stopPropagation(); toggleItem(item.id); }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5) / 2}px`,
                    top: `-${(item.energy * 0.5) / 2}px`,
                  }}
                ></div>

                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${isExpanded ? "bg-white text-black scale-150 shadow-lg shadow-white/30 border-white" :
                    isRelated ? "bg-white/50 text-black border-white animate-pulse" :
                    "bg-black text-white border-white/40"}
                  transition-all duration-300 transform`}>
                  <Icon size={16} />
                </div>

                <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider
                  transition-all duration-300 ${isExpanded ? "text-white scale-125" : "text-white/70"}`}>
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-sm text-white/80">{item.category}</CardTitle>
                        <span className="text-xs font-mono text-white/50">{item.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
