"use client"

export default function Headline({children} : {children: React.ReactNode}) {
    return(
        <h1 className="text-base text-neutral-900 font-semibold leading-5 ml-4">
          {children}
        </h1>
    )
}