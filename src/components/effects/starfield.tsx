"use client";

import { cn } from "@/lib/utils";

interface StarfieldProps {
  className?: string;
}

export function Starfield({ className }: StarfieldProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Small stars layer */}
      <div className="stars-small absolute inset-0" />

      {/* Medium stars layer */}
      <div className="stars-medium absolute inset-0" />

      {/* Large stars layer */}
      <div className="stars-large absolute inset-0" />

      {/* Shooting star occasional */}
      <div className="shooting-star" />

      <style jsx>{`
        .stars-small {
          background-image: radial-gradient(
              1px 1px at 20px 30px,
              white,
              transparent
            ),
            radial-gradient(1px 1px at 40px 70px, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(1px 1px at 50px 160px, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(1px 1px at 160px 120px, white, transparent),
            radial-gradient(1px 1px at 200px 50px, rgba(255, 255, 255, 0.5), transparent),
            radial-gradient(1px 1px at 220px 90px, white, transparent),
            radial-gradient(1px 1px at 260px 150px, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(1px 1px at 300px 30px, white, transparent);
          background-repeat: repeat;
          background-size: 320px 200px;
          animation: twinkle 4s ease-in-out infinite;
        }

        .stars-medium {
          background-image: radial-gradient(
              1.5px 1.5px at 150px 150px,
              rgba(100, 200, 255, 0.9),
              transparent
            ),
            radial-gradient(
              1.5px 1.5px at 200px 220px,
              rgba(255, 200, 150, 0.8),
              transparent
            ),
            radial-gradient(1.5px 1.5px at 100px 280px, rgba(200, 150, 255, 0.7), transparent),
            radial-gradient(1.5px 1.5px at 280px 100px, rgba(150, 255, 200, 0.8), transparent),
            radial-gradient(1.5px 1.5px at 350px 250px, rgba(255, 150, 200, 0.7), transparent);
          background-repeat: repeat;
          background-size: 400px 350px;
          animation: twinkle 6s ease-in-out infinite;
          animation-delay: -2s;
        }

        .stars-large {
          background-image: radial-gradient(
              2px 2px at 100px 100px,
              rgba(100, 200, 255, 1),
              transparent
            ),
            radial-gradient(2.5px 2.5px at 300px 200px, rgba(255, 200, 100, 1), transparent),
            radial-gradient(2px 2px at 500px 350px, rgba(200, 100, 255, 0.9), transparent);
          background-repeat: repeat;
          background-size: 600px 450px;
          animation: twinkle 8s ease-in-out infinite;
          animation-delay: -4s;
        }

        .shooting-star {
          position: absolute;
          top: 20%;
          left: 0;
          width: 100px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(100, 200, 255, 0.8),
            white,
            transparent
          );
          border-radius: 50%;
          animation: shoot 8s ease-in-out infinite;
          animation-delay: 3s;
          opacity: 0;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shoot {
          0% {
            transform: translateX(-100px) translateY(0) rotate(-45deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          15% {
            transform: translateX(100vw) translateY(50vh) rotate(-45deg);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
