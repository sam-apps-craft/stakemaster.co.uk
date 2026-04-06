"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const PIXEL_ID = "709914178793810";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export default function PixelTracker() {
  const pathname = usePathname();
  const isInitialised = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isInitialised.current) {
      (function (f: any, b: Document, e: string, v: string) {
        if (f.fbq) return;

        const n: any = function (...args: any[]) {
          if (n.callMethod) {
            n.callMethod.apply(n, args);
          } else {
            n.queue.push(args);
          }
        };

        f.fbq = n;
        f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];

        // ✅ FIX: explicitly type as HTMLScriptElement
        const t = b.createElement(e) as HTMLScriptElement;
        t.async = true;
        t.src = v;

        const s = b.getElementsByTagName(e)[0];

        // ✅ FIX: null-safe parentNode
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s);
        }
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_GB/fbevents.js"
      );

      window.fbq?.("init", PIXEL_ID);
      isInitialised.current = true;
    }

    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
