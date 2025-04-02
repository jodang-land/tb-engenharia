import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  logo?: string;
  links?: Array<{ label: string; href: string }>;
}

const Navbar = ({
  logo = "Dental Care",
  links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">{logo}</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollToSection("#contact")} className="ml-4">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-8">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="mt-2"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
