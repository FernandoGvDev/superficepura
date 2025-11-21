import { useEffect } from "react";

export function useWhatsAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href") || "";

      const isWhats =
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send");

      if (!isWhats) return;

      if (typeof window.gtag !== "undefined") {
        window.gtag("event", "click_whatsapp", {
          event_category: "Contato",
          event_label: href,
          value: 1,
        });

        window.gtag("event", "conversion", {
          send_to: "AW-17652485149/zY89COunm7kbEJ2YruFB",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
