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
    { title: "River Training & Dykes", category: "Civil Works", client: "Roads Authority", period: "2018–2021", hero: BASE + "RIver Training and dykes.jpg" },
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
