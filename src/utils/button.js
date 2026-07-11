import {ArrowRight} from "@/utils/icons";
<button className="group relative overflow-hidden w-full py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600
    text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/20
    transition-all duration-300 ease-out
    hover:scale-[1.02]
    hover:-translate-y-1
    hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)]
    active:scale-95">

  {/* SHINE EFFECT */}
    <span className="absolute top-0 left-[-120%] h-full w-[50%] bg-white/20 skew-x-12 animate-shine" />

  {/* TEXT */}
  <span className="relative z-10">
    Login Now
  </span>

  {/* ICON */}
  <ArrowRight size={22}
    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"/>
</button>