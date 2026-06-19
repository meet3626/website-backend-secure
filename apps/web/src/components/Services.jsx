import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Target, Users, LineChart, Globe, Coins, Shield, Code, Briefcase, Server, Lock, Zap } from 'lucide-react';

const servicesData = [
  { icon: LineChart, title: 'Forex Trading', desc: 'Trade 80+ major, minor and exotic currency pairs with competitive spreads from 0.0 pips and deep institutional liquidity.' },
  { icon: Monitor, title: 'MetaTrader 5 (MT5)', desc: 'Industry-standard platform with advanced charting, 100+ technical indicators, expert advisors, and multi-asset trading.' },
  { icon: Globe, title: 'Commodities', desc: 'Trade gold, silver, crude oil, natural gas, and agricultural commodities with ultra-tight spreads and no hidden fees.' },
  { icon: Target, title: 'Indices (CFDs)', desc: 'Access global stock indices including US30, NASDAQ100, FTSE100, DAX40 and more with flexible leverage options.' },
  { icon: Coins, title: 'Crypto CFDs', desc: 'Speculate on Bitcoin, Ethereum, Ripple and 30+ crypto pairs through regulated CFD trading without owning the asset.' },
  { icon: Zap, title: 'Exotic Pairs', desc: 'Capture emerging-market opportunities with USD/TRY, USD/ZAR, EUR/SGD and other high-volatility currency pairs.' },
  { icon: Shield, title: 'Islamic Accounts', desc: 'Swap-free trading accounts fully compliant with Sharia law — no overnight interest charges on any open positions.' },
  { icon: Users, title: 'Client Portal (CRM)', desc: 'Manage deposits, withdrawals, account verification, and documents from a secure, intuitive online client portal.' },
  { icon: Briefcase, title: 'Trading Conditions', desc: 'Transparent spreads, competitive commissions, flexible leverage up to 1:500, and no requotes or hidden markups.' },
  { icon: Server, title: 'VPS Hosting', desc: 'Ultra-low latency VPS servers co-located near liquidity providers for uninterrupted algorithmic and EA trading.' },
  { icon: Lock, title: 'Segregated Funds', desc: 'Client funds held in segregated accounts at tier-1 banks, fully isolated from company operational capital.' },
  { icon: Code, title: 'Educational Center', desc: 'Structured forex education covering fundamentals, technical analysis, risk management, and live market webinars.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#080B10] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Trading Instruments
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Trade</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Access forex, commodities, indices and crypto through a single account with institutional-grade execution and transparent pricing.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-cyan/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-cyan/20 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5A378A] to-[#EE7448] flex items-center justify-center mb-6 text-white shadow-lg shadow-accent-purple/20">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;