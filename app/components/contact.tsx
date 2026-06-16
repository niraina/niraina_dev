"use client";

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { GIT, LINKEDIN } from "@/constant/social";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const contactLinks = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "andriamiarintsoaniraina@gmail.com",
      href: `mailto:andriamiarintsoaniraina@gmail.com`,
    },
    {
      icon: <Phone size={18} />,
      label: t("phone_label"),
      value: "+261 34 44 085 07",
      href: "https://wa.me/261344408507",
    },
    {
      icon: <MapPin size={18} />,
      label: t("location_label"),
      value: "Antananarivo, Madagascar",
      href: null,
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/niraina",
      href: GIT,
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/niraina",
      href: LINKEDIN,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (data.success) {
      setName("");
      setEmail("");
      setMessage("");
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-0.5 bg-violet-500 dark:bg-violet-400 rounded" />
          <span className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400">
            {t("label")}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
          {t("title")}{" "}
          <span className="bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
            {t("title_highlight")}
          </span>
        </h2>
        <p className="text-gray-500 dark:text-white/45 mb-10 max-w-md">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact info */}
          <div className="bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] rounded-2xl shadow-sm dark:shadow-none p-6 sm:p-8">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              {t("stay_connected")}
            </h3>
            <p className="text-xs text-gray-400 dark:text-white/45 mb-6">
              {t("availability")}
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.07] hover:bg-violet-50 dark:hover:bg-white/[0.08] hover:border-violet-200 dark:hover:border-violet-400/25 hover:translate-x-1 transition-all group"
                  >
                    <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-200 dark:group-hover:bg-violet-500/20 transition-colors flex-shrink-0">
                      {link.icon}
                    </span>
                    <div>
                      <div className="text-xs text-gray-400 dark:text-white/40 font-medium">{link.label}</div>
                      <div className="text-sm text-gray-700 dark:text-white/80 font-semibold truncate">{link.value}</div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={link.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.07]"
                  >
                    <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex-shrink-0">
                      {link.icon}
                    </span>
                    <div>
                      <div className="text-xs text-gray-400 dark:text-white/40 font-medium">{link.label}</div>
                      <div className="text-sm text-gray-700 dark:text-white/80 font-semibold">{link.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] rounded-2xl shadow-sm dark:shadow-none p-6 sm:p-8">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-6">
              {t("send_message")}
            </h3>
            {isSuccess && (
              <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
                {t("success")}
              </div>
            )}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-gray-400 dark:text-white/45 uppercase tracking-widest mb-2">
                  {t("name_label")}
                </label>
                <input
                  type="text"
                  placeholder={t("name_placeholder")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 dark:text-white/45 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder={t("email_placeholder")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 dark:text-white/45 uppercase tracking-widest mb-2">
                  {t("message_label")}
                </label>
                <textarea
                  rows={4}
                  placeholder={t("message_placeholder")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-500 dark:to-blue-500 text-white text-sm font-bold shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_30px_rgba(139,92,246,0.55)] hover:-translate-y-0.5 transition-all"
              >
                {t("send_button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
