import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer(){
  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Vets4Pets (Animated) */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-semibold text-lg">About Vets4Pets</h3>
          <ul className="space-y-1">
            <motion.li variants={listItemVariants}><Link href="/about" className="hover:text-gray-300">Our Story</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/team" className="hover:text-gray-300">Our Team</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/careers" className="hover:text-gray-300">Careers</Link></motion.li>
          </ul>
        </motion.div>

        {/* Support & Resources (Animated) */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-semibold text-lg">Support & Resources</h3>
          <ul className="space-y-1">
            <motion.li variants={listItemVariants}><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/faq" className="hover:text-gray-300">FAQ</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/help" className="hover:text-gray-300">Help Center</Link></motion.li>
          </ul>
        </motion.div>

        {/* Community & Engagement (Animated) */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-semibold text-lg">Community</h3>
          <ul className="space-y-1">
            <motion.li variants={listItemVariants}><Link href="/blog" className="hover:text-gray-300">Blog</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/events" className="hover:text-gray-300">Events</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/newsletter" className="hover:text-gray-300">Newsletter Signup</Link></motion.li>
          </ul>
        </motion.div>

        {/* Legal & Policies (Animated) */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-semibold text-lg">Legal & Policies</h3>
          <ul className="space-y-1">
            <motion.li variants={listItemVariants}><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></motion.li>
            <motion.li variants={listItemVariants}><Link href="/accessibility" className="hover:text-gray-300">Accessibility</Link></motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section (Copyright, Social Links, Animated) */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 border-t border-gray-700 pt-8 text-center"
      >
        <p>© {new Date().getFullYear()} Vets4Pets. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <motion.a 
            href="#" 
            className="hover:text-gray-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* Social media icon */}
            </svg>
          </motion.a>
          {/* ... other social media links (animated) ... */}
        </div>
      </motion.div>
    </footer>
  );
};
