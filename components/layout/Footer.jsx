import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="text-xl font-bold text-foreground">
                FreelanceHub
              </span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              La première plateforme marocaine dédiée à la mise en relation entre talents locaux et clients visionnaires.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Plateforme</h3>
            <ul className="space-y-2">
              <li><Link href="/freelancers" className="text-foreground/60 hover:text-primary text-sm">Trouver un Freelancer</Link></li>
              <li><Link href="/projects" className="text-foreground/60 hover:text-primary text-sm">Parcourir les Projets</Link></li>
              <li><Link href="/categories" className="text-foreground/60 hover:text-primary text-sm">Catégories</Link></li>
              <li><Link href="/pricing" className="text-foreground/60 hover:text-primary text-sm">Tarifs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-foreground/60 hover:text-primary text-sm">Centre d'aide</Link></li>
              <li><Link href="/terms" className="text-foreground/60 hover:text-primary text-sm">Conditions d'utilisation</Link></li>
              <li><Link href="/privacy" className="text-foreground/60 hover:text-primary text-sm">Confidentialité</Link></li>
              <li><Link href="/contact" className="text-foreground/60 hover:text-primary text-sm">Contactez-nous</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-foreground/60 text-sm mb-4">Recevez les meilleures opportunités directement dans votre boîte mail.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email"
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © {currentYear} FreelanceHub Morocco. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <span className="text-foreground/40 text-xs flex items-center gap-1">
              Made with ❤️ in Morocco 🇲🇦
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
