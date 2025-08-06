"use client";

import { useQuery } from "@tanstack/react-query";
import AnimalCard from "../components/AnimalCard";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";
import { fetchAnimals } from "../services/animalService";
import Headline from "../components/Headline";
import { useState } from "react";
import { Animal } from "../types/animal";
import AnimalDetailsCard from "../components/AnimalDetailsCard";

export default function Home() {
  const [searchText, setSearchText] = useState("")
  const [focusedAnimal, setFocusedAnimal] = useState<Animal | null>(null)

  const {data, error, isLoading} = useQuery({
    queryKey: ['animals'], 
    queryFn: fetchAnimals
  })


  if (error) return 'An error has occurred: ' + error.message
  if (isLoading) return 'Loading...'

  const filteredData = data.filter((animal) => {
    const lower = searchText.toLowerCase()
    return (
        animal.name.toLowerCase().includes(lower) ||
        animal.species.toLowerCase().includes(lower)
    )
  })


  return (
    <div className="flex w-full h-full p-2 gap-2">
      <MainLayout>
        <Header>
          <Headline>Animal Finder</Headline>
          <SearchBar value={searchText} onChange={setSearchText} />
        </Header>

        <div className="pt-6 px-6 min-h-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map(animal=> (
            <AnimalCard key={animal.id} animal={animal} onInfoClick={setFocusedAnimal}/>
          ))}
        </div>
      </MainLayout>


      {focusedAnimal && 
          <div className="w-[320px]">
            <AnimalDetailsCard 
              animal={focusedAnimal} 
              onClose={() => setFocusedAnimal(null)} 
              animals={data} 
              onInfoClick={setFocusedAnimal}
            />
          </div>
      }
    </div>
  );
}
