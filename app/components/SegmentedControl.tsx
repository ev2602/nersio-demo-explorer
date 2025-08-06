'use client'

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Option = {
    name: string
    icon: IconDefinition
}

type Props = {
    options: Option[]
    selected: string
    onChange: (selectedValue : string) => void
} 

export default function SegmentedControl({
    options,
    selected,
    onChange
} : Props) {
    return(
        <div className="flex items-center justify-center rounded-md p-1 gap-2 bg-neutral-100 w-full">
            {options.map((option) => (
                <button
                    key={option.name}
                    onClick={() => onChange(option.name)}
                    className={`flex items-center justify-center w-full rounded-sm px-2.5 py-1.5 gap-1.5 cursor-pointer
                    ${selected === option.name ? 'bg-white drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]'
                    : '' }`}
                >
                    <FontAwesomeIcon icon={option.icon} />
                    {option.name}
                </button>
            ))}
        </div>
    )
}