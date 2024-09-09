"use client";
import { ListWordsCard } from "@/components/dashboard/ListWordsCard";
import { ListWordCardsContainer } from "./styles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadContainer } from "@/components/general/LoadContainer";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 1, name: "essenciais" },
    { id: 2, name: "phrasal verbs" },
    { id: 3, name: "tecnologia" },
  ];

  const handleNavigate = () => {
    router.push("dashboard/words");
  };

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem("userData");

      if (!userData) {
        router.push("/register");
      } else {
        const parsedData = JSON.parse(userData);

        if (!parsedData.user || !parsedData.token) {
          router.push("/register");
        } else {
          setIsLoading(false);
        }
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <LoadContainer/>
    );
  }

  return (
    <div>
      <ListWordCardsContainer>
        <ListWordsCard title={"teste"} percent={"50"} image={""} onClick={handleNavigate} />
        <ListWordsCard title={"teste"} percent={"50"} image={""} onClick={handleNavigate} />
        <ListWordsCard title={"teste"} percent={"50"} image={""} onClick={handleNavigate} />
      </ListWordCardsContainer>
    </div>
  );
}
