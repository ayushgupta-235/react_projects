import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          
          {/* Logo Section */}
          <div className="flex items-center">
          <img
            src="https://marketplace.canva.com/EAF1Ah5STk8/1/0/1600w/canva-dark-abstract-black-panther-gaming-logo-JqcoEpC3-BI.jpg" // Replace with your logo path
            alt="Logo"
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
            <span className="ml-2 text-lg font-semibold">My <span className="text-red-500">App</span></span>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">RESOURCES</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
            </ul>
          </div>

          {/* Follow Us Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">FOLLOW US</h3>
            <ul className="space-y-1">
              <li><a href="https://github.com" className="hover:text-gray-600">Github</a></li>
              <li><a href="https://discord.com" className="hover:text-gray-600">Discord</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">LEGAL</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy" className="hover:text-gray-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-600">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
