import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-48 h-12 bg-slate-800 rounded-lg mb-8 animate-pulse"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-slate-800 rounded-lg overflow-hidden animate-pulse">
            <div className="w-full aspect-[16/9] bg-slate-700"></div>
            <div className="p-6">
              <div className="h-8 w-3/4 bg-slate-700 rounded mb-4"></div>
              <div className="h-4 w-full bg-slate-700 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-slate-700 rounded mb-4"></div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-6 w-16 bg-slate-700 rounded-full"></div>
                ))}
              </div>
              
              <div className="h-4 w-32 bg-slate-700 rounded mb-4"></div>
              
              <div className="flex gap-4 mt-4">
                <div className="h-4 w-16 bg-slate-700 rounded"></div>
                <div className="h-4 w-16 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;