'use client';
import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Hammer, HardHat, Ruler, Truck, Building2, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';
import Hero from '../../components/Hero';

const servicesList = [
  {
    id: 1,
    title: 'Proyecto Ejecutivo',
    icon: <Ruler size={32} />,
    shortDesc: 'Diseño arquitectónico y planificación integral.',
    fullDesc: 'Desarrollamos planos arquitectónicos, estructurales y de instalaciones (MEP) utilizando tecnología BIM para minimizar errores en obra. Incluye renders fotorrealistas y recorridos virtuales.'
  },
  {
    id: 2,
    title: 'Obra Civil & Edificación',
    icon: <Building2 size={32} />,
    shortDesc: 'Construcción residencial, comercial e industrial.',
    fullDesc: 'Ejecución de obra gris y acabados con personal certificado. Especialistas en cimentaciones profundas, estructuras de acero y concreto armado, cumpliendo normativas de seguridad estructural.'
  },
  {
    id: 3,
    title: 'Infraestructura Urbana',
    icon: <Truck size={32} />,
    shortDesc: 'Pavimentación, drenaje y redes de agua.',
    fullDesc: 'Construcción de calles con concreto hidráulico, caminos artesanales, redes de agua potable, alcantarillado sanitario y pluvial. Maquinaria pesada propia para movimientos de tierra.'
  },
  {
    id: 4,
    title: 'Rehabilitación Estructural',
    icon: <Hammer size={32} />,
    shortDesc: 'Reforzamiento y mantenimiento de inmuebles.',
    fullDesc: 'Dictámenes estructurales y reforzamiento de edificaciones dañadas o antiguas. Mantenimiento preventivo y correctivo para escuelas, hospitales y edificios públicos.'
  },
  {
    id: 5,
    title: 'Supervisión de Obra',
    icon: <HardHat size={32} />,
    shortDesc: 'Auditoría técnica y control de calidad.',
    fullDesc: 'Supervisión externa para garantizar que su proyecto se construya según especificaciones, tiempo y costo. Control de estimaciones y pruebas de laboratorio de materiales.'
  },
  {
    id: 6,
    title: 'Acabados & Interiorismo',
    icon: <Paintbrush size={32} />,
    shortDesc: 'Diseño de interiores y detalles finales.',
    fullDesc: 'Instalación de pisos, plafones, carpintería y cancelería de alta gama. Diseño de interiores corporativo y residencial enfocado en la funcionalidad y estética "Clean Luxury".'
  }
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <Hero 
        title="Nuestros Servicios" 
        description="Desde la conceptualización hasta la entrega llave en mano. Ingeniería de valor y construcción Bio-Sustentable."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
      />

      {/* 2. Timeline Process */}
      <section className="py-24 bg-costa-sky/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-costa-navy text-center mb-16">Metodología de Ejecución</h2>
          
          <div className="relative max-w-5xl mx-auto">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
             
             {[
               { step: "01", title: "Análisis y Presupuesto", desc: "Levantamiento topográfico, estudio de mecánica de suelos y presupuesto paramétrico detallado." },
               { step: "02", title: "Ingeniería y Planeación", desc: "Desarrollo de proyecto ejecutivo, trámites de licencias y programación de obra (Ruta Crítica)." },
               { step: "03", title: "Ejecución Bio-Sustentable", desc: "Construcción bajo normas ambientales, gestión de residuos y uso de materiales certificados." },
               { step: "04", title: "Control de Calidad", desc: "Supervisión técnica constante, pruebas de laboratorio y reportes semanales de avance." },
               { step: "05", title: "Entrega y Garantía", desc: "Entrega formal, carpeta técnica (As-Built) y póliza de vicios ocultos." },
             ].map((item, index) => (
               <div key={index} className="mb-8 md:mb-12">
                 <div className={`hidden md:flex flex-row items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                   <div className="w-5/12 p-6 bg-white rounded-xl shadow-soft border border-gray-100 hover:border-costa-sky transition-colors relative group">
                      <span className="text-gray-100 font-bold text-6xl absolute top-2 right-4 -z-0 group-hover:text-costa-sky/10 transition-colors">{item.step}</span>
                      <h3 className="text-xl font-bold text-costa-navy mb-2 relative z-10">{item.title}</h3>
                      <p className="text-gray-500 relative z-10 text-sm">{item.desc}</p>
                   </div>
                   <div className="w-2/12 flex justify-center relative z-10">
                      <div className="w-12 h-12 bg-costa-navy text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-lg">
                        {index + 1}
                      </div>
                   </div>
                   <div className="w-5/12"></div>
                 </div>

                 {/* Mobile Accordion */}
                 <div className="md:hidden bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                   <details className="group">
                     <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                       <div className="flex items-center gap-4">
                         <span className="text-costa-sky font-bold text-lg">{item.step}</span>
                         <span className="font-bold text-costa-navy">{item.title}</span>
                       </div>
                       <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform" size={20} />
                     </summary>
                     <div className="px-4 pb-4 pl-12 text-sm text-gray-500 border-t border-gray-50 pt-2">
                       {item.desc}
                     </div>
                   </details>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Grid Services */}
      <section className="py-24 container mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-costa-navy">Catálogo de Servicios</h2>
            <p className="text-gray-500 mt-2">Especialización técnica en cada área de la construcción.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
               <div 
                 key={service.id} 
                 className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden
                   ${expandedService === service.id ? 'border-costa-sky shadow-floating ring-1 ring-costa-sky' : 'border-gray-100 shadow-soft hover:shadow-lg'}`}
               >
                 <div className="p-8">
                    <div className="w-14 h-14 bg-costa-sky/10 text-costa-navy rounded-lg flex items-center justify-center mb-6">
                       {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-costa-navy mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 min-h-[40px]">
                       {service.shortDesc}
                    </p>
                    
                    <button 
                      onClick={() => toggleService(service.id)}
                      className="text-costa-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-costa-navy transition-colors"
                    >
                      {expandedService === service.id ? 'Menos detalles' : 'Más detalles'} 
                      {expandedService === service.id ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
                    </button>
                 </div>
                 
                 <div className={`bg-gray-50 px-8 transition-all duration-300 ease-in-out overflow-hidden ${expandedService === service.id ? 'max-h-48 py-6 border-t border-gray-100' : 'max-h-0 py-0'}`}>
                    <p className="text-sm text-costa-charcoal leading-relaxed">
                       {service.fullDesc}
                    </p>
                 </div>
               </div>
            ))}
         </div>
      </section>

      {/* 4. Success Cases */}
      <section className="py-24 bg-costa-navy text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-display font-bold">Casos de Éxito</h2>
             <Link href="/proyectos" className="text-costa-sky hover:text-white transition-colors text-sm font-bold flex items-center gap-2">Ver todo <CheckCircle2 size={16}/></Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-[600px] md:h-[400px]">
             <div className="md:col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Caso 1"/>
                <div className="absolute inset-0 bg-gradient-to-t from-costa-navy via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6">
                   <span className="bg-costa-gold text-costa-navy text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">Infraestructura</span>
                   <h3 className="font-bold text-xl">Puente Unión</h3>
                </div>
             </div>
             {[2,3,4,5].map((item) => (
                <div key={item} className="md:col-span-1 relative rounded-xl overflow-hidden group">
                   <img src={`https://picsum.photos/seed/${item+20}/400/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Caso ${item}`}/>
                   <div className="absolute inset-0 bg-costa-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Ver Caso</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center relative">
        <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-3xl font-display font-bold text-costa-navy mb-6">¿Listo para construir?</h2>
           <Link href="/contacto">
             <Button variant="primary" className="!px-10 !py-4" withIcon>
               Solicitar Cotización
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}