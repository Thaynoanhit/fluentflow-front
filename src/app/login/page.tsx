'use client';
import FormLogin from "@/components/FormLogin/FormLogin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const userData = localStorage.getItem('userData');
      if (userData) {
        router.push('/dashboard');
      } else {
        setIsLoading(false); 
    };
  }, []);

  if (isLoading) {
    return null; 
  }

  return (
    <div>
      <FormLogin />
    </div>
  );
}
