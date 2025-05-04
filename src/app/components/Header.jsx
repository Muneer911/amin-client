import Link from "next/link";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header className={`border-b border-gray-200 ${className}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <nav className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-indigo-600 font-bold text-xl"
            aria-label="ResumeAI Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <span>ResumeAI</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              aria-label="View Features"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              aria-label="View Pricing"
            >
              Pricing
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
