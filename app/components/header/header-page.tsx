"use client";

import Link from "next/link";
import Image from 'next/image';
import { FaBars, FaFilter, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { IoClose } from "react-icons/io5";
import { Search } from "lucide-react";
import Form from "next/form";

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        if (searchQuery.length <= 2) {
            alert("Sökningen måste vara längre än 2 karaktärer");
            return;
        }
        router.push(`/products/search?query=${searchQuery}`);   //efter flyta folder search fixa här
        setIsSearchOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="bg-gray-300">
            {/* Top Bar */}
            <div className="border-t-4 border-black"></div>
            <div className="border-t-4 border-white"></div>
            <div className="border-t-4 border-red-600"></div>
            <div className="border-t-4 border-white"></div>
            <div className="border-t-4 border-green-900"></div>

            <header className="relative flex bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-4 py-3 items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                    
                {/* Menu Icon */}
                <div onClick={() => setIsOpen(true)} className="md:hidden cursor-pointer text-blue-300 hover:bg-white">
                    <FaBars size={24} />
                </div>

                    <Link href="/" className="flex items-center justify-center space-x-2">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="ml-9 bg-blue-200 w-14 rounded-full mt-0 hover:bg-red-400 bg-gradient-to-tl to-gray-600">
                                <Image src="/icons/logo.png" alt="company logo" width={50} height={50} />
                                <div className='mb-1 ml-1'>
                                    <span className="text-black font-bold">S</span>
                                    <span className="text-white">U</span>
                                    <span className="text-red-500">M</span>
                                    <span className="text-green-900">A</span>
                                </div>
                            </div>
                            <h1 className="font-bold text-3xl text-blue-200 hover:text-red-400 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl">
                                S U M A
                            </h1>
                        </div>
                    </Link>
                </div>

                {/* Middel Side Icons */}
                <div className="flex items-center space-x-4 flex-1 justify-end">
                    {/* Search input for desktop */}
                    <div className="hidden md:flex items-center border rounded-lg overflow-hidden">
                        <input className="border-2 border-yellow-300 hover:border-blue-500 text-blue-400 hover:text-yellow-200"
                            type='text'
                            placeholder='Search products'
                            value={searchQuery}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Search icon for desktop */}
                    <div>
                        <FaSearch className="text-2xl cursor-pointer text-blue-300 hover:bg-white hidden md:block"
                            onClick={handleSearch} />
                    </div>

                    {/* Mobile Search Icon */}
                    <div>
                        <FaSearch className="text-2xl cursor-pointer text-blue-300 hover:bg-white md:hidden"
                            onClick={() => setIsSearchOpen(true)} />

                        {/* Search Popup (mobil) */}
                        {isSearchOpen && (
                            <div className="absolute top-full left-0 w-full bg-gray-300 flex justify-center z-50 p-4">
                                <div className="bg-blue-200 p-6 rounded-xl w-11/12 max-w-lg shadow-lg relative">
                                    <FaTimes
                                        className="absolute top-2 right-2 bg-red-700 hover:bg-green-400 rounded-full p-1 shadow-md text-xl cursor-pointer"
                                        onClick={() => setIsSearchOpen(false)}
                                    />

                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <input
                                            type="text"
                                            placeholder="Search for products"
                                            className="flex-grow p-3 outline-none text-black"
                                            value={searchQuery}
                                            onKeyDown={handleKeyDown}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button
                                            className="bg-blue-500 text-black p-3 hover:bg-blue-800 rounded-full"
                                            onClick={handleSearch}>
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-6  text-blue-300 text-2xl">
                            <li><Link href="/" className="hover:bg-white">HOME</Link></li>
                            <li><Link href="/products" className="hover:bg-white">PRODUCTS</Link></li>
                            <li><Link href="/about" className="hover:bg-white">ABOUT</Link></li>
                            <li><Link href="/contact" className="hover:bg-white">CONTACT</Link></li>
                            <li><Link href="/profile" className="hover:bg-white hidden">PROFILE</Link></li>
                            <li><Link href="/" className="hover:bg-white hidden">FILTER</Link></li>
                            <li><Link href="/" className="hover:bg-white hidden">CART</Link></li>
                            <li><Link href="/" className="hover:bg-white hidden">FAVORITE</Link></li>
                        </ul>
                    </div>

                    {/* Slide Menu (mobil) */}
                    <div className={`absolute top-full left-0 w-64 bg-gray-300 text-black shadow-lg z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between p-4 border-b border-gray-400">
                            <FaTimes className="cursor-pointer" size={24} onClick={() => setIsOpen(false)} />
                        </div>
                        <ul className="flex flex-col p-4 space-y-4 ">
                            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><hr /></li>
                            <li><Link href="/products"onClick={() => setIsOpen(false)}>PRODUCTS</Link></li>
                            <li><hr /></li>
                            <li><Link href="/" onClick={() => setIsOpen(false)}>FILTER</Link></li>
                            <li><Link href="/" onClick={() => setIsOpen(false)}>CART</Link></li>
                            <li><Link href="/" onClick={() => setIsOpen(false)}>FAVORITE</Link></li>
                            <li><hr /></li>
                            <li><Link href="/" onClick={() => setIsOpen(false)}>CATEGORY</Link></li>
                            <li><hr /></li>
                            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                            <li><hr /></li>
                            <li><Link href="/profile" onClick={() => setIsOpen(false)}>PROFILE</Link></li>
                        </ul>
                    </div>
                </div>


                {/* Filter Icon (statisk just nu) */}
                <button onClick={() => setIsOpen(!true)}
                    className="text-2xl cursor-pointer p-2 text-blue-300 hover:bg-white">
                    {false ? <IoClose /> : <FaFilter />}
                </button>

                {/* Cart Icon */}
                <div className="relative">
                    <FaShoppingCart className="text-3xl cursor-pointer text-blue-300 mr-4 mt-1 hover:bg-white" />
                </div>    
        <div> 
        </div>
        </header>

         {/* Image med tittle min profile sen länk till min profile(CV)  lite hemlig sök*/}
        <footer className="flex bg-[url('/images/tree2.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-6 py-7 ">
        <a href={"/profile"}>
        <span className='text-yellow-300 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl hover:text-amber-50 hover:text-5xl text-2xl bold text-shadow-amber-800 cursor-pointer'>
          Min PROFILE
        </span>
        </a>
        <Form action="/products/search " className='relative flex gap-5 items-center justify-between h-20 px-25'>
          {/* On submission, the input value will be appended to the URL, e.g. /search?query=abc */}
             <Search className="absolute right-135 top-10 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                 <input name="query" className='w-100 pl-10' type="search" placeholder="Search for product" required/>
               
                 <button type="submit" className="flex bg-[url('/icons/logo.png')] cursor-pointer rounded-b-3xl text-red-500 bg-green-400 p-1 hover:text-amber-50 hover:bg-amber-600"><Search/></button>
         </Form>  
        </footer>
 

       </div> 
    );
}
