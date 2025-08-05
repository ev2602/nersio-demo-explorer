export default function Header({children} : {children: React.ReactNode}) {
    return(
        <header className="flex items-center justify-between sticky top-0 border-b border-neutral-300 h-13">
            {children}
        </header>
    )
}