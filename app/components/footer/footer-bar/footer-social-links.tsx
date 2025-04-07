"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSocialLinks() {
  return (
    <div className="">
      <h3 className="">FOLLOW US</h3>
      <ul className="">
        <li>
          <Link href="https://www.linkedin.com/in/suzan-al-m-361028275/">
            <Image
              src="/icons/logo-linkedin.svg"
              alt="LinkedIn logo"
              width={44}
              height={44}
              className=""
            />
          </Link>
        </li>
        <li>
          <Link href="https://x.com/SAI06112024">
            <Image
              src="/icons/logo-twitter.svg"
              alt="Twitter logo"
              width={44}
              height={44}
              className=""
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Sai24020">
            <Image
              src="/icons/github.png"
              alt="Github logo"
              width={55}
              height={55}
              className=""
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/">
            <Image
              src="/icons/logo-instagram.svg"
              alt="Instagram logo"
              width={44}
              height={44}
              className=""
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/?locale=sv_SE">
            <Image
              src="/icons/logo-facebook.svg"
              alt="Facebook logo"
              width={44}
              height={44}
              className=""
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
