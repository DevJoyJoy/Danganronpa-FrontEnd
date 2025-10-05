import { useState } from "react"
// import { useLocation } from "react-router-dom"

export const CharactersTHH = () => {
    const [character, setCharacter] = useState("")

    const info = {
    "Monokuma": {
        desc: "A robotic bear who acts as the headmaster of Hope's Peak Academy. Mischievous, unpredictable, and enjoys chaos.",
        img: "/THH/Monokuma_Illustration.webp"
    },
    "Makoto Naegi": {
        desc: "An ordinary student chosen by luck to attend Hope's Peak Academy. Kind-hearted and determined to uncover the truth.",
        img: "/THH/Makoto_Naegi_Illustration.webp"
    },
    "Kyoko Kirigiri": {
        desc: "A calm and mysterious girl with sharp intellect and impressive investigative skills.",
        img: "/THH/Kyoko_Kirigiri_Illustration.webp"
    },
    "Byakuya Togami": {
        desc: "A proud heir of a wealthy family who believes himself superior to others. Logical and confident.",
        img: "/THH/Byakuya_Togami_Illustration.webp"
    },
    "Aoi Asahina": {
        desc: "An energetic and cheerful swimmer who cares deeply about her friends.",
        img: "/THH/Aoi_Asahina_Illustration.webp"
    },
    "Toko Fukawa": {
        desc: "A talented writer who is shy and nervous, often struggling to express her feelings properly.",
        img: "/THH/Toko_Fukawa_Illustration.webp"
    },
    "Sakura Ogami": {
        desc: "A disciplined martial artist with immense strength and a strong sense of honor.",
        img: "/THH/Sakura_Ogami_Illustration.webp"
    },
    "Sayaka Maizono": {
        desc: "An idol with a sweet personality who dreams of performing with her classmates again.",
        img: "/THH/Sayaka_Maizono_Illustration.webp"
    },
    "Leon Kuwata": {
        desc: "A passionate baseball player who wishes to pursue a more artistic career instead.",
        img: "/THH_Leon_Kuwata_Illustration.webp"
    },
    "Chihiro Fujisaki": {
        desc: "A shy and gentle programmer who struggles with self-confidence but is highly intelligent.",
        img: "/THH/Chihiro_Fujisaki_Illustration.webp"
    },
    "Mondo Owada": {
        desc: "A hot-headed biker gang leader who values loyalty and brotherhood above all.",
        img: "/THH/Mondo_Owada_Illustration.webp"
    },
    "Kiyotaka Ishimaru": {
        desc: "A strict and disciplined student obsessed with rules and justice.",
        img: "/THH/Kiyotaka_Ishimaru_Illustration.webp"
    },
    "Celestia Ludenberg": {
        desc: "A composed and elegant gambler who loves gothic fashion and maintaining her perfect image.",
        img: "/THH/Celestia_Ludenberg_Illustration.webp"
    },
    "Hifumi Yamada": {
        desc: "An eccentric fan of anime and manga with a vivid imagination and dramatic personality.",
        img: "/THH/Hifumi_Yamada_Illustration.webp"
    },
    "Yasuhiro Hagakure": {
        desc: "A carefree and superstitious fortune-teller who tends to misinterpret situations.",
        img: "/THH/Yasuhiro_Hagakure_Illustration.webp"
    },
    "Junko Enoshima": {
        desc: "A charismatic fashion model with an unpredictable and bold attitude.",
        img: "/THH/Junko_Enoshima_Illustration.webp"
    },
    "Mukuro Ikusaba": {
        desc: "A mysterious figure whose identity is shrouded in secrecy. Known for her calm and skilled demeanor.",
        img: "/THH/Mukuro_Ikusaba_Illustration.webp"
    }
}


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
                        {character && (
                            <>
                            <h2 className="text-2xl font-semibold mb-4">{character}</h2>
                            <img src={info[character]?.img}  alt={character} className="w-64 h-auto rounded-lg mb-4" />
                            <p>{info[character]?.desc}</p>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}
