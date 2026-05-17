import { useEffect } from "react";

export default function useFavicon(icon) {
  useEffect(() => {
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");

    link.rel = "icon";
    link.href = icon;

    document.head.appendChild(link);
  }, [icon]);
}