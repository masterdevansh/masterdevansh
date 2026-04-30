const ProjectCard = ({ title, description, tech, neon = false }) => (
  <article
    className={`project-card pointer-events-auto w-64 rounded-2xl border px-5 py-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${
      neon
        ? 'border-cyan-300/60 bg-slate-900/50 text-cyan-100 shadow-neon'
        : 'border-white/20 bg-white/20 text-white'
    }`}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm opacity-90">{description}</p>
    <p className="mt-3 text-xs uppercase tracking-wider opacity-75">{tech}</p>
  </article>
);

export default ProjectCard;
