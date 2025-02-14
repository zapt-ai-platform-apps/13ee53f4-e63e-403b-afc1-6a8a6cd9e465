import { useState, useEffect } from 'react';
import { supabase, recordLogin } from '../supabaseClient';

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user);
        const recorded = localStorage.getItem('recordedLogin');
        if (!recorded) {
          try {
            await recordLogin(session.user.email, import.meta.env.VITE_PUBLIC_APP_ENV);
            localStorage.setItem('recordedLogin', session.user.id);
          } catch (error) {
            console.error('Failed to record login:', error);
          }
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        localStorage.removeItem('recordedLogin');
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem('recordedLogin');
  };

  return { user, signOut };
}

export default useAuth;