import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Rashidi',
    role: 'Institutional Trader, Dubai',
    content: 'The MT5 execution speed is remarkable. Sub-10ms fills even during NFP releases. Spreads on EUR/USD consistently under 0.2 pips during London session. This is a broker built for serious traders.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Sofia Papadopoulos',
    role: 'FX Analyst, Athens',
    content: 'I have tested seven brokers over three years. None match Kasper\'s transparency on pricing. No hidden markups, real-time spread monitoring, and instant withdrawals every time.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'James Okafor',
    role: 'Algorithmic Trader, Lagos',
    content: 'Running 12 EAs simultaneously on their VPS with zero downtime over six months. The NDD execution model means my scalping strategies work exactly as backtested. Outstanding infrastructure.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Priya Mehta',
    role: 'Portfolio Manager, Mumbai',
    content: 'Switching to an Islamic account was seamless. No swap complications, instant KYC approval within 2 hours, and the client portal is the cleanest I have ever used. Genuinely impressive.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    role: 'Prop Trader, Lisbon',
    content: 'The 24/7 WhatsApp support alone separates them from the competition. Got a margin query resolved at 3am during Asian session. Professional, knowledgeable, and genuinely responsive team.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Yuki Tanaka',
    role: 'Retail Trader, Tokyo',
    content: 'Gold (XAU/USD) spreads at 0.15 during peak hours is extraordinary. Combined with the MT5 mobile app and instant funding, I have genuinely never had a better trading experience.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < testimonials.length - itemsPerPage;

  const scroll = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'left' && canScrollLeft) {
      newIndex = Math.max(0, currentIndex - 1);
    } else if (direction === 'right' && canScrollRight) {
      newIndex = Math.min(testimonials.length - itemsPerPage, currentIndex + 1);
    }

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      if (scrollContainerRef.current) {
        const card = scrollContainerRef.current.children[newIndex];
        if(card) {
          scrollContainerRef.current.scrollTo({
            left: card.offsetLeft,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <section id="testimonials" className="py-32 bg-[#0B0B0B] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-[800] text-white leading-tight uppercase tracking-[0.15em] max-w-2xl">
            Trusted by <span className="text-accent-cyan">industry leaders</span>
          </h2>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-4 rounded-full bg-[#121212] border border-[#ffffff15] text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-4 rounded-full bg-[#121212] border border-[#ffffff15] text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div
          ref={scrollContainerRef}
          // Removed -mx-6 and adjusted card width for proper alignment with px-6 on parent
          className="flex flex-nowrap gap-8 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              // Adjusting width to be responsive to the parent's padding
              className="flex-shrink-0 w-[calc(100%-48px)] md:w-[calc(50%-16px)] snap-start"
            >
              <div className="bg-[#121620] p-10 rounded-3xl h-full flex flex-col border border-white/5 hover:border-accent-cyan/30 transition-colors">
                <div className="flex items-center mb-8">
                  <OptimizedImage width={56} height={56} className="w-14 h-14 rounded-full mr-5 object-cover border border-white/10" alt={testimonial.name} src={testimonial.avatar} />
                  <div>
                    <p className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.name}</p>
                    <p className="text-sm text-[#A0A0A0]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white text-lg leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end md:hidden">
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-4 rounded-full bg-[#121212] border border-[#ffffff15] text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-4 rounded-full bg-[#121212] border border-[#ffffff15] text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;