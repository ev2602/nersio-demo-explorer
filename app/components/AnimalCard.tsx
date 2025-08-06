"use client"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Animal } from "../types/animal";

type Props = {
    animal: Animal
    onInfoClick: (animal: Animal) => void
}

export default function AnimalCard({animal, onInfoClick} : Props) {
    return(
        <div className="bg-[#FFFFFF] border border-neutral-200 rounded-lg h-[160px] w-full p-4">
            <div className="w-full flex items-center justify-between gap-2">
                <div className="w-9 h-9 rounded-full flex-shrink-0" style={{backgroundColor: animal.color}} />
                <div className="flex flex-col leading-tight gap-1 w-full">
                    <p className="text-base leading-5 font-semibold text-neutral-900">{animal.name}</p>
                    <p className="text-xs font-normal leading-3.5 text-neutral-500">{animal.species}</p>
                </div>
                <div className="w-[36px] h-[36px] p-2 rounded-lg bg-neutral-50 flex items-center justify-center">
                    <FontAwesomeIcon 
                        icon={faCircleInfo}
                        fixedWidth 
                        className="w-full h-full text-neutral-700 text-base font-black leading-[100%] cursor-pointer" 
                        onClick={() => onInfoClick(animal)} 
                    />
                </div>
            </div>

            <hr className="border-t border-neutral-200 my-4"></hr>

            <div className="h-[58px] w-full flex flex-col gap-2 text-xs font-normal leading-3.5">
                <div className="flex justify-between gap-2">
                    <span className="text-neutral-700">Size</span>
                    <div className="flex-grow border-b border-dashed border-neutral-200"></div>
                    <span className="text-neutral-500">{animal.size}</span>
                </div>
                <div className="flex justify-between gap-2">
                    <span className="text-neutral-700">Prey</span>
                    <div className="flex-grow border-b border-dashed border-neutral-200"></div>
                    <span className="text-neutral-500">{animal.prey.length}</span>
                </div>
                <div className="flex justify-between gap-2">
                    <span className="text-neutral-700">Predators</span>
                    <div className="flex-grow border-b border-dashed border-neutral-200"></div>
                    <span className="text-neutral-500">{animal.predators.length}</span>
                </div>
            </div>
        </div>
    )
}