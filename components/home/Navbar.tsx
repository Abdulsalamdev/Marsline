'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

const menuItems = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Partner', href: '#partner' },
  { label: 'About Us', href: '#about' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className="w-[90%] m-auto flex justify-between items-center pt-[10px] relative z-50">
      {/* Logo */}
      <div className="text-[26px] text-black font-Plus font-semibold">
        <span className="text-[#DA017F]">Mars</span>line
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-[40px]">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="text-[#979797] font-Plus font-semibold text-[18px] hover:text-[#DA017F] cursor-pointer transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* CTA Button (Desktop) */}
      <button className="rounded-[16px] px-[20px] py-[10px] hidden md:flex items-center bg-[#DA017F] text-white font-semibold shadow-md hover:scale-105 transition-transform">
        Get Started Free
      </button>

      {/* Mobile Menu */}
      <div className="md:hidden" ref={menuRef}>
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <IoClose className="text-[28px] text-[#DA017F]" />
          ) : (
            <FaBars className="text-[24px] text-[#DA017F]" />
          )}
        </button>

        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 70, damping: 15 }}
                className="fixed right-0 top-0 h-full w-[75%] sm:w-[300px] bg-[#DA017F] bg-opacity-95 text-white z-50 shadow-2xl rounded-l-[20px] flex flex-col p-6 gap-6"
              >
                <div className="flex justify-between items-center">
                  <div className="text-[22px] font-semibold">Marsline</div>
                  <IoClose
                    className="text-[28px] cursor-pointer hover:rotate-90 transition-transform"
                    onClick={() => setOpen(false)}
                  />
                </div>

                <div className="flex flex-col gap-5 mt-6">
                  {menuItems.map((item) => (
                    <Link
                      href={item.href}
                      key={item.label}
                      onClick={() => setOpen(false)}
                      className="cursor-pointer text-[18px] font-semibold hover:text-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <button className="mt-auto bg-white text-[#DA017F] font-semibold px-5 py-3 rounded-[12px] shadow-md hover:bg-[#ffe4f0] transition">
                  Get Started Free
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
