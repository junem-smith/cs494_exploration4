'use client'

import { useProfile } from "@/contexts/profileContext";

export default function Home() {

  const { profile, signOut } = useProfile()

  return (
      <div>
        {
          profile ? `Hello, ${profile.full_name}` : `Hello World`
        }
        <button onClick={signOut}>Sign Out</button>
      </div>
  );
}
