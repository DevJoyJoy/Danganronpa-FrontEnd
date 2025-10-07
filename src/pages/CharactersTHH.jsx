import { useState } from "react"
// import { useLocation } from "react-router-dom"

export const CharactersTHH = () => {
    const [character, setCharacter] = useState("")

    const info = {
    "Monokuma": {
        desc: "Monokuma is often described as easygoing and cheerful at first glance, but with a very sinister undertone. However, he always rather quickly reveals his evil nature by describing killing games and his desire for despair, and he is very well known for his habit to say and do whatever he wants to. He loves hysteria, violence, and chaos, summarized in one of his catchphrases 'thrills, chills, kills!'. He also has his own signature laughs, a sadistic 'puhuhu' ('upupupu' in the Japanese version) and a mocking 'ah-hahahaha'. In many ways, Monokuma represents duality both in design and personality, with his white good side and black evil side. He can sometimes act polite or cute and innocent, even patronizing, and during rare moments he even seems to give genuine positive and wise advice. However, he is mostly known for his malicious and cruel side, possessing a twisted sense of humor and a tendency to torment others and do anything for the sake of despair. He can switch between these traits at the drop of a hat, making him unpredictable for his students to deal with. He usually gets excited about the Class Trials and does everything he can in order to make them entertaining for himself.",
        img: "/V3/Monokuma_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Makoto Naegi": {
        desc: "An ordinary student chosen by luck to attend Hope's Peak Academy. Kind-hearted and determined to uncover the truth.",
        img: "/THH/Makoto_Naegi_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Kyoko Kirigiri": {
        desc: "A calm and mysterious girl with sharp intellect and impressive investigative skills.",
        img: "/THH/Kyoko_Kirigiri_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Byakuya Togami": {
        desc: "A proud heir of a wealthy family who believes himself superior to others. Logical and confident.",
        img: "/THH/Byakuya_Togami_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Aoi Asahina": {
        desc: "An energetic and cheerful swimmer who cares deeply about her friends.",
        img: "/THH/Aoi_Asahina_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Toko Fukawa": {
        desc: "A talented writer who is shy and nervous, often struggling to express her feelings properly.",
        img: "/THH/Toko_Fukawa_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Sakura Ogami": {
        desc: "A disciplined martial artist with immense strength and a strong sense of honor.",
        img: "/THH/Sakura_Ogami_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Sayaka Maizono": {
        desc: "An idol with a sweet personality who dreams of performing with her classmates again.",
        img: "/THH/Sayaka_Maizono_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Leon Kuwata": {
        desc: "A passionate baseball player who wishes to pursue a more artistic career instead.",
        img: "/THH/Leon_Kuwata_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Chihiro Fujisaki": {
        desc: "A shy and gentle programmer who struggles with self-confidence but is highly intelligent.",
        img: "/THH/Chihiro_Fujisaki_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Mondo Owada": {
        desc: "A hot-headed biker gang leader who values loyalty and brotherhood above all.",
        img: "/THH/Mondo_Owada_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Kiyotaka Ishimaru": {
        desc: "A strict and disciplined student obsessed with rules and justice.",
        img: "/THH/Kiyotaka_Ishimaru_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Celestia Ludenberg": {
        desc: "A composed and elegant gambler who loves gothic fashion and maintaining her perfect image.",
        img: "/THH/Celestia_Ludenberg_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Hifumi Yamada": {
        desc: "An eccentric fan of anime and manga with a vivid imagination and dramatic personality.",
        img: "/THH/Hifumi_Yamada_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Yasuhiro Hagakure": {
        desc: "A carefree and superstitious fortune-teller who tends to misinterpret situations.",
        img: "/THH/Yasuhiro_Hagakure_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Junko Enoshima": {
        desc: "As a young fashionista, Junko Enoshima is described as simply 'not fake', charismatic and eager to try new things. During her first appearances, she comes across slightly air-headed and hot-tempered. In the official artbook, she is described as a person who 'drips with dissatisfaction the moment she opens her mouth' and tends to be in trouble with her classmates. She is also mentioned to be a bit too talkative with an overly carefree attitude. However, Junko's real personality, revealed at the conclusion of the Killing School Life, is notably different: very apathetic and easily bored to an unhealthy and abnormal degree. Because of this, her behavior and mannerisms tended to be extremely erratic and unstable by her own autonomous design; keeping up one 'appearance' for too long bores her, which causes her to often switch between her aforementioned different personas.",
            img: "/V3/Junko_Enoshima_Illustration.webp",
            height: "169 cm (JP)/5'7 (ENG)",
            weight: "45 kg (JP)/99 lbs (ENG)",
            birthday: "December 24",
            likes: "None",
            dislikes: "None",
            ultimate: "The Ultimate Despair"
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

                <div className="flex flex-row bg-pink-200 rounded-lg p-6 w-500 h-125 justify-between">
                        {character && (
                            <>
                            <img src={info[character]?.img}  alt={character} className="w-110 h-auto rounded-lg mb-4 justify-start" />
                            <div className="w-250">
                                <h2 className="text-2xl font-semibold mb-4">{character}</h2>
                                <p><b>Height:</b> {info[character]?.height}</p>
                                
                                <p><b>Weight:</b> {info[character]?.weight}</p>
                                
                                <p><b>Birthday:</b> {info[character]?.birthday}</p>
                                
                                <p><b>Likes:</b> {info[character]?.likes}</p>
                                
                                <p><b>Dislikes:</b> {info[character]?.dislikes}</p>
                                <br />
                                <p>{info[character]?.desc}</p>
                            </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}
