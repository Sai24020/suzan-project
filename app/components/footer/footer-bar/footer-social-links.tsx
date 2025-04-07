"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSocialLinks() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-2xl font-semibold mb-2 p-2 text-blue-200 bg-gradient-to-tl to-gray-600 rounded-2xl">FOLLOW US</h3>
      <ul className="flex flex-col md:flex-col lg:flex-col gap-4 md:gap-6">
      <li>
          <Link href="https://github.com/Sai24020">
            <Image
              src="/icons/github.svg"
              alt="Github logo"
              width={33}
              height={33}
              className="hover:opacity-50 transition-opacity fill-white"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/suzan-al-m-361028275/">
            <Image
              src="/icons/logo-linkedin.svg"
              alt="LinkedIn logo"
              width={33}
              height={33}
              className="hover:opacity-50 transition-opacity"
            />
          </Link>
        </li>
        <li>
          <Link href="https://x.com/SAI06112024">
            <Image
              src="/icons/logo-twitter.svg"
              alt="Twitter logo"
              width={33}
              height={33}
              className="hover:opacity-50 transition-opacity"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/">
            <Image
              src="/icons/logo-instagram.svg"
              alt="Instagram logo"
              width={33}
              height={33}
              className="hover:opacity-50 transition-opacity"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/?locale=sv_SE">
            <Image
              src="/icons/logo-facebook.svg"
              alt="Facebook logo"
              width={33}
              height={33}
              className="hover:opacity-50 transition-opacity"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
