'use client';
import FormRegister from "@/components/FormRegister/FormRegister";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      router.push('/dashboard');
    } else {
      setLoading(false); 
  };
  }, []);

  if (isLoading) {
    return null; 
  }

  return (
      <div>
        <FormRegister />
      </div>
  );
}