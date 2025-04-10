"use client";

import Image from "next/image";
import FooterNav from "./footer-bar/footer-nav";
import FooterSocialLinks from "./footer-bar/footer-social-links";
import FooterKontaktInfo from "./footer-bar/footer-kontakt-info";
import FooterAdressInfo from "./footer-bar/footer-adress-info";

export default function GlobalFooter() {
  return (
    <>
    <footer className="flex bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover shadow-md items-center justify-between text-white py-8 border-t-2">
    <div className="container mx-auto px-4">
        {/* Logotyp + Företagsnamn */}
        <header className="mb-4 flex items-center bg-gradient-to-tl to-gray-600 rounded-2xl">
          <Image 
            src="/icons/logo.png" 
            alt="SUMA E-commerce logo" 
            width={40} 
            height={40}
            className="mb-2"
          />
          <h3 className="text-3xl p-2 font-bold text-blue-300 mt-1 ml-2"> S U M A </h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
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
        <p className="text-center mt-6 text-sm opacity-80">
        &copy;  2024 - {new Date().getFullYear()} |  SU_PAL E-commerce <strong className="underline">@SUMA AB.</strong> All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
