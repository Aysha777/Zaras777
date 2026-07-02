"use client";

import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { statistics } from "@/data/site-content";

function AnimatedCounter({
  value,
  suffix
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell grid gap-6 rounded-[2rem] bg-brand-soft p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:p-12">
        {statistics.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-sm"
          >
            <p className="font-display text-4xl text-brand-navy sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-sm sm:tracking-[0.25em]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
