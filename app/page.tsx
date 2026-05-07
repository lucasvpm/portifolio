"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Code2, Layers, Mail, ArrowDown, ChevronRight, Globe, Search, Zap } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Polysign",
    url: "https://polysign.com.br",
    category: "Comunicação Visual",
    description: "Site institucional para empresa de comunicação visual, com galeria de produtos, portfólio de trabalhos e sistema de orçamento online.",
    tags: ["WordPress", "Elementor", "PHP", "ACF"],
    color: "#a855f7",
    accent: "#120a1a",
    number: "01",
  },
  {
    id: 2,
    title: "Dom Valtin",
    url: "https://domvaltin.com.br",
    category: "Alfaiataria Premium",
    description: "E-commerce e site institucional para alfaiataria de alto padrão, com catálogo de ternos sob medida, aluguel de peças e agendamento.",
    tags: ["WordPress", "WooCommerce", "Elementor", "ACF"],
    color: "#c084fc",
    accent: "#110918",
    number: "02",
  },
  {
    id: 3,
    title: "KV Digital",
    url: "https://kvdigital.com.br",
    category: "Agência Digital",
    description: "Website para agência de marketing digital com soluções, portfólio de clientes, blog integrado e formulário de captação de leads.",
    tags: ["WordPress", "Elementor", "PHP", "SEO"],
    color: "#7c3aed",
    accent: "#0d0818",
    number: "03",
  },
  {
    id: 4,
    title: "Grupo Invest",
    url: "https://grupoinvest.com",
    category: "Investimentos",
    description: "Plataforma institucional para grupo de investimentos com apresentação de produtos financeiros e integração com sistemas externos.",
    tags: ["WordPress", "PHP Puro", "ACF", "Elementor"],
    color: "#9333ea",
    accent: "#0f0816",
    number: "04",
  },
  {
    id: 5,
    title: "Ultragaz",
    url: "https://www.ultragaz.com.br",
    category: "Energia & Gás",
    description: "Site institucional de grande porte para uma das maiores distribuidoras de gás do Brasil, com área de cliente, simulador e integração de sistemas.",
    tags: ["WordPress", "PHP Puro", "ACF", "Performance"],
    color: "#d946ef",
    accent: "#160a18",
    number: "05",
  },
  {
    id: 6,
    title: "Cidade 92.5",
    url: "https://cidade925.com.br",
    category: "Rádio & Entretenimento",
    description: "Portal de rádio com programação ao vivo, podcasts, notícias e player integrado, com streaming em tempo real e alta demanda de acessos.",
    tags: ["WordPress", "Next.js", "TypeScript", "PHP", "Streaming"],
    color: "#a21caf",
    accent: "#130819",
    number: "06",
  },
];

const skills = [
  { name: "WordPress", level: 100, icon: "⚡" },
  { name: "Elementor", level: 100, icon: "🎨" },
  { name: "PHP Puro", level: 100, icon: "🔧" },
  { name: "TypeScript", level: 100, icon: "🌐" },
  { name: "Next.js", level: 100, icon: "⚛" },
  { name: "ACF", level: 100, icon: "📦" },
  { name: "WooCommerce", level: 100, icon: "🛒" },
  { name: "SEO Técnico", level: 100, icon: "📈" },
  { name: "Performance Web", level: 100, icon: "🚀" },
];

// ── Fake PageSpeed widget ──────────────────────────────────────────────
function PageSpeedWidget() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 600);
    return () => clearTimeout(t);
  }, []);

  const scores = [
    { label: "Performance", value: 100, color: "#22c55e" },
    { label: "Acessibilidade", value: 98, color: "#22c55e" },
    { label: "Melhores Práticas", value: 100, color: "#22c55e" },
    { label: "SEO", value: 100, color: "#22c55e" },
  ];

  return (
    <div className="relative rounded-2xl border border-white/10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f0a1a 0%, #1a0d2e 100%)" }}>
      {/* top bar like browser */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: "rgba(0,0,0,0.4)" }}>
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-3 bg-white/8 rounded-md px-3 py-1 text-xs text-white/40 font-mono truncate">
          pagespeed.web.dev
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(168,85,247,0.2)" }}>
            <Zap className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="text-xs text-white/40 font-mono">PageSpeed Insights</div>
            <div className="text-sm font-semibold text-white">Análise de Performance</div>
          </div>
          <div className="ml-auto text-xs text-white/30 font-mono">Mobile</div>
        </div>

        {/* Scores grid */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {scores.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              {/* Circle */}
              <div className="relative w-14 h-14">
                <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                  <motion.circle
                    cx="24" cy="24" r="20" fill="none"
                    stroke={s.color} strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                    animate={{ strokeDashoffset: animated ? 2 * Math.PI * 20 * (1 - s.value / 100) : 2 * Math.PI * 20 }}
                    transition={{ delay: i * 0.15 + 0.2, duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-sm font-black tabular-nums"
                    style={{ color: s.color }}
                    initial={{ opacity: 0 }} animate={{ opacity: animated ? 1 : 0 }}
                    transition={{ delay: i * 0.15 + 0.8 }}
                  >
                    {s.value}
                  </motion.span>
                </div>
              </div>
              <span className="text-[9px] text-white/50 text-center leading-tight font-mono">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Bar metrics */}
        {[
          { label: "First Contentful Paint", value: "0.8s", width: 90, color: "#22c55e" },
          { label: "Largest Contentful Paint", value: "1.2s", width: 85, color: "#22c55e" },
          { label: "Total Blocking Time", value: "0 ms", width: 100, color: "#22c55e" },
          { label: "Cumulative Layout Shift", value: "0.001", width: 98, color: "#22c55e" },
        ].map((m, i) => (
          <div key={m.label} className="mb-2 last:mb-0">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-white/40 font-mono">{m.label}</span>
              <span className="text-[10px] font-bold" style={{ color: m.color }}>{m.value}</span>
            </div>
            <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: m.color }}
                initial={{ width: 0 }}
                animate={{ width: animated ? `${m.width}%` : 0 }}
                transition={{ delay: i * 0.1 + 1, duration: 0.9, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}

        <div className="mt-4 flex items-center gap-2 justify-center">
          <span className="w-2 h-2 rounded-full bg-green-500 block animate-pulse" />
          <span className="text-xs text-green-400 font-mono font-semibold">Nota máxima alcançada · Apenas ilustrativo</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -300, y: -300 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-[#08060f] text-white overflow-x-hidden">

      {/* Cursor glow */}
      <motion.div
        className="fixed w-80 h-80 rounded-full pointer-events-none z-0 blur-3xl opacity-[0.08]"
        animate={{ x: cursorPos.x - 160, y: cursorPos.y - 160 }}
        transition={{ type: "spring", damping: 35, stiffness: 250 }}
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backdropFilter: "blur(20px)", background: "rgba(8,6,15,0.8)", borderBottom: "1px solid rgba(168,85,247,0.1)" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse block" />
          <span className="font-mono text-sm text-white/60 tracking-widest uppercase">Lucas Vianna</span>
        </div>
        <div className="hidden md:flex gap-8">
          {[["Projetos", "#projetos"], ["Skills", "#skills"], ["SEO", "#seo"], ["Contato", "#contato"]].map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wide">
              {label}
            </a>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/lucas-vianna-984404269/"
          target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-purple-500/30 text-purple-400 hover:border-purple-500/70 hover:text-purple-300 transition-all duration-300 font-mono"
        >
          <LinkedinIcon />
          LinkedIn
        </a>
      </motion.nav>

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Grid BG */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(168,85,247,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]" style={{ background: "#7c3aed" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.05]" style={{ background: "#c084fc" }} />
        {/* Rings */}
        {[640, 440, 240].map((size, i) => (
          <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{ width: size, height: size, borderColor: i === 2 ? "rgba(168,85,247,0.2)" : "rgba(168,85,247,0.07)" }} />
        ))}

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-10"
            style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 block animate-pulse" />
            <span className="text-xs text-purple-300/80 font-mono tracking-widest uppercase">Disponível para projetos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }}
            className="text-[clamp(4rem,12vw,8rem)] font-black leading-none tracking-tighter mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="text-white">Lucas</span>
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #e879f9 100%)" }}>
              Vianna
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.8 }}
            className="text-sm font-mono tracking-widest text-purple-400/70 uppercase mb-4"
          >
            Desenvolvedor WordPress · Next.js · TypeScript · PHP Puro
          </motion.p>

          {/* About - LinkedIn description placeholder */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Desenvolvedor web especializado em WordPress e Next.js com foco em resultados. Crio sites institucionais, e-commerces e portais de alto desempenho,
            unindo design com Elementor, campos avançados via ACF e lógica customizada em PHP puro —
            sempre com olho em performance, SEO técnico e experiência do usuário. Também tenho experiência trabalhando em produtos Saas com TypeScript e frameworks modernos, garantindo soluções robustas e escaláveis para meus clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projetos"
              className="group flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 0 0 rgba(168,85,247,0)" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(168,85,247,0.45)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 rgba(168,85,247,0)")}
            >
              Ver Projetos
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/lucas-vianna-984404269/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              style={{ border: "1px solid rgba(168,85,247,0.3)", color: "rgba(196,132,252,0.8)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.7)"; e.currentTarget.style.color = "#c084fc"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)"; e.currentTarget.style.color = "rgba(196,132,252,0.8)"; }}
            >
              <LinkedinIcon />
              Ver LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-xs text-white/20 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ArrowDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ borderTop: "1px solid rgba(168,85,247,0.1)", borderBottom: "1px solid rgba(168,85,247,0.1)" }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "6+", label: "Projetos Entregues" },
            { num: "100%", label: "Clientes Satisfeitos" },
            { num: "7+", label: "Anos de Experiência" },
            { num: "100", label: "PageSpeed Score" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="text-center">
              <div className="text-4xl font-black mb-1 tabular-nums bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #c084fc)", fontFamily: "Georgia, serif" }}>{stat.num}</div>
              <div className="text-xs text-white/35 font-mono tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projetos" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
              <span className="text-xs font-mono tracking-widest uppercase text-purple-400">Trabalhos Selecionados</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-tight tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>
              Projetos<br /><span className="text-white/15">Realizados</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.7 }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div
                  className="group relative rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-500 border"
                  style={{
                    background: activeProject === project.id ? `linear-gradient(135deg, ${project.accent} 0%, #08060f 100%)` : "rgba(168,85,247,0.02)",
                    borderColor: activeProject === project.id ? `${project.color}40` : "rgba(168,85,247,0.1)",
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 15% 50%, ${project.color}05 0%, transparent 65%)` }} />

                  <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                    <div className="text-7xl font-black select-none shrink-0 w-20 leading-none transition-opacity duration-500"
                      style={{ fontFamily: "Georgia, serif", color: project.color, opacity: activeProject === project.id ? 0.2 : 0.07 }}>
                      {project.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <span className="text-xs font-mono tracking-widest uppercase mb-2 block" style={{ color: project.color }}>{project.category}</span>
                          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white" style={{ fontFamily: "Georgia, serif" }}>{project.title}</h3>
                        </div>
                        <a
                          href={project.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border transition-all duration-300 hover:scale-105 shrink-0 font-medium"
                          style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}0D` }}
                          onClick={e => e.stopPropagation()}
                        >
                          <Globe className="w-3.5 h-3.5" />
                          Visitar Site
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-2xl">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full font-mono"
                            style={{ background: `${project.color}0F`, color: `${project.color}BB`, border: `1px solid ${project.color}20` }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO & PERFORMANCE ─── */}
      <section id="seo" style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }} className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
                <span className="text-xs text-purple-400 font-mono tracking-widest uppercase">Além do desenvolvimento</span>
              </div>
              <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-tight tracking-tighter mb-6" style={{ fontFamily: "Georgia, serif" }}>
                SEO & Performance<br /><span className="text-white/20">que entregam resultados</span>
              </h2>
              <p className="text-white/45 leading-relaxed mb-8 text-sm">
                Não basta o site estar no ar — ele precisa ser encontrado e carregar rápido.
                Faço auditorias completas de SEO técnico e otimização de performance, garantindo
                que seus projetos alcancem notas máximas no Google PageSpeed e melhorem seu posicionamento orgânico.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Search className="w-4 h-4" />, title: "Auditoria de SEO Técnico", desc: "Análise de meta tags, sitemap, robots.txt, schema markup, canonicals e erros de rastreamento." },
                  { icon: <Zap className="w-4 h-4" />, title: "Otimização de Performance", desc: "Compressão de imagens, lazy load, minificação de CSS/JS, cache e melhoria de Core Web Vitals." },
                  { icon: <Globe className="w-4 h-4" />, title: "Relatório & Monitoramento", desc: "Relatório detalhado das melhorias implementadas e acompanhamento dos resultados no Google Search Console." },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-300"
                    style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.1)" }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-purple-400"
                      style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.2)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/90 mb-1">{item.title}</div>
                      <div className="text-xs text-white/40 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <PageSpeedWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }} className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
                <span className="text-xs text-purple-400 font-mono tracking-widest uppercase">Stack Técnica</span>
              </div>
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-tight tracking-tighter mb-6" style={{ fontFamily: "Georgia, serif" }}>
                Skills &<br /><span className="text-white/15">Ferramentas</span>
              </h2>
              <p className="text-white/45 leading-relaxed mb-8 text-sm">
                Especializado no ecossistema WordPress, com domínio completo de Elementor para layouts visuais, ACF para campos personalizados e PHP para funcionalidades sob demanda — e sempre otimizando para performance e SEO.
              </p>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "Elementor", "PHP", "ACF", "MySQL", "CSS3", "JavaScript", "WooCommerce", "SEO", "Git", "cPanel", "PageSpeed", "GTmetrix", "Figma"].map(tech => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-full font-mono transition-colors duration-200"
                    style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.15)", color: "rgba(196,132,252,0.65)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-7 pt-2">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.6 }}>
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg leading-none">{skill.icon}</span>
                      <span className="text-sm font-semibold text-white/80">{skill.name}</span>
                    </div>
                    <span className="text-xs text-purple-400 font-mono tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(168,85,247,0.08)" }}>
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.3, duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #7c3aed, #c084fc)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)" }} />
              <span className="text-xs text-purple-400 font-mono tracking-widest uppercase">O que eu faço</span>
              <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>Serviços</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Globe className="w-5 h-5" />, title: "Sites Institucionais", desc: "Sites profissionais em WordPress com design responsivo, otimizados para SEO e alta performance." },
              { icon: <Layers className="w-5 h-5" />, title: "Layouts com Elementor", desc: "Páginas visuais impressionantes com Elementor + ACF para campos dinâmicos e templates customizados." },
              { icon: <Code2 className="w-5 h-5" />, title: "Desenvolvimento PHP", desc: "Funcionalidades customizadas: hooks, plugins, integrações com APIs e sistemas legados via PHP puro." },
              { icon: <Search className="w-5 h-5" />, title: "SEO & Performance", desc: "Auditoria técnica, otimização de Core Web Vitals e PageSpeed para máximo desempenho e visibilidade." },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}
                className="group p-6 rounded-2xl transition-all duration-500"
                style={{ background: "rgba(168,85,247,0.03)", border: "1px solid rgba(168,85,247,0.1)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.1)"; (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.03)"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.2)" }}>
                  {s.icon}
                </div>
                <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: "Georgia, serif" }}>{s.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contato" style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }} className="py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #a855f7)" }} />
              <span className="text-xs text-purple-400 font-mono tracking-widest uppercase">Vamos Trabalhar Juntos</span>
              <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />
            </div>
            <h2 className="text-[clamp(3.5rem,12vw,7rem)] font-black tracking-tighter mb-6 leading-none" style={{ fontFamily: "Georgia, serif" }}>
              Tem um<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #e879f9)" }}>
                Projeto?
              </span>
            </h2>
            <p className="text-white/40 mb-12 leading-relaxed max-w-lg mx-auto">
              Estou disponível para novos projetos. Vamos conversar sobre como posso ajudar a construir sua presença digital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:seuemail@gmail.com"
                className="group flex items-center gap-3 text-white px-9 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 50px rgba(168,85,247,0.45)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <Mail className="w-4 h-4" />
                Enviar E-mail
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/lucas-vianna-984404269/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-9 py-4 rounded-full font-semibold transition-all duration-300"
                style={{ border: "1px solid rgba(168,85,247,0.3)", color: "rgba(196,132,252,0.8)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)"; e.currentTarget.style.color = "#c084fc"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)"; e.currentTarget.style.color = "rgba(196,132,252,0.8)"; }}
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-9 py-4 rounded-full font-semibold transition-all duration-300"
                style={{ border: "1px solid rgba(168,85,247,0.15)", color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }} className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 block" />
            <span className="text-xs text-white/25 font-mono">Lucas Vianna · {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-purple-400 transition-colors duration-300">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/lucas-vianna-984404269/" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-purple-400 transition-colors duration-300">
              <LinkedinIcon />
            </a>
            <span className="text-xs text-white/15 font-mono hidden sm:block">Feito com Next.js</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
