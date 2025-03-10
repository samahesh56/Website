import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="w-48 h-12 bg-slate-800 rounded-lg mb-8 animate-pulse"></div>
        <div className="h-4 w-full bg-slate-800 rounded mb-8 animate-pulse"></div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="h-4 w-16 bg-slate-800 rounded animate-pulse"></div>
              <div className="h-10 w-full bg-slate-800 rounded animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-16 bg-slate-800 rounded animate-pulse"></div>
              <div className="h-10 w-full bg-slate-800 rounded animate-pulse"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="h-4 w-20 bg-slate-800 rounded animate-pulse"></div>
            <div className="h-10 w-full bg-slate-800 rounded animate-pulse"></div>
          </div>
          
          <div className="space-y-2">
            <div className="h-4 w-24 bg-slate-800 rounded animate-pulse"></div>
            <div className="h-40 w-full bg-slate-800 rounded animate-pulse"></div>
          </div>
          
          <div className="h-12 w-full bg-slate-800 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;