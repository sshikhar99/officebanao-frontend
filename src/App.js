// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import useDeviceType from "./hooks/useDeviceType";

// Pages
import Blogs from "./pages/Blogs";
import BecomePartner from "./pages/BecomePartner";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";


// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Layout
import Layout from "./Layout/Layout";

// ===== Desktop Home =====
import DesktopHero from "./components/Desktop/HeroSection";
import DesktopAbout from "./components/Desktop/About";
import DesktopProjects from "./components/Desktop/Projects";
import DesktopContact from "./components/Desktop/Contact";
import TrustedBrands from "./components/Desktop/TrustedBrands";
import DesktopServices from "./components/Desktop/Services";
import DesktopTestimonials from "./components/Desktop/Testimonials";

// ===== Mobile Home =====
import MobileHero from "./components/Mobile/HeroSection";
import MobileAbout from "./components/Mobile/About";
import MobileProjects from "./components/Mobile/Projects";
import MobileContact from "./components/Mobile/Contact";
import MobileServices from "./components/Mobile/Services";
import MobileTestimonials from "./components/Mobile/Testimonials";

// ===== Desktop Home Component =====
function DesktopHome() {
  return (
    <>
      <section id="home"><DesktopHero /></section>
      <section id="about"><DesktopAbout /></section>
      <section id="projects"><DesktopProjects /></section>
      <section id="services"><DesktopServices /></section>
      <section id="testimonials"><DesktopTestimonials /></section>
      <section id="brands"><TrustedBrands /></section>
      <section id="contact"><DesktopContact /></section>
    </>
  );
}

// ===== Mobile Home Component =====
function MobileHome() {
  return (
    <>
      <section id="home"><MobileHero /></section>
      <section id="about"><MobileAbout /></section>
      <section id="projects"><MobileProjects /></section>
      <section id="services"><MobileServices /></section>
      <section id="testimonials"><MobileTestimonials /></section>
      <section id="brands"><TrustedBrands /></section>
      <section id="contact"><MobileContact /></section>
    </>
  );
}

// ===== ScrollToSection handler =====
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;

      const tryScroll = (attempts = 5) => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts > 0) {
          setTimeout(() => tryScroll(attempts - 1), 150);
        }
      };

      tryScroll();
    }
  }, [location]);

  return null;
}

// ===== App =====
export default function App() {
  const isMobile = useDeviceType();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <>
      <ScrollToTop />
      <ScrollToSection />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              {isMobile ? <MobileHome /> : <DesktopHome />}
            </Layout>
          }
        />

        {/* Internal Pages */}
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/become-partner" element={<Layout><BecomePartner /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />

        {/* Details Pages */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />


        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            loggedIn ? (
              <AdminDashboard onLogout={() => {
                localStorage.removeItem("token");
                setLoggedIn(false);
              }} />
            ) : (
              <AdminLogin onLogin={() => setLoggedIn(true)} />
            )
          }
        />
      </Routes>
    </>
  );
}
