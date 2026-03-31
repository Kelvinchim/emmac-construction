export default function EmmacWebsite() {
  const BASE = 'https://raw.githubusercontent.com/Kelvinchim/emmac-construction/main/Upload/main/Public/images/';


  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "100%", label: "Malawian Owned" },
    { value: "24/7", label: "Project Commitment" },
    { value: "01", label: "Trusted Partner" }
  ];


  const projects = [
    {
      title: "Multi-District Irrigation Schemes",
      category: "Civil Works",
      client: "Ministry of Water & Sanitation",
      period: "2023–2025",
      hero: BASE + "project-irrigation 6.jpg",
    },
    {
      title: "River Training & Dykes",
      category: "Civil Works",
      client: "Roads Authority",
      period: "2018–2021",
      hero: BASE + "RIver_Training_and_dykes.jpg",
    },
    {
      title: "CDSS Construction Project",
      category: "Building Construction",
      client: "USAID",
      period: "2023–2025",
      hero: BASE + "project-cdss 2.jpg",
    },
    {
      title: "Office & Residential Complex",
      category: "Building Construction",
      client: "Anchor Mooring Partners",
      period: "2021",
      hero: BASE + "project-commercial.jpg",
    },
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
