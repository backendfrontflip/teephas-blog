import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
      © {new Date().getFullYear()} Teephas Blog. All rights reserved.
    </footer>
  );
}

export default Footer