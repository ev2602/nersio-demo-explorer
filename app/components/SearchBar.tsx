"use client"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SearchBar() {
    return(
        <div className="flex items-center w-[260px] h-[36px] mr-2 bg-neutral-100  rounded-lg px-3 py-2">
            <input
            type="text"
            placeholder="Search"
            className="">
            </input>
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
        </div>
    )
}