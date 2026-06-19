import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const offers = [
  {
    title: 'Competitive Spreads from 0.0 Pips',
    description: 'Access raw interbank spreads with no dealing-desk intervention. Transparent pricing with full visibility on every trade.',
  },
  {
    title: 'MetaTrader 5 — Full Suite',
    description: 'Trade on the world\'s most powerful platform. 100+ indicators, automated EAs, mobile app, and web terminal included.',
  },
  {
    title: 'Instant Order Execution (0.01s)',
    description: 'Lightning-fast NDD execution with servers co-located near major liquidity hubs. No requotes, no slippage surprises.',
  },
  {
    title: 'Tier-1 Institutional Liquidity',
    description: 'Deep order books sourced from leading global banks and Prime-of-Prime providers ensuring tight spreads in all conditions.',
  },
  {
    title: '24/7 Multilingual Support',
    description: 'Dedicated account managers available round the clock via live chat, email, and WhatsApp in multiple languages.',
  },
  {
    title: 'Segregated Client Funds',
    description: 'Your capital is held in fully segregated tier-1 bank accounts, protected from company operational activity at all times.',
  }
];

const Features = () => {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      {/* Rich background with diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B10] via-[#0d0f18] to-[#080B10]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-18 text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-5 text-white"
          >
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            A comprehensive suite of solutions tailored to launch, scale, and optimize your Forex brokerage operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.08] rounded-2xl p-8 hover:border-accent-cyan/40 hover:from-accent-cyan/[0.05] transition-all duration-300 ease-in-out relative overflow-hidden"
            >
              {/* Subtle top-left accent */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent-cyan/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/20 rounded-xl flex items-center justify-center mb-6 text-accent-cyan group-hover:scale-110 group-hover:border-accent-cyan/50 transition-all duration-300">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">{offer.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm group-hover:text-gray-400 transition-colors duration-300">{offer.description}</p>

              <div className="flex items-center gap-2 text-accent-cyan font-semibold text-sm opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn More <ArrowRight size={15} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Features;
