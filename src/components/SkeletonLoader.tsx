import { motion } from 'motion/react';

export function SkeletonLoader() {
  return (
    <div className="w-full space-y-6 p-4">
      <div className="flex flex-col items-center space-y-4 pt-10 pb-6">
        <div className="w-20 h-20 rounded-full bg-white/5 animate-pulse" />
        <div className="w-48 h-8 rounded-lg bg-white/5 animate-pulse" />
        <div className="w-32 h-6 rounded-full bg-white/5 animate-pulse" />
      </div>
      
      <div className="w-full h-[420px] rounded-3xl bg-white/5 animate-pulse" />
      
      <div className="space-y-4 pt-4">
        <div className="w-40 h-6 rounded-lg bg-white/5 animate-pulse" />
        <div className="w-full h-32 rounded-3xl bg-white/5 animate-pulse" />
        <div className="w-full h-32 rounded-3xl bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}
