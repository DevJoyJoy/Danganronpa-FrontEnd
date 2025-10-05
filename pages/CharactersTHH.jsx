import { useState } from "react"
// import { useLocation } from "react-router-dom"

export const CharactersTHH = () => {
    const [character, setCharacter] = useState("")

    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
            </div>
            
            <div className="h-[150%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-125 justify-between">
                    <h1>Characters:</h1>
                    <ul>
                        <button onClick={() => setCharacter("Monokuma")}>Monokuma</button>
                        <br />
                        <button onClick={() => setCharacter("Aoi Asahina")}>Aoi Asahina</button>
                        <br />
                        <button onClick={() => setCharacter("Byakuya Togami")}>Byakuya Togami</button>
                        <br />
                        <button onClick={() => setCharacter("Chihiro Fujisaki")}>Chihiro Fujisaki</button>
                        <br />
                        <button onClick={() => setCharacter("Celestia Ludenberg")}>Celestia Ludenberg</button>
                        <br />
                        <button onClick={() => setCharacter("Hifumi Yamada")}>Hifumi Yamada</button>
                        <br />
                        <button onClick={() => setCharacter("Junko Enoshima")}>Junko Enoshima</button>
                        <br />
                        <button onClick={() => setCharacter("Kiyotaka Ishimaru")}>Kiyotaka Ishimaru</button>
                        <br />
                        <button onClick={() => setCharacter("Kyoko Kirigiri")}>Kyoko Kirigiri</button>
                        <br />
                        <button onClick={() => setCharacter("Leon Kuwata")}>Leon Kuwata</button>
                        <br />
                        <button onClick={() => setCharacter("Makoto Naegi")}>Makoto Naegi</button>
                        <br />
                        <button onClick={() => setCharacter("Mondo Owada")}>Mondo Owada</button>
                        <br />
                        <button onClick={() => setCharacter("Toko Fukawa")}>Toko Fukawa</button>
                        <br />
                        <button onClick={() => setCharacter("Sakura Ogami")}>Sakura Ogami</button>
                        <br />
                        <button onClick={() => setCharacter("Sayaka Maizono")}>Sayaka Maizono</button>
                        <br />
                        <button onClick={() => setCharacter("Yasuhiro Hagakure")}>Yasuhiro Hagakure</button>
                        <br />
                        <button onClick={() => setCharacter("Mukuro Ikusaba")}>??? (Spoiler)</button>
                    </ul>
                </div>

                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-500 h-125 justify-between">
                        <h2 className="text-2xl font-semibold">{character}</h2>
                </div>
            </div>
        </div>
    )
}
