import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if(user) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <p className="mb-4">
        <a href="https://www.zapt.ai" target="_blank" rel="noreferrer" className="text-blue-500 underline cursor-pointer">
          Sign in with ZAPT
        </a>
      </p>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={['google', 'facebook', 'apple']}
        redirectTo="/"
      />
    </div>
  );
}