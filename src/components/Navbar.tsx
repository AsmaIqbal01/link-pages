import Link from "next/link";
import React from 'react';
export default function Navbar() {
  return (
    <div>

      <ul className="flex gap-11  text-white bg-gray-600 text-3xl">
        <li className="relative group">
          <Link href="/">Home</Link>
        </li>
        
        <li className="relative group">
          <Link href="/about">About</Link>
        </li>
        <li className="relative group">
        <Link href="/products">Products</Link>
                <ul className="hidden group-hover:block absolute top-full left-0 bg-zinc-400 text-white p-4 w-40">
                    <li className="py-2 text-xl"><Link href="/products/nested-route">Garden Chair</Link></li>
                    <li className="py-2 text-xl"><Link href="/products/nested/">Patio Swing</Link></li>
                </ul>
        </li>
        <li className="relative group">
          <Link href="/contact-us">Contact us</Link>
        </li>
        <li className="relative group">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}


