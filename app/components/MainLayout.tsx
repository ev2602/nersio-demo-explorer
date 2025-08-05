export default function MainLayout({children} : {children: React.ReactNode}) {
   return(
     <main className="m-2 bg-[#FBFBFB] border border-neutral-300 rounded-lg pb-4">
        {children}
    </main>
   )
}