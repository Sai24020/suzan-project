"use client";

import Image from "next/image";
import FooterNav from "./footer-bar/footer-nav";
import FooterSocialLinks from "./footer-bar/footer-social-links";

export default function GlobalFooter() {
  return (
    <>
    <footer className="">
   
        {/* Logotyp + Företagsnamn */}
        <header className="">
          <Image 
            src="/icons/logo.png" 
            alt="SUMA E-commerce logo" 
            width={40} 
            height={40}
            className=""
          />
          <h3 className="">SUMA</h3>
        </header>

        <div className="">
          {/* Navigationslänkar */}
          <FooterNav />

          
          {/* Sociala medier */}
          <FooterSocialLinks />         

          {/* Kontaktinformation */}
          <div className="">
            <h3 className="">CONTACT</h3>
          </div>

          {/* Adressinformation */}
          <div className="">
            <h3 className="">ADDRESS</h3>
       
        </div>

        {/* Copyright-text */}
        <p className="">
          © 2025 SU_PAL E-commerce <strong>@SUMA AB.</strong> All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
