import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactUs from "./pages/ContactUs";
import WatchSuccessStories from "./pages/WatchSuccessStories";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import NotFound from "./pages/NotFound";
import ApplicationStatus from "./pages/ApplicationStatus";
import Application from "./pages/Application";
import TopLoader from "./components/TopLoader";
import ScrollToTop from '@/components/ScrollToTop';
import SocialMediaMenu from '@/components/SocialMediaMenu';
import { HelmetProvider } from "react-helmet-async";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TopLoader />
        <SocialMediaMenu />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/success-stories" element={<WatchSuccessStories />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/university/:id" element={<UniversityDetail />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
          <Route path="/application" element={<Application />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
