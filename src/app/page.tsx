"use client";
import {useState,useEffect} from "react";
import CategoryList from "@/components/CategoryList";
import { useRouter } from "next/navigation";

export default function Home() {

  const [categories, setCategories] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:8080/categories`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCategories(data);
      })
  }, [])

  return (
    categories && (
      <CategoryList categories={categories} />
    )
  );
}
