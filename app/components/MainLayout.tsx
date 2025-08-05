export default function MainLayout({children} : {children: React.ReactNode}) {
   return(
     <main className="h-screen m-2 bg-[#FBFBFB] border border-neutral-300 rounded-lg">
        {children}
    </main>
   )
}