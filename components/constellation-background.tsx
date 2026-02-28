"use client";

import { useEffect, useRef } from "react";

type LayerCfg = {
  count: number;
  speed: number;
  parallax: number;
  minR: number;
  maxR: number;
  baseOpacity: number;
  connectDist: number;
  connectOpacity: number;
};

const LAYERS: LayerCfg[] = [
  // far — small, dim, slow, barely moves on scroll
  {
    count: 30,
    speed: 0.12,
    parallax: 0.02,
    minR: 0.3,
    maxR: 0.8,
    baseOpacity: 0.18,
    connectDist: 130,
    connectOpacity: 0.08,
  },
  // mid
  {
    count: 22,
    speed: 0.26,
    parallax: 0.055,
    minR: 0.7,
    maxR: 1.5,
    baseOpacity: 0.3,
    connectDist: 175,
    connectOpacity: 0.14,
  },
  // near — larger, brighter, faster, stronger parallax
  {
    count: 14,
    speed: 0.44,
    parallax: 0.11,
    minR: 1.3,
    maxR: 2.4,
    baseOpacity: 0.55,
    connectDist: 210,
    connectOpacity: 0.22,
  },
];

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  layer: number;
  parallax: number;
  baseOpacity: number;
  connectDist: number;
  connectOpacity: number;
  twinklePhase: number;
  twinkleSpeed: number;
  // hub nodes attract more connections and look brighter
  isHub: boolean;
};

function makeNodes(w: number, h: number): Node[] {
  const nodes: Node[] = [];
  for (let li = 0; li < LAYERS.length; li++) {
    const cfg = LAYERS[li];
    for (let i = 0; i < cfg.count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = cfg.speed * (0.6 + Math.random() * 0.8);
      const isHub = Math.random() < 0.18; // ~18% are hub stars
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: isHub
          ? cfg.maxR * (1.4 + Math.random() * 0.6)
          : cfg.minR + Math.random() * (cfg.maxR - cfg.minR),
        layer: li,
        parallax: cfg.parallax,
        baseOpacity: isHub ? cfg.baseOpacity * 1.5 : cfg.baseOpacity,
        connectDist: isHub ? cfg.connectDist * 1.25 : cfg.connectDist,
        connectOpacity: cfg.connectOpacity,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.4 + Math.random() * 0.8,
        isHub,
      });
    }
  }
  return nodes;
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const nodes = makeNodes(w, h);
    let scrollY = window.scrollY;
    let time = 0;
    let raf: number;

    const isDark = () => document.documentElement.classList.contains("dark");
    const getColor = () => (isDark() ? "255,255,255" : "15,15,20");

    function tick() {
      time += 0.016;
      ctx.clearRect(0, 0, w, h);
      const rgb = getColor();

      // Update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) {
          n.vx = -n.vx;
          n.x = Math.max(0, Math.min(w, n.x));
        }
        if (n.y < 0 || n.y > h) {
          n.vy = -n.vy;
          n.y = Math.max(0, Math.min(h, n.y));
        }
      }

      // Draw by layer (far → near)
      for (let li = 0; li < LAYERS.length; li++) {
        const layerNodes = nodes.filter((n) => n.layer === li);
        const parallax = LAYERS[li].parallax;
        const yOffset = -scrollY * parallax;

        // Connections within layer
        for (let i = 0; i < layerNodes.length; i++) {
          for (let j = i + 1; j < layerNodes.length; j++) {
            const a = layerNodes[i];
            const b = layerNodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = Math.max(a.connectDist, b.connectDist);
            if (dist < maxDist) {
              const t = 1 - dist / maxDist;
              // boost opacity when either endpoint is a hub
              const hubBoost = a.isHub || b.isHub ? 1.6 : 1;
              const opacity = t * t * a.connectOpacity * hubBoost;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${rgb},${opacity})`;
              ctx.lineWidth = a.isHub || b.isHub ? 0.8 : 0.5;
              ctx.moveTo(a.x, a.y + yOffset);
              ctx.lineTo(b.x, b.y + yOffset);
              ctx.stroke();
            }
          }
        }

        // Sparse cross-connections to layer above (only mid→near, very close)
        if (li < LAYERS.length - 1) {
          const nextLayer = nodes.filter((n) => n.layer === li + 1);
          const nextYOffset = -scrollY * LAYERS[li + 1].parallax;
          for (const a of layerNodes) {
            for (const b of nextLayer) {
              const dx = a.x - b.x;
              const dy = a.y - b.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 100 && (a.isHub || b.isHub)) {
                const opacity = (1 - dist / 100) * 0.07;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${rgb},${opacity})`;
                ctx.lineWidth = 0.4;
                ctx.moveTo(a.x, a.y + yOffset);
                ctx.lineTo(b.x, b.y + nextYOffset);
                ctx.stroke();
              }
            }
          }
        }

        // Draw nodes
        for (const n of layerNodes) {
          const twinkle =
            0.7 + 0.3 * Math.sin(time * n.twinkleSpeed + n.twinklePhase);
          const opacity = n.baseOpacity * twinkle;
          const drawY = n.y + yOffset;

          if (n.isHub) {
            // soft glow around hub stars
            const grad = ctx.createRadialGradient(
              n.x,
              drawY,
              0,
              n.x,
              drawY,
              n.r * 4,
            );
            grad.addColorStop(0, `rgba(${rgb},${opacity * 0.5})`);
            grad.addColorStop(1, `rgba(${rgb},0)`);
            ctx.beginPath();
            ctx.fillStyle = grad;
            ctx.arc(n.x, drawY, n.r * 4, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb},${opacity})`;
          ctx.arc(n.x, drawY, n.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
