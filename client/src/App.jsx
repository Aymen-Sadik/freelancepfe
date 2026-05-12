import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Public Pages
import HomePage from "@/pages/HomePage";
import FreelancersPage from "@/pages/FreelancersPage";
import ProjectsPage from "@/pages/ProjectsPage";
import CategoriesPage from "@/pages/CategoriesPage";
import AboutPage from "@/pages/AboutPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";

// Dashboard
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";
import MessagesPage from "@/pages/dashboard/MessagesPage";
import NotificationsPage from "@/pages/dashboard/NotificationsPage";

// Admin
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminPage from "@/pages/admin/AdminPage";
import AdminUsersPage from "@/pages/admin/AdminUsersPage";

// Layout wrapper for public pages (with Navbar + Footer)
function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
      <Route path="/freelancers" element={<PublicLayout><FreelancersPage /></PublicLayout>} />
      <Route path="/projects" element={<PublicLayout><ProjectsPage /></PublicLayout>} />
      <Route path="/categories" element={<PublicLayout><CategoriesPage /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
      <Route path="/auth/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
      <Route path="/auth/register" element={<PublicLayout><RegisterPage /></PublicLayout>} />

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
        <Route path="users" element={<AdminUsersPage />} />
      </Route>
    </Routes>
  );
}
