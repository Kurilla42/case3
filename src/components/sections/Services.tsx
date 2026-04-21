import React from 'react';

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Service Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white p-12 rounded-lg border-2 border-primary/20 text-center">
              Service Block {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
