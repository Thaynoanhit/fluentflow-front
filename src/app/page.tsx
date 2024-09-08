"use client";

import CategoryList from "@/components/CategoryList/CategoryList";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export default function Home() {

  const categories = [
    {"id": 1, "categoryName": "essenciais"},
    {"id": 2, "categoryName": "phrasal verbs"},
    {"id": 3, "categoryName": "tecnologia"}
  ]

  return (
    <>
      {categories && <CategoryList categories={categories} />}
      <NavigationBar /> 
    </>  
  );
}
