"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type SoftRevealProps = HTMLMotionProps<"div">;

export function SoftReveal({ children, ...props }: SoftRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
