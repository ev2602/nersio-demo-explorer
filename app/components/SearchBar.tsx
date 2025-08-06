"use client"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


type Props = {
    value: string
    onChange: (value : string) => void
}

export default function SearchBar({value, onChange} : Props) {
    return(
        <div className="flex items-center w-[260px] h-[36px] bg-neutral-100  rounded-lg px-3 py-2">
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="outline-none text-neutral-500 text-sm font-normal placeholder:text-neutral-500 leading-5 w-full">
            </input>
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-base font-black cursor-pointer" />
        </div>
    )
}