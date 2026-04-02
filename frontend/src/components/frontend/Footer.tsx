
import { Link } from "react-router-dom";
import doctorLogo from "@/assets/doctor-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary px-6 md:px-10">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4">
                <img src={doctorLogo} alt="Prescripto logo" className="h-14 w-14 object-contain border border-primary/20 rounded-md bg-white p-1" />
                <span className="text-2xl font-bold text-primary">Prescripto</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                Prescripto is your trusted platform for booking doctor appointments, managing health records, and connecting with top healthcare professionals. We are committed to making healthcare accessible, secure, and convenient for everyone.
              </p>
            </div>
          <div>
            <h3 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wide">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Privacy policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wide">Get in Touch</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>+1-212-456-7890</li>
              <li>prescripto@email.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          Copyright © 2026 Prescripto - All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
