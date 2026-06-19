import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What trading instruments are available on Kasper Capital Markets?',
    answer: 'We offer 80+ forex currency pairs, commodities (gold, silver, oil), global indices (US30, NASDAQ, FTSE), and 30+ cryptocurrency CFDs — all accessible from a single account on MT5.',
  },
  {
    question: 'What is the minimum deposit to open a live account?',
    answer: 'You can start trading with a minimum deposit of $100 USD. We offer multiple account types to suit different trading styles and capital levels.',
  },
  {
    question: 'Does Kasper Capital Markets offer a Demo account?',
    answer: 'Yes, we offer a fully-featured demo account with $50,000 virtual funds so you can practice trading strategies and explore all platform features without risking real money.',
  },
  {
    question: 'Which trading platforms do you support?',
    answer: 'We support MetaTrader 5 (MT5) across desktop (Windows/macOS), iOS, Android, and WebTrader. MT5 gives you access to advanced charts, 100+ indicators, and automated Expert Advisors.',
  },
  {
    question: 'Do you offer Islamic (swap-free) accounts?',
    answer: 'Yes. We offer fully Sharia-compliant Islamic accounts with no overnight swap charges on any open positions, designed for traders observing Islamic financial principles.',
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0c0e15] to-[#0B0B0B]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-purple/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to know about starting your brokerage.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'border-accent-cyan/40 bg-gradient-to-b from-accent-cyan/[0.05] to-transparent shadow-lg shadow-accent-cyan/5'
                    : 'border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/20 hover:from-white/[0.05]'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                >
                  <span className={`text-base font-semibold transition-colors duration-300 pr-4 leading-snug ${isActive ? 'text-accent-cyan' : 'text-white group-hover:text-accent-cyan/80'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-cyan text-black border-accent-cyan rotate-0'
                      : 'bg-white/5 text-gray-400 border-white/10 group-hover:border-white/30 group-hover:text-white'
                  }`}>
                    {isActive ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default FAQ;
