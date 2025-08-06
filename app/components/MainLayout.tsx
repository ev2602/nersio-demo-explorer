export default function MainLayout({children} : {children: React.ReactNode}) {
   return(
     <main className="bg-[#FBFBFB] border border-neutral-300 rounded-lg pb-4 flex-grow">
        {children}
    </main>
   )
}