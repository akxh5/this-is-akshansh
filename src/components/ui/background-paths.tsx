"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 15 * position} -${189 + i * 12}C-${
            380 - i * 15 * position
        } -${189 + i * 12} -${312 - i * 15 * position} ${216 - i * 12} ${
            152 - i * 15 * position
        } ${343 - i * 12}C${616 - i * 15 * position} ${470 - i * 12} ${
            684 - i * 15 * position
        } ${875 - i * 12} ${684 - i * 15 * position} ${875 - i * 12}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#7c3aed"
                        strokeWidth={path.width * 4}
                        strokeOpacity={0.6 + path.id * 0.01}
                        initial={{ pathLength: 0.1, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.4, 0.8, 0.4],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
        </div>
    );
}
