"use client";

import { useQuery } from "@tanstack/react-query";
import AnimalCard from "../components/AnimalCard";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";
import { fetchAnimals } from "../services/animalService";

export default function Home() {
  const {data, error, isLoading} = useQuery({
    queryKey: ['animals'], 
    queryFn: fetchAnimals
  })


  if (error) return 'An error has occurred: ' + error.message
  if (isLoading) return 'Loading...'

  return (
    <MainLayout>
      <Header>
        <h1 className="text-base text-neutral-900 font-semibold leading-5 ml-4">
          Animal Finder
        </h1>
        <SearchBar />
      </Header>

      <div className="pt-6 px-6 min-h-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map(animal=> (
          <AnimalCard key={animal.id} {...animal} />
        ))}
      </div>
    </MainLayout>
  );
}
