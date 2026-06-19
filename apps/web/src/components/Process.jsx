import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Market Research', description: 'Identifying your target audience and regulatory jurisdiction for optimal market entry.' },
  { id: '02', title: 'Company Incorporation', description: 'Complete legal registration and structuring of your business entity.' },
  { id: '03', title: 'Licensing & Compliance', description: 'Obtaining necessary permits and ensuring strict regulatory adherence.' },
  { id: '04', title: 'Platform Selection', description: 'Deploying robust, world-class trading platforms and infrastructure.' },
  { id: '05', title: 'Liquidity Setup', description: 'Partnering with tier-1 liquidity providers for deep, reliable market access.' },
  { id: '06', title: 'CRM Integration', description: 'Setting up advanced back-office systems for client management, KYC, and AML.' },
  { id: '07', title: 'Payment Systems', description: 'Configuring secure, global deposit and withdrawal methods for seamless transactions.' },
  { id: '08', title: 'Risk Management', description: 'Installing sophisticated RMS tools to monitor and mitigate operational risks.' },
  { id: '09', title: 'Marketing Strategy', description: 'Implementing high-conversion digital marketing funnels to attract your target audience.' },
  { id: '10', title: 'Go-Live & Support', description: 'Final system testing, comprehensive staff training, and official 24/7 launch.' }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-xs font-bold tracking-widest text-white mb-6 uppercase">
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-[800] text-white leading-tight uppercase tracking-[0.15em]">
            <span className="block">The Complete</span>
            <span className="block text-gradient-coral">10-Step Process</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] mt-6">
            A proven, step-by-step framework designed to take your business from concept to a fully operational industry leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-8 bg-[#121212] border border-[#ffffff15] rounded-3xl hover:border-white/30 transition-colors duration-500 flex flex-col h-full"
            >
              <div className="text-5xl font-[800] text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 mb-6">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-[#FF6B4A] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed flex-grow">
                {step.description}
              </p>
              
              {/* Subtle Gradient Background Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B4A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
