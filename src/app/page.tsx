import { redirect } from 'next/navigation';

export default function Page() {
  // Always redirect to login for now
  // Auth will be checked on the client-side in the login page
  redirect('/login');
}
