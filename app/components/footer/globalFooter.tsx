"use client";

import Image from "next/image";
import FooterNav from "./footer-bar/footer-nav";
import FooterSocialLinks from "./footer-bar/footer-social-links";
import FooterKontaktInfo from "./footer-bar/footer-kontakt-info";
import FooterAdressInfo from "./footer-bar/footer-adress-info";

export default function GlobalFooter() {
  return (
    <>
    <footer className="">
    <div className="">
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
          <FooterKontaktInfo />

          {/* Adressinformation */}
          <FooterAdressInfo />  
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
