export const Characters = () => {
    return(
        <div className='bg-pink-100 h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-[15%] flex flex-row items-center'>
                <img src="../Monokuma.gif" alt="" className="h-[110%]"/>
                <h1 className="flex font-sans text-white text-3xl  justify-center">Danganronpa</h1>
            </div>

            <div className="h-[90%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 ">
                    <h1 className='text-2xl'>Danganronpa: Trigger Happy Havoc</h1>
                    <p>Released in 2010, "Danganronpa: Trigger Happy Havoc" is the first game of the franchise,
                        where a group of talented high school students finds themselves trapped in a mysterious academy, 
                        forced into a deadly game where trust and deception collide.
                    </p>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 ">
                    <h1 className='text-2xl'>Super Danganronpa: Goodbye Despair</h1>
                    <p>Released in 2012, in "Super Danganronpa: Goodbye Despair", students are taken to a tropical island for what seems like an idyllic school trip, 
                        only to discover hidden dangers behind the paradise setting.
                    </p>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3">
                    <h1 className='text-2xl'>Danganronpa Another Episode: Ultra Despair Girls</h1>
                    <p>Released in 2014, "Danganronpa Another Episode: Ultra Despair Girls" follows two young protagonists 
                    navigating a city in chaos, combining adventure, action, and survival elements.</p>
                </div>
            </div>
                <div className="w-[96%] bg-pink-200 rounded-lg p-6 h-64 mx-auto">
                    <h1 className='text-2xl'>Danganronpa V3: Killing Harmony</h1>
                    <p>Released in 2017, in "Danganronpa V3: Killing Harmony", a new cast of gifted students faces another high-stakes survival scenario, testing their bonds, choices, 
                        and resilience in unexpected ways.
                    </p>
                </div>
        </div>
    
    )
}