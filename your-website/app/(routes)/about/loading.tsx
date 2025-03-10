import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Profile Image */}
        <div className="lg:col-span-4">
          <div className="aspect-square relative rounded-xl overflow-hidden shadow-2xl bg-slate-800 animate-pulse"></div>
        </div>

        {/* About Text */}
        <div className="lg:col-span-8">
          <div className="w-48 h-12 bg-slate-800 rounded-lg mb-6 animate-pulse"></div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-6 w-full bg-slate-800 rounded animate-pulse"></div>
              <div className="h-6 w-5/6 bg-slate-800 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-slate-800 rounded animate-pulse"></div>
              <div className="h-4 w-11/12 bg-slate-800 rounded animate-pulse"></div>
              <div className="h-4 w-10/12 bg-slate-800 rounded animate-pulse"></div>
            </div>

            <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
              <div className="flex-grow">
                <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse"></div>
              </div>
              <div className="h-12 w-32 bg-slate-800 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Quick Facts */}
        <div className="lg:col-span-4">
          <div className="bg-slate-800 rounded-xl p-5 shadow-xl h-64 animate-pulse"></div>
        </div>

        {/* Education */}
        <div className="lg:col-span-8">
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl h-64 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;