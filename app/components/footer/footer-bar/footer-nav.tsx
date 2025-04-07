"use client";

import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="">
      <h3 className="">LINKS</h3>

      <ul className="">
        <li className="">
          <a><Link href="/">HOME</Link></a>
        </li>
        <li className="">
          <Link href="/products">PRODUCTS</Link>
        </li>
        <li className="">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="">
          <Link href="/contact">CONTACT</Link>
        </li>
        <li className="">
          <Link href="/profile">PROFILE</Link>
        </li>
      </ul>
    </nav>
  );
}