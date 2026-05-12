const categories = [
  { id: 1, name: "Développement Web", icon: "🌐", freelancers: 1240, color: "bg-blue-500" },
  { id: 2, name: "Design Graphique", icon: "🎨", freelancers: 850, color: "bg-pink-500" },
  { id: 3, name: "Montage Vidéo", icon: "🎬", freelancers: 420, color: "bg-purple-500" },
  { id: 4, name: "Marketing Digital", icon: "📈", freelancers: 630, color: "bg-yellow-500" },
  { id: 5, name: "Traduction", icon: "✍️", freelancers: 310, color: "bg-green-500" },
  { id: 6, name: "Apps Mobiles", icon: "📱", freelancers: 290, color: "bg-indigo-500" },
];

const topFreelancers = [
  {
    id: 1,
    name: "Yassine El Amrani",
    title: "Expert Full-Stack Developer",
    rating: 4.9,
    reviews: 124,
    price: 450,
    skills: ["React", "Node.js", "AWS"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 2,
    name: "Sara Mansouri",
    title: "UI/UX Designer Senior",
    rating: 5.0,
    reviews: 89,
    price: 350,
    skills: ["Figma", "Branding", "Adobe XD"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 3,
    name: "Amine Bennani",
    title: "Motion Designer & 3D Artist",
    rating: 4.8,
    reviews: 56,
    price: 400,
    skills: ["After Effects", "Blender", "Cinema 4D"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    verified: false,
  },
  {
    id: 4,
    name: "Laila Rouissi",
    title: "Social Media Manager",
    rating: 4.7,
    reviews: 72,
    price: 250,
    skills: ["Instagram", "Content Strategy", "Ads"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
];

const projects = [
  { id: 1, title: "Développement d'une application E-commerce", client: "TechCorp", budget: "15,000 DH", type: "Fixe", time: "Publié il y a 2h", skills: ["React Native", "Node.js", "Stripe"] },
  { id: 2, title: "Refonte de l'identité visuelle", client: "Startup XYZ", budget: "5,000 DH", type: "Fixe", time: "Publié il y a 5h", skills: ["Figma", "Branding", "Illustrator"] },
  { id: 3, title: "Optimisation SEO du site web", client: "Agence Voyage", budget: "2,000 DH", type: "Horaire", time: "Publié il y a 1j", skills: ["SEO", "Google Analytics", "Content"] },
  { id: 4, title: "Création d'une Landing Page pour un événement", client: "EventPro", budget: "3,500 DH", type: "Fixe", time: "Publié il y a 2j", skills: ["Next.js", "Tailwind CSS"] },
  { id: 5, title: "Montage vidéo pour YouTube", client: "Content Creator", budget: "1,500 DH", type: "Fixe", time: "Publié il y a 2j", skills: ["Premiere Pro", "After Effects"] },
  { id: 6, title: "Création de contenu pour les réseaux sociaux", client: "Mode Boutique", budget: "2,500 DH", type: "Fixe", time: "Publié il y a 3j", skills: ["Social Media", "Canva", "Copywriting"] },
];

module.exports = { categories, topFreelancers, projects };
