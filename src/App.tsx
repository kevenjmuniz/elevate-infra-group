import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieBanner from "@/components/ui/cookie-banner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogAdmin from "./pages/BlogAdmin";
import NewsletterAdmin from "./pages/NewsletterAdmin";

// 👇 importa os novos arquivos
import RequireAuth from "@/components/auth/RequireAuth";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Página de acesso negado */}
        <Route path="/403" element={<Forbidden />} />

        {/* Protege o painel de admin */}
        <Route
          path="/blog-admin"
          element={
            <RequireAuth requireAdmin>
              <BlogAdmin />
            </RequireAuth>
          }
        />

        {/* Protege o painel de newsletter admin */}
        <Route
          path="/newsletter-admin"
          element={
            <RequireAuth requireAdmin>
              <NewsletterAdmin />
            </RequireAuth>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
