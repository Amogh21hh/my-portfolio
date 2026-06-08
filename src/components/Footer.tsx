import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-20 px-8 md:px-24 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Strong Call to Action */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Drive Financial Value.</h2>
          <div className="flex flex-col gap-2">
            <p className="text-emerald-400 font-semibold text-lg flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Actively seeking roles: Finance Assistant / FP&A / Credit Risk / Accounts Assistant
            </p>
            <p className="text-gray-300 font-bold text-sm">
              Available immediately. Full Right to Work in the UK (Graduate Visa).
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4 text-gray-300 font-medium">
          <a href="mailto:amoghmallikarjun0321@gmail.com" className="flex items-center gap-3 hover:text-emerald-400 transition-colors bg-white/5 px-6 py-3 rounded-lg border border-white/10">
            <Mail size={18} className="text-emerald-400" />
            amoghmallikarjun0321@gmail.com
          </a>
          
          <a href="tel:+447429880957" className="flex items-center gap-3 hover:text-emerald-400 transition-colors bg-white/5 px-6 py-3 rounded-lg border border-white/10">
            <Phone size={18} className="text-emerald-400" />
            +44 7429 880957
          </a>
          
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-lg border border-white/10">
            <MapPin size={18} className="text-emerald-400" />
            London, UK
          </div>

          <div className="flex gap-4 mt-2">
            <a 
              href="/Amogh_HH_CV.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#121212] transition-colors border border-emerald-500 py-3 rounded-lg font-bold"
            >
              <FileText size={18} />
              Download CV
            </a>

            <a 
              href="https://www.linkedin.com/in/amogh-hh-34129a1b9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-white/20 px-4 py-3 rounded-lg"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a 
              href="https://github.com/Amogh21hh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-white/20 px-4 py-3 rounded-lg"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
