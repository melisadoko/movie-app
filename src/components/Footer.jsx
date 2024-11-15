import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-2 text-center">
      <p className="text-2xl font-semibold mb-4">Contact Us</p>
      <div className="flex justify-center space-x-8">
        <div>
          <p>
            Email:{" "}
            <span className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
              dokomelisa92@gmail.com{" "}
            </span>
          </p>
        </div>
        <div>
          <p>
            Phone:{" "}
            <span className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
              0696772914
            </span>
          </p>
        </div>
        <div>
          <p>
            Address:{" "}
            <span className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Tirana
            </span>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p>&copy; 2024 Movie App. All rights reserved.</p>
      </div>
    </footer>
  );
}
