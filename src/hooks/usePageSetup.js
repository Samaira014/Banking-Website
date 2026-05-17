import { useEffect } from "react";

export default function usePageSetup(title, icon) {
  useEffect(() => {
    document.title = title;

    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");

    link.rel = "icon";
    link.href = icon;

    document.head.appendChild(link);

    window.scrollTo(0, 0);
  }, [title, icon]);
}