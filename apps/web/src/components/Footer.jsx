import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ─── Configure your social media URLs here ───────────────────────────────────
const SOCIAL_LINKS = {
  twitter: 'https://x.com/amaricapitals',       // Update with real X/Twitter handle
  instagram: 'https://instagram.com/amaricapitals', // Update with real Instagram URL
  facebook: 'https://facebook.com/amaricapitals',   // Update with real Facebook URL
};

const Footer = () => {
    const navigate = useNavigate();

    const handleNotImplemented = (e) => {
        e?.preventDefault();
        toast({
            title: "Feature Not Implemented 🚧",
            description: "This page isn't built yet, but you can request it in your next prompt! 🚀",
        });
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        if (href.startsWith('/#')) {
            const id = href.split('#')[1];
            if (window.location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    if (id) {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }, 100);
            } else {
                if (id) {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        } else if (href.startsWith('/')) {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            handleNotImplemented();
        }
    };

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source: 'Newsletter',
                    email: data.email
                })
            });
            const result = await response.json();
            
            if (result.success) {
                toast({
                    title: "Subscribed! 🎉",
                    description: "Thanks for subscribing to our newsletter.",
                });
                reset();
            } else {
                toast({
                    title: "Subscription Failed",
                    description: result.message || "Please try again later.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to connect to server.",
                variant: "destructive"
            });
        }
    };

    const policies = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-and-conditions' },
        { name: 'Disclaimer Policy', href: '/disclaimer' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'Refund & Cancellation Policy', href: '/refund-policy' },
        { name: 'AML & Compliance Policy', href: '/aml-policy' },
        { name: 'Data Protection Policy', href: '/data-protection-policy' },
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/#services' },
        { name: 'About', href: '/about-us' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Brokerage Calculator', href: '/calculator' },
    ];

    const latestPosts = [
        {
            title: 'Forex Broker Digital Marketing Funnel: From Lead to Trader',
            slug: 'forex-broker-digital-marketing-funnel',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=80'
        },
        {
            title: 'How to Launch a Forex Brokerage in 3 Days Using Turnkey Solutions',
            slug: 'how-to-launch-a-forex-brokerage-in-3-days',
            image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&auto=format&fit=crop&q=80'
        },
        {
            title: 'Best Forex Trading Platforms for Brokers in 2026 (MT5, cTrader & More)',
            slug: 'best-forex-trading-platforms-for-brokers-in-2026',
            image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&auto=format&fit=crop&q=80'
        }
    ];

    return (
        <footer className="bg-[#232323] pt-16 pb-12 font-sans">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    
                    {/* Column 1: Brand & Policies */}
                    <div className="lg:col-span-3">
                        <div className="mb-6">
                            <h3 className="text-4xl font-bold tracking-widest text-white">
                                AMARI CAPITALS
                            </h3>
                            <p className="text-xs text-gray-400 tracking-[0.2em] mt-1">IT SOLUTIONS EST</p>
                        </div>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            At Amari Capitals, we are your trusted partner in navigating the dynamic landscape of the Forex market.
                        </p>
                        <div className="flex gap-3 mb-10">
                            <a 
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on X (Twitter)"
                                className="p-2 border border-white/20 rounded hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10 text-gray-300 transition-all duration-300"
                            >
                                <XIcon size={18} />
                            </a>
                            <a 
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Instagram"
                                className="p-2 border border-white/20 rounded hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10 text-gray-300 transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                            <a 
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Facebook"
                                className="p-2 border border-white/20 rounded hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10 text-gray-300 transition-all duration-300"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>

                        <div>
                            <h4 className="text-accent-cyan font-bold mb-2">Policies</h4>
                            <div className="h-0.5 w-8 bg-gradient-to-r from-[#5A378A] to-[#EE7448] mb-4"></div>
                            <ul className="space-y-2">
                                {policies.map(policy => (
                                    <li key={policy.name}>
                                        <a 
                                            href={policy.href}
                                            onClick={(e) => {
                                                if(policy.href === '#') handleNotImplemented(e);
                                                else handleNavClick(e, policy.href);
                                            }}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {policy.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2 lg:ml-8">
                        <h4 className="text-white font-bold text-lg mb-2">Quick Links</h4>
                        <div className="h-0.5 w-12 bg-gradient-to-r from-[#5A378A] to-[#EE7448] mb-6"></div>
                        <ul className="space-y-4">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Latest Posts */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white font-bold text-lg mb-2">Latest Posts</h4>
                        <div className="h-0.5 w-12 bg-gradient-to-r from-[#5A378A] to-[#EE7448] mb-6"></div>
                        <div className="space-y-6">
                            {latestPosts.map((post, idx) => (
                                <div key={idx} className="flex gap-4 group cursor-pointer" onClick={() => {
                                    navigate(`/blog/${post.slug}`);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}>
                                    <div className="w-20 h-14 shrink-0 overflow-hidden rounded">
                                        <OptimizedImage src={post.image} alt={post.title} width={80} height={56} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h5 className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                                        {post.title}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-lg mb-2">Contact Us</h4>
                        <div className="h-0.5 w-12 bg-gradient-to-r from-[#5A378A] to-[#EE7448] mb-6"></div>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex gap-3 text-gray-300 text-sm">
                                <Mail size={18} className="shrink-0 mt-0.5 text-white" />
                                <a href="mailto:enquiry@amaricapitals.com" className="hover:text-white transition-colors">enquiry@amaricapitals.com</a>
                            </div>
                            <div className="flex gap-3 text-gray-300 text-sm">
                                <Phone size={18} className="shrink-0 mt-0.5 text-white" />
                                <a href="tel:+971525889115" className="hover:text-white transition-colors">+971525889115</a>
                            </div>
                            <div className="flex gap-3 text-gray-300 text-sm">
                                <MapPin size={18} className="shrink-0 mt-0.5 text-white" />
                                <span>2807, Churchill Executive Tower,<br/>Business Bay, Dubai, UAE.</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 relative">
                            <div className="flex h-12 rounded overflow-hidden">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    {...register("email", { 
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className="w-full px-4 bg-white text-black outline-none"
                                />
                                <button disabled={isSubmitting} type="submit" className="px-6 bg-gradient-to-r from-[#5A378A] to-[#EE7448] text-white hover:opacity-90 transition-opacity flex items-center justify-center shrink-0 disabled:opacity-50">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                            {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;