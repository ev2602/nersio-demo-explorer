"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Animal } from "../types/animal";
import Header from "./Header";
import Headline from "./Headline";
import MainLayout from "./MainLayout";
import { faClose, faTriangleExclamation, faUtensils } from "@fortawesome/free-solid-svg-icons";
import SegmentedControl from "./SegmentedControl";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAnimalByID, fetchAnimalsbyIDs } from "../services/animalService";

type Props = {
    animal: Animal
    onClose: () => void
    onInfoClick: (animal : Animal) => void
}

export default function AnimalDetailsCard({animal, onClose, onInfoClick} : Props) {
    const [selectedOption, setSelectedOption] = useState('Prey')

    const selectedOptionIDs = selectedOption === 'Prey' ? animal.prey : animal.predators

    const {data, error, isLoading} = useQuery({
        queryKey: ['animal', animal.id, selectedOption], 
        queryFn: () => fetchAnimalsbyIDs(selectedOptionIDs)
    })


    //if (error) return 'An error has occurred: ' + error.message
    //if (isLoading) return 'Loading...'

    return(
        <MainLayout>
            <Header>
                <Headline>{animal.name}</Headline>
                <div className="w-[36px] h-[36px] p-2 rounded-lg bg-neutral-50 flex items-center justify-center">
                    <FontAwesomeIcon 
                        icon={faClose} 
                        fixedWidth
                        className="w-full h-full text-neutral-900 text-base font-black leading-[100%] cursor-pointer" 
                        onClick={() => onClose()} 
                    />
                </div>
            </Header>
            
                <div className="flex flex-col justify-center items-center gap-2 py-6">
                    <div className="w-[128px] h-[128px] rounded-2xl" style={{backgroundColor: animal.color}}/>
                    <div className="flex flex-col items-center justify-center w-[46px] h-[52px] gap-1">
                        <p className="text-lg leading-6 font-semibold text-neutral-900">{animal.name}</p>
                        <p className="text-sm leading-6 font-normal text-neutral-700">{animal.species}</p>
                    </div>
                </div>
            
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="w-[288px]">
                        <SegmentedControl
                            options={[
                                {name: 'Prey', icon: faUtensils},
                                {name: 'Predators', icon: faTriangleExclamation}]}
                            selected={selectedOption}
                            onChange={setSelectedOption}
                        />

                        <div className="flex flex-col gap-2 mt-4">
                            {data?.map((connectedAnimal)=> (
                                <div 
                                    key={connectedAnimal.id} 
                                    className="h-[48px] rounded-lg p-2 gap-2 cursor-pointer hover:bg-neutral-100"
                                    onClick={() => onInfoClick(connectedAnimal)}
                                    >
                                    <div className="flex w-full gap-2">
                                        <div className="w-8 h-8 rounded-full flex-shrink-0" style={{backgroundColor: connectedAnimal.color}} />
                                        <div className="flex flex-col gap-1 w-full">
                                            <p className="text-sm leading-3.5 font-medium text-neutral-900">{connectedAnimal.name}</p>
                                            <p className="text-xs font-normal leading-3.5 text-neutral-500">{connectedAnimal.species}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

        </MainLayout>
    )
}