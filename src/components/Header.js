import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-600 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-8 px-5">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <p className='text-sm text-yellow-200'>QTs - Quotes Tshirts</p>
          <a href="https://www.instagram.com/antimotivationalmemes/">Tshirt Gallery <span className='text-gray-200 font-light' href="https://www.instagram.com/antimotivationalmemes/">by AntiMotivatioanlmemes</span></a>
          <p className='text-sm text-gray-300'></p>
        </div>

        

        
        {/* <div className="relative">
          <a href="/cart" className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-4 8h18M16 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            0
          </span>
        </div> */}
      </div>
    </header>
  );
};

export default Header;

