import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Book, X } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle nav link clicks
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3 bg-cream/80 backdrop-blur-lg shadow-sm' : 'py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
              <img src="/lovable-uploads/Luke Headshot.png" alt="Luke" className="w-full h-full object-cover" />
            </div>
            <span>Luke B.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={e => handleNavLinkClick(e, 'about')} className="text-dark/80 hover:text-dark transition-colors text-sm">
              About
            </Link>
            <Link to="/" onClick={e => handleNavLinkClick(e, 'case-studies')} className="text-dark/80 hover:text-dark transition-colors text-sm">
              Case Studies
            </Link>
            <Link
            to="/my-process"
            className="text-dark/80 hover:text-dark transition-colors text-sm">
              My Process
              </Link>

            <Link to="/blog" className="text-dark/80 hover:text-dark transition-colors text-sm flex items-center">
              <Book className="w-4 h-4 mr-1" />
              Blog
            </Link>
            <Link to="/" onClick={e => handleNavLinkClick(e, 'contact')} className="pill-button">
              Get in Touch
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-30 bg-cream transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full flex flex-col justify-center items-center">
          <nav className="flex flex-col space-y-8 items-center">
            <Link to="/" onClick={e => handleNavLinkClick(e, 'about')} className="text-dark/80 hover:text-dark transition-colors text-lg">
              About
            </Link>
            <Link to="/" onClick={e => handleNavLinkClick(e, 'case-studies')} className="text-dark/80 hover:text-dark transition-colors text-lg">
              Case Studies
            </Link>
            <Link to="/" onClick={e => handleNavLinkClick(e, 'other-projects')} className="text-dark/80 hover:text-dark transition-colors text-lg">
              Other Projects
            </Link>
            <Link to="/" onClick={e => handleNavLinkClick(e, 'contact')} className="pill-button">
              Get in Touch
            </Link>
          </nav>
          
          <div className="mt-16 flex space-x-4">
            <a href="#" className="text-dark/60 hover:text-dark transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"></path>
              </svg>
            </a>
            <a href="#" className="text-dark/60 hover:text-dark transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"></path>
              </svg>
            </a>
            <a href="#" className="text-dark/60 hover:text-dark transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h4v4h-4v-4zm6-4.5l1.5-1.5-1.5-1.5V5h-4v5H8V5H4v4.5L5.5 11 4 12.5V16h4v-5h4v5h4v-3.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;