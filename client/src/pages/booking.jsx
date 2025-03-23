import React from 'react';

function Booking() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-300 py-10">
      <div className="flex flex-col items-center bg-white shadow-lg w-full sm:w-4/5 md:w-3/5 rounded-lg m-12 p-12 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">BOOKING</h1>
        <form className="flex flex-col gap-6 w-full">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Number of Guests</label>
                <input
                  type="number"
                  placeholder="Enter number of guests"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Check-in Date</label>
                <input
                  type="date"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Check-out Date</label>
                <input
                  type="date"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-500  text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-transform transform hover:scale-105  mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;