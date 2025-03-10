import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-6 w-24 bg-slate-700/50 rounded-full animate-pulse"></div>
              ))}
            </div>
            <div className="h-12 w-3/4 bg-slate-700/50 rounded animate-pulse"></div>
            <div className="h-6 w-full bg-slate-700/50 rounded animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-4">
              <div className="h-8 w-32 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-slate-700/50 rounded animate-pulse"></div>
            </section>

            <section>
              <div className="h-8 w-40 bg-slate-700/50 rounded mb-6 animate-pulse"></div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="h-24 bg-slate-700/30 rounded-xl border border-slate-700/50 animate-pulse"></div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-slate-700/30 p-6 rounded-xl h-40 animate-pulse"></div>
            <div className="bg-slate-700/30 p-6 rounded-xl h-32 animate-pulse"></div>
            <div className="bg-slate-700/30 p-6 rounded-xl h-24 animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loading;