'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function DashboardPage() {
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      console.log('Current user:', user);
    };
    checkAuth();
  }, []);

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>You're logged in!</p>
      <button
        onClick={async () => {
          const supabase = createClient();
          await supabase.auth.signOut();
          window.location.href = '/login';
        }}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Sign out
      </button>
    </div>
  );
}
