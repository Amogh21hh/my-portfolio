import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-16 px-8 md:px-24 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Amogh H H</h2>
          <p className="text-emerald-400 font-medium text-sm">Finance & Analytics Professional</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
          <a href="mailto:amoghmallikarjun0321@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} className="text-emerald-400" />
            amoghmallikarjun0321@gmail.com
          </a>
          
          <a href="tel:+447429880957" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={16} className="text-emerald-400" />
            +44 7429 880957
          </a>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-emerald-400" />
            Southend-on-Sea, UK
          </div>

          <a 
            href="https://www.linkedin.com/in/amoghhh-34129a1b9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin size={16} className="text-emerald-400" />
            LinkedIn Profile
          </a>
        </div>

      </div>
    </footer>
  );
}
