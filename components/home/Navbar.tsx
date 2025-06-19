'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const menuItems = [
    {label: "Product", href: "#product"},
     {label: "Pricing", href: "#pricing"},
      {label: "Partner", href: "#partner"},
       {label: "About Us", href: "#about"},
    
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
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

      {/* Desktop Menu */}
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

      {/* CTA Button */}
      <button className="rounded-[16px] px-[20px] py-[10px] hidden md:flex items-center bg-[#DA017F] text-white font-semibold shadow-md hover:scale-105 transition-transform">
        Get Started Free
      </button>

      {/* Mobile: Hamburger & Menu */}
      <div className="md:hidden relative" ref={menuRef}>
        <button onClick={() => setOpen((prev) => !prev)}>
          <FaBars className="text-[24px] text-[#DA017F]" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-[45px] bg-[#DA017F] text-white rounded-[16px] shadow-md p-4 w-[200px] flex flex-col gap-4 overflow-hidden"
            >
              {menuItems.map((item) => (
                <Link
                href={item.href}
                  key={item.label}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button className="mt-2 bg-white text-[#DA017F] font-semibold px-4 py-2 rounded-[12px] hover:bg-[#ffe4f0] transition">
                Get Started Free
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
