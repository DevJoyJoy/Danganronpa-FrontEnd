import { useNavigate } from "react-router-dom"

export const Games = () => {
    const navigate = useNavigate();
    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
                <button  onClick={() => navigate("/")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit justify-end">
                            Home
                </button>
            </div>

            <div className="h-[150%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 h-70 justify-between">
                    <h1 className='text-2xl'>Danganronpa: Trigger Happy Havoc</h1>
                    <p>Released in 2010, in "Danganronpa: Trigger Happy Havoc" a group of talented high school students 
                        finds themselves trapped in a mysterious academy, forced into a deadly game where trust and deception collide.
                    </p>
                    <button 
                        onClick={() => navigate("/CharactersTHH")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit"
                    >
                        List of Characters
                    </button>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 h-70 justify-between">
                    <h1 className='text-2xl'>Super Danganronpa: Goodbye Despair</h1>
                    <p>Released in 2012, in "Super Danganronpa: Goodbye Despair", students are taken to a tropical island for what seems like an idyllic school trip, 
                        only to discover hidden dangers behind the paradise setting.
                    </p>
                    <button 
                        onClick={() => navigate("/CharactersSD")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit"
                    >
                        List of Characters
                    </button>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 h-70 justify-between">
                    <h1 className='text-2xl'>Danganronpa Another Episode: Ultra Despair Girls</h1>
                    <p>Released in 2014, "Danganronpa Another Episode: Ultra Despair Girls" follows two young protagonists 
                    navigating a city in chaos, combining adventure, action, and survival elements.</p>
                    <button 
                        onClick={() => navigate("/CharactersUDG")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit"
                    >
                        List of Characters
                    </button>
                </div>
            </div>
            <div className="h-[150%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 h-70 justify-between">
                    <h1 className='text-2xl'>Danganronpa V3: Killing Harmony</h1>
                    <p>Released in 2017, in "Danganronpa V3: Killing Harmony", a new cast of gifted students faces another high-stakes survival scenario, testing their bonds, choices, 
                        and resilience in unexpected ways.
                    </p>
                    <button 
                        onClick={() => navigate("/CharactersV3")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit"
                    >
                        List of Characters
                    </button>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 h-70 justify-between">
                    <h1 className='text-2xl'>Danganronpa S: Ultimate Summer</h1>
                    <p>Released in 2022, with an all-star dream lineup of characters from each Danganronpa game, 
                        gather Hope Fragments at a tropical resort. Explore Jabberwock Island and develop your Dangan 
                        characters.
                    </p>
                    <div className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit">
                        No list
                    </div>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 h-70 justify-between">
                    <h1 className='text-2xl'>Danganronpa 2x2</h1>
                    <p>Relive the chilling and thrilling story in greater beauty and comfort than ever 
                        before. Two complete experiences in one package with an entirely new scenario!
                    </p>
                    
                    <div className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit">
                        Comming Soon
                    </div>
                </div>
            </div>
        </div>
    
    )
}