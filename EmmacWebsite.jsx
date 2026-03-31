export default function EmmacWebsite() {
  const BASE = 'https://raw.githubusercontent.com/Kelvinchim/emmac-construction/main/Upload/main/Public/images/';

  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "100%", label: "Malawian Owned" },
    { value: "24/7", label: "Project Commitment" },
    { value: "01", label: "Trusted Partner" }
  ];

  const projects = [
    { title: "Multi-District Irrigation Schemes", category: "Civil Works", client: "Ministry of Water & Sanitation", period: "2023–2025", hero: BASE + "project-irrigation 6.jpg" },
    { title: "River Training & Dykes", category: "Civil Works", client: "Roads Authority", period: "2018–2021", hero: BASE + "RIver_Training_and_dykes.jpg" },
    { title: "CDSS Construction Project", category: "Building Construction", client: "USAID", period: "2023–2025", hero: BASE + "project-cdss 2.jpg" },
    { title: "Office & Residential Complex", category: "Building Construction", client: "Anchor Mooring Partners", period: "2021", hero: BASE + "project-commercial.jpg" },
  ];

  const services = [
    { title: "Building Construction", text: "Modern commercial, institutional, and residential construction delivered with a strong focus on quality, safety, and execution." },
    { title: "Civil Works", text: "Roads, drainage, site preparation, structural works, and infrastructure support for public and private sector clients." },
    { title: "Project Delivery", text: "End-to-end coordination from planning to handover, with emphasis on timelines, compliance, and cost control." }
  ];

  const clients = [
    { name: "USAID", period: "2023–2025" },
    { name: "Roads Authority", period: "2018–2021" },
    { name: "Lilongwe Water Board", period: "2023–2024" },
    { name: "Ministry of Water & Sanitation", period: "2023–2025" },
    { name: "Northern Region Water Board", period: "2022–2023" },
    { name: "Anchor Mooring Partners", period: "2021" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-2xl font-black tracking-[0.25em]">EMMAC</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">Construction Company</div>
          </div>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#clients" className="transition hover:text-white">Clients</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black">Get in Touch</a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-25">
          <img src={BASE + "project-commercial.jpg"} className="w-full h-full object-cover" alt="" />
          <img src={BASE + "project-cdss 2.jpg"} className="w-full h-full object-cover" alt="" />
          <img src={BASE + "project-irrigation 6.jpg"} className="w-full h-full object-cover" alt="" />
          <img src={BASE + "RIver_Training_and_dykes.jpg"} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/50" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">Civil & Building Contractors · Malawi</div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">Building Malawi with precision, structure, and trust.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">EMMAC Construction delivers infrastructure, irrigation, and building projects across Malawi — on time, to spec, with accountability.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">View Projects</a>
              <a href="#contact" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Get in Touch</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-4xl font-black tracking-tight">{item.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Core Services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl border border-white/10 bg-neutral-900 p-7">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Selected Projects</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.hero} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="mt-3 flex gap-6 text-sm text-white/50">
                    <span>{project.client}</span>
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Who We Work With</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Trusted by institutions that require reliability and scale.</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {clients.map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/10 bg-neutral-900 px-6 py-5">
                <div className="text-base font-semibold">{c.name}</div>
                <div className="mt-1 text-xs text-white/40">{c.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Start a conversation.</h2>
            <p className="mt-4 max-w-sm text-white/55 leading-7">Whether it is a large infrastructure project or a commercial build, we are ready to deliver.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Email</div>
                <div className="mt-2 text-base text-white">info@emmacmw.net</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Location</div>
                <div className="mt-2 text-base text-white">Lilongwe, Malawi</div>
              </div>
            </div>
            <a href="mailto:info@emmacmw.net" className="mt-8 block w-full rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90">Send an Email</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <div className="text-sm font-black tracking-[0.25em]">EMMAC</div>
            <div className="text-xs text-white/30">Construction Company · Malawi</div>
          </div>
          <div className="text-xs text-white/30">© {new Date().getFullYear()} EMMAC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
