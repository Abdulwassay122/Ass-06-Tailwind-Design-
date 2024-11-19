"use client"
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Courses from "@/components/Courses";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";
import MobileHome from "@/components/MobileHome";
import MobileServices from "@/components/MobileServices";
import MobileAchievements from "@/components/MobileAchievements";
import MobileCourses from "@/components/MobileCourses";
import MobileAboutUs from "@/components/MobileAboutUs";
import MobileTestimonials from "@/components/MobileTestimonials";
import MobileFooter from "@/components/MobileFooter";
import { useMediaQuery } from 'react-responsive';



export default function Home() {
  const isMobile = useMediaQuery({ query: '(min-width: 429px)' });
  return (
  <>
  {isMobile ? <Header/> : <MobileHeader/>}
  {isMobile ? <Section1/> : <MobileHome/>}
  {isMobile ? <Services/> : <MobileServices/>}
  {isMobile ? <Achievements/> : <MobileAchievements/>}
  {isMobile ? <Courses/> : <MobileCourses/>}
  {isMobile ? <AboutUs/> : <MobileAboutUs/>}
  {isMobile ? <Testimonials/> : <MobileTestimonials/>}
  {isMobile ? <Footer/> : <MobileFooter/>}
  
  </>
  );
}
