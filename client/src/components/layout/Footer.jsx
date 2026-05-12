import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--card)", borderTop: "1px solid var(--border)" }} className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: "#0EA5E9" }}>
                F
              </div>
              <span className="text-xl font-bold" style={{ color: "var(--foreground)" }}>FreelanceHub</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.6 }}>
              La première plateforme marocaine dédiée à la mise en relation entre talents locaux et clients visionnaires.
            </p>
            <div className="flex gap-4 mt-6">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="transition-colors" style={{ color: "var(--foreground)", opacity: 0.4 }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#0EA5E9"; e.currentTarget.style.opacity = 1; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.opacity = 0.4; }}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Plateforme */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--foreground)" }}>Plateforme</h3>
            <ul className="space-y-2">
              {[
                { label: "Trouver un Freelancer", to: "/freelancers" },
                { label: "Parcourir les Projets", to: "/projects" },
                { label: "Catégories", to: "/categories" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm transition-colors" style={{ color: "var(--foreground)", opacity: 0.6 }}
                    onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.opacity = 0.6; }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--foreground)" }}>Support</h3>
            <ul className="space-y-2">
              {["Centre d'aide", "Conditions d'utilisation", "Confidentialité", "Contactez-nous"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors" style={{ color: "var(--foreground)", opacity: 0.6 }}
                    onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.opacity = 0.6; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--foreground)" }}>Newsletter</h3>
            <p className="text-sm mb-4" style={{ color: "var(--foreground)", opacity: 0.6 }}>
              Recevez les meilleures opportunités directement dans votre boîte mail.
            </p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="text-sm w-full outline-none rounded-lg px-3 py-2 transition-all"
                style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
                onFocus={e => e.target.style.borderColor = "#0EA5E9"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
              <button
                className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-colors"
                style={{ backgroundColor: "#0EA5E9" }}
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--foreground)", opacity: 0.4 }}>
            © {currentYear} FreelanceHub Morocco. Tous droits réservés.
          </p>
          <span className="text-xs" style={{ color: "var(--foreground)", opacity: 0.4 }}>
            Made with ❤️ in Morocco 🇲🇦
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
