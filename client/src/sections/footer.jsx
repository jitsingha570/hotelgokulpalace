import React from 'react';
import {Link} from 'react-dom';

function Footer() {
  return (
    <div className="flex  flex-col md:flex-row justify-center pl-10 w-full h-100 md:h-50 bg-gray-800 text-white gap-4">
      <div className="flex flex-col gap-4 justify-center items-center w-1/3">
        <h1 className="text-2xl font-bold text-orange-500">HOTEL GOKUL PALACE</h1>
        <h2 className="text-sm">Enjoy Your  Dream Time with Luxury Experience</h2>
      </div>
      
      <div className="flex flex-col mt-4 justify-center items-center w-1/3">
        <h2 className="text-lg font-bold">Contact Us</h2>
        <p className="text-sm">Phone: +91 1234567890</p>
        <p className="text-sm">Email: info@hotel.com</p>
      </div>
    </div>
  );
}

export default Footer;