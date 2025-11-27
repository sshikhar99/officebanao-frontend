// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import useDeviceType from "./hooks/useDeviceType";

// Popup
import LeadPopup from "./components/LeadPopup";

// Pages
import Blogs from "./pages/Blogs";
import BecomePartner from "./pages/BecomePartner";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Layout
import Layout from "./Layout/Layout";

// Desktop Components
import DesktopHero from "./components/Desktop/HeroSection";
import DesktopAbout from "./components/Desktop/About";
import DesktopProjects from "./components/Desktop/Projects";
import DesktopContact from "./components/Desktop/Contact";
import TrustedBrands from "./components/Desktop/TrustedBrands";
import DesktopServices from "./components/Desktop/Services";
import DesktopTestimonials from "./components/Desktop/Testimonials";
import TestimonialsSlider from "./components/Desktop/TestimonialsSlider";
import FAQ from "./components/Desktop/FAQ";
import WhyChooseUs from "./components/Desktop/WhyChooseUs";

// Mobile Components
import MobileHero from "./components/Mobile/HeroSection";
import MobileAbout from "./components/Mobile/About";
import MobileProjects from "./components/Mobile/Projects";
import MobileContact from "./components/Mobile/Contact";
import MobileServices from "./components/Mobile/Services";
import MobileTestimonialsSlider from "./components/Mobile/MobileTestimonialsSlider";


// ===============================
// Desktop Home Wrapper
// ===============================
function DesktopHome() {
  return (
    <>
      <section id="home"><DesktopHero /></section>
      <section id="about"><DesktopAbout /></section>
      <section id="projects"><DesktopProjects /></section>
      <section id="why"><WhyChooseUs /></section>
      <section id="services"><DesktopServices /></section>
      <section id="testimonials"><DesktopTestimonials /></section>
      <section id="testimonials"><TestimonialsSlider /></section>
      <section id="faq"><FAQ /></section>
      <section id="brands"><TrustedBrands /></section>
      <section id="contact"><DesktopContact /></section>
    </>
  );
}


// ===============================
// Mobile Home Wrapper
// ===============================
function MobileHome() {
  return (
    <>
      <section id="home"><MobileHero /></section>
      <section id="about"><MobileAbout /></section>
      <section id="projects"><MobileProjects /></section>
      <section id="services"><MobileServices /></section>
      <section id="why"><WhyChooseUs /></section>
      <section id="testimonials"><MobileTestimonialsSlider /></section>
      <section id="faq"><FAQ /></section>
      <section id="brands"><TrustedBrands /></section>
      <section id="contact"><MobileContact /></section>
    </>
  );
}


// ==================================
// Scroll to a section smoothly
// ==================================
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;

      const scrollAttempt = (attempts = 5) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts > 0) {
          setTimeout(() => scrollAttempt(attempts - 1), 150);
        }
      };

      scrollAttempt();
    }
  }, [location]);

  return null;
}


// ===============================
// MAIN APP COMPONENT
// ===============================
export default function App() {
  const isMobile = useDeviceType();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <>
      {/* 🔥 POPUP ALWAYS ON TOP */}
      <LeadPopup />

      <ScrollToTop />
      <ScrollToSection />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <Layout>
              {isMobile ? <MobileHome /> : <DesktopHome />}
            </Layout>
          }
        />

        {/* PAGES */}
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/become-partner" element={<Layout><BecomePartner /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />

        {/* DETAILS */}
        <Route
          path="/projects/:id"
          element={<Layout><ProjectDetail /></Layout>}
        />
        <Route
          path="/blogs/:id"
          element={<Layout><BlogDetail /></Layout>}
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            loggedIn ? (
              <AdminDashboard
                onLogout={() => {
                  localStorage.removeItem("token");
                  setLoggedIn(false);
                }}
              />
            ) : (
              <AdminLogin onLogin={() => setLoggedIn(true)} />
            )
          }
        />
      </Routes>
    </>
  );
}
