import React from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

import { Button } from "../button";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Vets4Pets */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">About Vets4Pets</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:text-gray-800">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-800">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gray-800">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Support & Resources */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Support & Resources</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/contact" className="hover:text-gray-800">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-800">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-gray-800">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Community & Engagement */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Community</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/blog" className="hover:text-gray-800">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-gray-800">
                Events
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="hover:text-gray-800">
                Newsletter Signup
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div className="mt-4 flex justify-center space-x-4">
          <Button
            variant="outline"
            className=" hover:bg-gray-700 hover:text-gray-300"
          >
            <Link href="#">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <FaSquareFacebook className="w-6 h-6" />
              </svg>
            </Link>
          </Button>
          <Button
            variant="outline"
            className=" hover:bg-gray-700 hover:text-gray-300"
          >
            <Link href="#">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <FaLinkedin className="w-6 h-6" />
              </svg>
            </Link>
          </Button>
          <Button
            variant="outline"
            className=" hover:bg-gray-700 hover:text-gray-300"
          >
            <Link href="#">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <FaXTwitter className="w-6 h-6" />
              </svg>
            </Link>
          </Button>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-8 text-center">
        <p>© {new Date().getFullYear()} Vets4Pets. All rights reserved.</p>
        <div className="mt-4 flex flex-row justify-center space-x-4">
          <Link href="/privacy" className="hover:text-gray-800">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-800">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-gray-800">
            Cookies Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
