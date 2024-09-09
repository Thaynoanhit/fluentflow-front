"use client";
import { ListWordsCard } from "@/components/dashboard/ListWordsCard";
import { ListWordCardsContainer} from "./styles"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {

  const router = useRouter();

  const categories = [
    {"id": 1, "name": "essenciais"},
    {"id": 2, "name": "phrasal verbs"},
    {"id": 3, "name": "tecnologia"}
  ]

  const handleNavigate = () => {
    router.push('dashboard/words')
  }

  useEffect(() => {}, [])

  return (
    <div>
        <ListWordCardsContainer>
            <ListWordsCard title={'teste'} percent={'50'} image={''} onClick={handleNavigate}/>
            <ListWordsCard title={'teste'} percent={'50'} image={''} onClick={handleNavigate}/>
            <ListWordsCard title={'teste'} percent={'50'} image={''} onClick={handleNavigate}/>
        </ListWordCardsContainer>
    </div>   
  );
}
