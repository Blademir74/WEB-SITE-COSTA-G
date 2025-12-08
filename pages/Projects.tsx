'use client';
import React, { useState } from 'react';
import { Filter, X, Rotate3D, Image as ImageIcon, MapPin, Calendar, User, DollarSign, Search, ChevronDown } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import Hero from '../../components/Hero';

export default function Projects() {
  const [sector, setSector] = useState('Todos');
  const [location, setLocation] = useState('Todas');
  const [year, setYear] = useState('Todos');
  const [budget, setBudget] = useState('Todos');

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'photos' | '360'>('photos');

  const openModal = (id: number) => {
    setSelectedProject(id);
    setViewMode('photos');
  };

  const closeModal = () => setSelectedProject(null);

  const projects = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Proyecto ${i + 1}`,
    category: i % 3 === 0 ? 'Infraestructura' : i % 3 === 1 ? 'Residencial' : 'Comercial',
    location: i % 2 === 0 ? 'Chilpancingo' : 'Acapulco',
    year: i < 4 ? '2024' : '2023',
    image: `https://picsum.photos/seed/${i + 100}/800/600`,
    has360: i % 2 === 0
  }));

  const filteredProjects = projects.filter(p => {
    return (sector === 'Todos' || p.category === sector) &&
           (location === 'Todas' || p.location === location) &&
           (year === 'Todos' || p.year === year);
  });

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <Hero 
        title="Portafolio de Obras" 
        description="Explora nuestra trayectoria en infraestructura educativa, caminos y obra civil."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000"
      />

      {/* 2. Sticky Filters */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200 transition-all">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 text-costa-navy font-bold text-sm whitespace-nowrap">
               <Filter size={16} /> <span className="hidden md:inline">Filtrar por:</span>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
               <div className="relative min-w-[140px]">
                  <select 
                    value={sector} 
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-costa-charcoal focus:border-costa-sky focus:outline-none appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <option>Todos</option>
                    <option>Infraestructura</option>
                    <option>Residencial</option>
                    <option>Comercial</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
               </div>

               <div className="relative min-w-[140px]">
                  <select 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-costa-charcoal focus:border-costa-sky focus:outline-none appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <option>Todas</option>
                    <option>Chilpancingo</option>
                    <option>Acapulco</option>
                    <option>Zihuatanejo</option>
                  </select>
                  <MapPin size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
               </div>

               <div className="relative min-w-[120px]">
                  <select 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-costa-charcoal focus:border-costa-sky focus:outline-none appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <option>Todos</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                  <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
               </div>

               <div className="relative min-w-[140px]">
                  <select 
                    value={budget} 
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-costa-charcoal focus:border-costa-sky focus:outline-none appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <option>Presupuesto</option>
                    <option>Menor a 1M</option>
                    <option>1M - 5M</option>
                    <option>Mayor a 5M</option>
                  </select>
                  <DollarSign size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
               </div>
            </div>

            {(sector !== 'Todos' || location !== 'Todas' || year !== 'Todos') && (
              <button 
                onClick={() => { setSector('Todos'); setLocation('Todas'); setYear('Todos'); }}
                className="text-xs text-red-500 font-bold hover:underline whitespace-nowrap"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Grid */}
      <section className="py-12 container mx-auto px-6 bg-white min-h-screen">
         {filteredProjects.length > 0 ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  year={project.year}
                  has360={project.has360}
                  onClick={() => openModal(project.id)}
                />
              ))}
           </div>
         ) : (
           <div className="flex flex-col items-center justify-center py-20 opacity-50">
              <Search size={48} className="mb-4 text-gray-300"/>
              <p className="text-xl font-bold text-gray-400">No se encontraron proyectos</p>
              <p className="text-sm text-gray-400">Intenta ajustar los filtros de búsqueda</p>
           </div>
         )}
      </section>

      {/* 4. Modal Detail */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] bg-costa-navy/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
           <div className="bg-white rounded-xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col relative shadow-2xl">
              
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <div>
                   <h2 className="text-xl md:text-2xl font-display font-bold text-costa-navy">Proyecto Ejecutivo {selectedProject}</h2>
                   <p className="text-xs md:text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <MapPin size={14} className="text-costa-sky" /> Chilpancingo, Guerrero
                   </p>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-costa-navy">
                   <X size={24} />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row flex-grow overflow-hidden">
                <div className="lg:w-2/3 bg-gray-900 relative h-[300px] lg:h-auto group">
                   {viewMode === 'photos' ? (
                     <img 
                        src={`https://picsum.photos/seed/${selectedProject}/1200/800`} 
                        className="w-full h-full object-contain"
                        alt="Project View"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white flex-col cursor-move">
                        <Rotate3D size={64} className="animate-spin-slow mb-4 text-costa-lime" />
                        <p className="font-bold text-lg">Vista 360° Interactiva</p>
                        <p className="text-sm text-gray-400 mt-2">Arrastra para girar la vista</p>
                     </div>
                   )}

                   <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex bg-black/50 backdrop-blur-md rounded-full p-1 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => setViewMode('photos')}
                        className={`px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === 'photos' ? 'bg-white text-costa-navy' : 'text-white hover:bg-white/10'}`}
                      >
                        <ImageIcon size={14} /> Fotos
                      </button>
                      <button 
                        onClick={() => setViewMode('360')}
                        className={`px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === '360' ? 'bg-costa-lime text-costa-navy' : 'text-white hover:bg-white/10'}`}
                      >
                        <Rotate3D size={14} /> 360°
                      </button>
                   </div>
                </div>

                <div className="lg:w-1/3 p-6 lg:p-8 bg-white overflow-y-auto">
                   <h3 className="font-bold text-lg text-costa-navy mb-4 border-l-4 border-costa-sky pl-3">Detalles</h3>
                   <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      Construcción integral que incluye cimentación profunda, estructura metálica y acabados de alta durabilidad. 
                      Se implementaron sistemas de recolección pluvial y materiales térmicos para reducir el impacto ambiental.
                   </p>
                   
                   <div className="bg-costa-sky/5 p-5 rounded-lg border border-costa-sky/10 space-y-3">
                      <div className="flex justify-between border-b border-gray-200/50 pb-2">
                         <span className="text-gray-500 text-xs flex items-center gap-2"><User size={12}/> Cliente</span>
                         <span className="font-bold text-costa-navy text-sm">Privado</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/50 pb-2">
                         <span className="text-gray-500 text-xs flex items-center gap-2"><Calendar size={12}/> Entrega</span>
                         <span className="font-bold text-costa-navy text-sm">Marzo 2024</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/50 pb-2">
                         <span className="text-gray-500 text-xs flex items-center gap-2"><DollarSign size={12}/> Inversión</span>
                         <span className="font-bold text-costa-navy text-sm">$4.5 MDP</span>
                      </div>
                   </div>

                   <button className="w-full mt-6 bg-costa-navy text-white py-3 rounded font-bold text-sm hover:bg-costa-sky hover:text-costa-navy transition-colors">
                     Solicitar Ficha Técnica
                   </button>
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}