
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MonoTypes = () => {
    const [character, setCharacter] = useState();
    const navigate = useNavigate();

    const info = {
        "Beast": {
            img: "/MonoTypes/Beast_Monokuma.jpg"
        },
        "Bomber": {
            img: "/MonoTypes/Bomber_Monokuma.webp"
        },
        "Destroy": {
            img: "/MonoTypes/Destroy_Monokuma.webp"
        },
        "Guard":{
            img: "/MonoTypes/Guard_Monokuma.webp"
        },
        "Junk": {
            img: "/MonoTypes/Junk_Monokuma.webp"
        },
        "Mono-Ball": {
            img: "/MonoTypes/Mono_Ball_Monokuma.webp"
        },
        "Siren": {
            img: "/MonoTypes/Siren_Monokuma.webp"
        }
    };

    return (
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
                <button onClick={() => navigate("/")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit ml-auto">
                    Home
                </button>
            </div>

            <div className="h-[150%] w-full flex p-6 gap-6">
            <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-60 justify-between">
                <h1>Characters:</h1>
                <ul>
                    <button onClick={() => setCharacter("Beast")}>Beast</button>
                    <br />
                    <button onClick={() => setCharacter("Bomber")}>Bomber</button>
                    <br />
                    <button onClick={() => setCharacter("Destroy")}>Destroy</button>
                    <br />
                    <button onClick={() => setCharacter("Guard")}>Guard</button>
                    <br />
                    <button onClick={() => setCharacter("Junk")}>Junk</button>
                    <br />
                    <button onClick={() => setCharacter("Mono-Ball")}>Mono-Ball</button>
                    <br />
                    <button onClick={() => setCharacter("Siren")}>Siren</button>
                    <br />
                </ul>
            </div>
            <div className="flex flex-row bg-pink-200 rounded-lg p-6 w-full h-auto items-start gap-8">

                {character && (
                    <>
                    <div className="flex-shrink-0">
                        <h2 className="text-2xl font-bold mb-3">{character}</h2>
                        <img src={info[character]?.img} alt={character} className="h-[360px] w-auto rounded-xl object-cover"/>
                    </div>

                    </>
                )}
                </div>
            </div>
        </div>
    );
}