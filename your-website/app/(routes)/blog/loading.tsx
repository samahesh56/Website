import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-48 h-12 bg-slate-800 rounded-lg mb-8 animate-pulse"></div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="bg-slate-800 rounded-lg overflow-hidden animate-pulse">
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                <div className="h-6 w-16 bg-slate-700 rounded-full"></div>
                <div className="h-6 w-16 bg-slate-700 rounded-full"></div>
              </div>
              <div className="h-8 w-3/4 bg-slate-700 rounded mb-4"></div>
              <div className="h-4 w-full bg-slate-700 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-slate-700 rounded mb-4"></div>
              <div className="flex items-center justify-between">
                <div className="h-4 w-24 bg-slate-700 rounded"></div>
                <div className="h-4 w-24 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;