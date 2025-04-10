"use client";

import Image from 'next/image';
import { FaBars, FaFilter, FaSearch } from 'react-icons/fa';
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import Form from 'next/form';
import { Search } from 'lucide-react';

export default function GlobalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("price-asc");

  // Dummy sorting handler – replace with real product list logic
  const handleSort = (option: string) => {
    setSortOption(option);
    setSortOpen(false); // stäng dropdown när man väljer
    console.log("Sorting by:", option);
    // Sort logic here...
  };

  return (
    <div className="bg-gray-300">
      {/* Palestine Flag Border */}
      <div className="border-t-4 border-black"></div>
      <div className="border-t-4 border-white"></div>
      <div className="border-t-4 border-red-600"></div>
      <div className="border-t-4 border-white"></div>
      <div className="border-t-4 border-green-900"></div>
      <header className="flex bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-4 py-3 items-center justify-between">

     
        {/* Logo and Name of E-commerce  <header className="flex bg-black shadow-md px-4 py-3 items-center justify-between">*/}
        <Link href="/" className="flex items-center justify-center space-x-2">
        <div className="flex items-center justify-center space-x-2">
        
        <div className=" ml-9 bg-blue-200 w-14 rounded-full mt-0 hover:bg-red-400 bg-gradient-to-tl to-gray-600">
        <Image src="/icons/logo.png" alt="company logo" width={50} height={50} />
        <div className='mb-1 ml-1'>
              <span className="text-black font-bold">S</span>
              <span className="text-white">U</span>
              <span className="text-red-500">M</span>
              <span className="text-green-900">A</span>
            </div>
            </div>
          <h1 className="font-bold text-3xl text-blue-200  hover:text-red-400 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl">
            S U M A </h1>
        
        </div>    
        </Link>
        {/* Middle Icons: Search + Filter */}
        <div className="flex items-center space-x-4 text-white">
          {/* Search Toggle */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-2xl cursor-pointer p-2 hover:bg-red-400">
            {searchOpen ? <IoClose /> : <FaSearch />}
          </button>

          {/* Filter Toggle */}
          <button onClick={() => setSortOpen(!sortOpen)} className="text-2xl cursor-pointer p-2 hover:bg-red-400">
            {sortOpen ? <IoClose /> : <FaFilter />}
          </button>
        </div>

        {/* Right Side: Navigation + Burger */}
        <div className="flex items-center space-x-4 text-white font-bold text-1xl">
          <button className="text-4xl font-bold right-0 cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>
          <ul className={`md:flex gap-4 ${menuOpen ? "block" : "hidden"} absolute md:static top-26 left-0 right-0 bg-white md:bg-transparent border md:border-0 p-2 md:p-0`}>
            <li><a href="/products" className="bg-gray-800 block p-2 border-b md:border-0 text-center w-full  hover:bg-red-400">PRODUCTS</a></li>
            <li><a href="/about" className="bg-gradient-to-r from-red-500 to-white p-2 border-b md:border-0 block text-black text-center w-full hover:text-2xl">ABOUT</a></li>
            <li><a href="/contact" className="bg-green-900 block p-2 text-center w-full  hover:bg-red-400">CONTACT</a></li>
          </ul>
        </div>
      </header>

      {/* Search Input */}
      {searchOpen && (
        <div className="p-4 bg-gray-100 flex items-center justify-center">
          <input 
            type="text" 
            placeholder="What are you looking for?" 
            className="w-full max-w-md p-2 border rounded-md focus:outline-none" 
          />
          <FaSearch className="text-xl ml-2" />
        </div>
      )}

      {/* Sort Dropdown */}
      {sortOpen && (
        <div className="p-4 bg-gray-100 flex items-center justify-center">
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full max-w-xs p-2 border rounded-md focus:outline-none"
          >
            <option value="price-asc">Pris: Lågt till Högt</option>
            <option value="price-desc">Pris: Högt till Lågt</option>
          </select>
        </div>
      )}
          {/* Image med tittle min profile sen länk till min profile(CV) */}
        <div> 
        <header className="flex bg-[url('/images/tree2.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-6 py-7 ">
        <a href={"/profile"}>
        <span className='text-yellow-300 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl hover:text-amber-50 hover:text-5xl text-2xl bold text-shadow-amber-800 cursor-pointer'>
          Min PROFILE
        </span>
        </a>
        <Form action="/search " className='relative flex gap-5 items-center justify-between h-20 px-25'>
    {/* On submission, the input value will be appended to the URL, e.g. /search?query=abc */}
    <Search className="absolute right-135 top-10 h-4 w-4 text-muted-foreground -translate-y-1/2" />
    <input name="query" className='w-100 pl-10' type="search" placeholder="Search for product" />
    <button type="submit">SÖK</button>
  </Form>
        </header>
        </div>
    </div>
  );
}

