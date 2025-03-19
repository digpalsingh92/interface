import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary">PETMEDS</h2>
            <p className="mt-3 text-gray-400">
              Your trusted partner for pet healthcare. Book appointments with expert veterinarians.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="/services" className="hover:text-primary transition">Services</a></li>
              <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <p className="mt-3 text-gray-400">123 Pet Street, New York, NY</p>
            <p className="text-gray-400">Email: support@petmeds.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-primary transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-primary transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-primary transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} PETMEDS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
