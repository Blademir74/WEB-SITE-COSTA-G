import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-bold text-costa-navy mb-12">Blog & Noticias</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
           
           {/* Main Content: Grid */}
           <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[1, 2, 3, 4].map((post) => (
                    <div key={post} className="flex flex-col group">
                       <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">[Thumbnail]</div>
                       </div>
                       <span className="text-xs font-bold text-costa-lime uppercase mb-2">Sustentabilidad</span>
                       <h3 className="text-xl font-bold text-costa-navy mb-2 group-hover:text-costa-sky transition-colors">
                          Innovación en materiales Bio-Sustentables para el 2025
                       </h3>
                       <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                          Descubre cómo estamos reduciendo la huella de carbono en nuestras obras utilizando nuevas tecnologías de concreto...
                       </p>
                       <a href="#" className="text-costa-navy font-bold text-sm hover:underline mt-auto">Leer más</a>
                    </div>
                 ))}
              </div>
              
              {/* Pagination */}
              <div className="flex gap-2 mt-12">
                 <button className="px-4 py-2 bg-costa-navy text-white rounded">1</button>
                 <button className="px-4 py-2 hover:bg-gray-100 rounded text-gray-600">2</button>
                 <button className="px-4 py-2 hover:bg-gray-100 rounded text-gray-600">3</button>
              </div>
           </div>

           {/* Sidebar */}
           <div className="lg:w-1/3 space-y-8">
              {/* Search Widget */}
              <div className="bg-costa-slate p-6 rounded-lg">
                 <h4 className="font-bold text-costa-navy mb-4">Buscar</h4>
                 <div className="relative">
                    <input type="text" className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded focus:outline-none focus:border-costa-lime" placeholder="Buscar artículo..." />
                    <Search className="absolute right-3 top-3.5 text-gray-400" size={18} />
                 </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-100 p-6 rounded-lg">
                 <h4 className="font-bold text-costa-navy mb-4">Categorías</h4>
                 <ul className="space-y-3">
                    {['Obras Públicas', 'Desarrollo Inmobiliario', 'Tecnología', 'Sustentabilidad', 'Noticias Internas'].map(cat => (
                       <li key={cat} className="flex items-center justify-between text-gray-600 hover:text-costa-sky cursor-pointer group">
                          {cat} <ChevronRight size={16} className="text-gray-300 group-hover:text-costa-sky" />
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Trending */}
              <div className="bg-white border border-gray-100 p-6 rounded-lg">
                 <h4 className="font-bold text-costa-navy mb-4">Más Leídos</h4>
                 <ul className="space-y-4">
                    {[1, 2, 3].map(item => (
                       <li key={item} className="flex gap-4 items-start">
                          <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                          <div>
                             <h5 className="font-bold text-sm text-costa-navy leading-tight hover:text-costa-sky cursor-pointer">
                                Avance de obra en Puente Coahuayutla
                             </h5>
                             <span className="text-xs text-gray-400">Hace 2 días</span>
                          </div>
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;