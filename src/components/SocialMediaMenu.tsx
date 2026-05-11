import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaComments, // chat icon for toggle
  FaTimes,     // close icon
} from 'react-icons/fa';

const SocialMediaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {isOpen && (
        <div className="flex flex-col items-end space-y-3 transition-all duration-300">
          {/* WhatsApp */}
          <Link
            to="https://wa.me/601161175133?text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1DA851] text-white p-3 rounded-full shadow-md transition-colors"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp size={20} />
          </Link>

          {/* Facebook */}
          <Link
            to="https://linktr.ee/nhglobaleducation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1877F2] hover:bg-[#145DBF] text-white p-3 rounded-full shadow-md transition-colors"
            aria-label="Visit our Facebook"
          >
            <FaFacebookF size={20} />
          </Link>

          {/* YouTube */}
          <Link
            to="https://www.youtube.com/@travelwithnoushad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0000] hover:bg-[#CC0000] text-white p-3 rounded-full shadow-md transition-colors"
            aria-label="Visit our YouTube"
          >
            <FaYoutube size={20} />
          </Link>
        </div>
      )}

      {/* Toggle Button with Chat Icon */}
      <button
        onClick={toggleMenu}
        className="bg-blue-600 hover:bg-blue-700  text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Open chat menu"
      >
        {isOpen ? <FaTimes size={20} /> : <FaComments size={25} />}
      </button>
    </div>
  );
};

export default SocialMediaMenu;
