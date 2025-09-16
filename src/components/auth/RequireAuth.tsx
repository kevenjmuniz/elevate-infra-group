import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

type RequireAuthProps = {
  children: React.ReactNode;
  requireAdmin?: boolean;
};

export default function RequireAuth({ children, requireAdmin }: RequireAuthProps) {
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login?next=/blog-admin", { replace: true });
        return;
      }

      if (!requireAdmin) {
        setAllowed(true);
        setChecking(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      const isAdmin = profile?.role === "admin";
      if (!isAdmin) {
        navigate("/403", { replace: true });
        return;
      }

      setAllowed(true);
      setChecking(false);
    })();
  }, [navigate, requireAdmin]);

  if (checking) return null;
  if (!allowed) return null;

  return <>{children}</>;
}