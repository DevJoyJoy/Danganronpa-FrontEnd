import { useState } from "react"

export const CharactersSD = () => {
    const [character, setCharacter] = useState("")

    const info = {
    "Monokuma": {
        desc: "The mischievous robotic bear who oversees the killing game. Loves chaos and despair.",
        img: "/SD/Monokuma_Illustration.webp"
    },
    "Monomi": {
        desc: "A kind-hearted rabbit mascot who tries to promote love and peace among the students.",
        img: "/SD/Monomi_Illustration.webp"
    },
    "Akane Owari": {
        desc: "A carefree and athletic girl obsessed with food and fighting. Passionate and fiercely loyal.",
        img: "/SD/Akane_Owari_Illustration.webp"
    },
    "Byakuya Twogami": {
        desc: "A confident and commanding figure who takes charge of the group, though not all is as it seems.",
        img: "/SD/Byakuya_Twogami_Illustration.webp"
    },
    "Chiaki Nanami": {
        desc: "A gentle and sleepy gamer who acts as a voice of reason and support for her classmates.",
        img: "/SD/Chiaki_Nanami_Illustration.webp"
    },
    "Fuyuhiko Kuzuryu": {
        desc: "The heir to a powerful yakuza family. Short-tempered but values loyalty and honor deeply.",
        img: "/SD/Fuyuhiko_Kuzuryu_Illustration.webp"
    },
    "Gundham Tanaka": {
        desc: "An eccentric 'Dark Lord' who loves animals and speaks in dramatic, mysterious tones.",
        img: "/SD/Gundham_Tanaka_Illustration.png"
    },
    "Hajime Hinata": {
        desc: "A curious and determined student with no known talent, seeking to discover his true identity.",
        img: "/SD/Hajime_Hinata_Illustration.webp"
    },
    "Hiyoko Saionji": {
        desc: "A traditional dancer with a childish and abrasive personality who hides a fragile side.",
        img: "/SD/Hiyoko_Saionji_Illustration.webp"
    },
    "Ibuki Mioda": {
        desc: "An energetic and quirky musician who lives for fun, noise, and excitement.",
        img: "/SD/Ibuki_Mioda_Illustration.webp"
    },
    "Kazuichi Soda": {
        desc: "A mechanic with bright creativity and low confidence, especially around girls he admires.",
        img: "/SD/Kazuichi_Soda_Illustration.webp"
    },
    "Mahiru Koizumi": {
        desc: "A reliable and honest photographer who values friendship and responsibility.",
        img: "/SD/Mahiru_Koizumi_Illustration.webp"
    },
    "Mikan Tsumiki": {
        desc: "A nervous and clumsy nurse with deep insecurity, always trying to please others.",
        img: "/SD/Mikan_Tsumiki_Illustration.webp"
    },
    "Nagito Komaeda": {
        desc: "An optimistic yet unstable boy obsessed with hope, luck, and the concept of despair.",
        img: "/SD/Nagito_Komaeda_Illustration.webp"
    },
    "Nekomaru Nidai": {
        desc: "A passionate and loud coach who motivates others through discipline and encouragement.",
        img: "/SD/Nekomaru_Nidai_Illustration.webp"
    },
    "Peko Pekoyama": {
        desc: "A quiet and composed swordswoman devoted to her duty and those she serves.",
        img: "/SD/Peko_Pekoyama_Illustration.webp"
    },
    "Sonia Nevermind": {
        desc: "A polite and curious princess fascinated by Japanese culture and everyday life.",
        img: "/SD/Sonia_Nevermind_Illustration.webp"
    },
    "Teruteru Hanamura": {
        desc: "A passionate cook with a flirtatious personality and big dreams of culinary fame.",
        img: "/SD/Teruteru_Hanamura_Illustration.webp"
    },
    "Junko Enoshima": {
        desc: "A charismatic and manipulative fashion model obsessed with spreading despair.",
        img: "/SD/Junko_Enoshima_Illustration.webp"
    },
    "Izuru Kamukura": {
        desc: "A mysterious individual embodying ultimate talent and emotionless perfection.",
        img: "/SD/Izuru_Kamukura_Illustration.webp"
    }
};

    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
            </div>
            
            <div className="h-[150%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-142 justify-between">
                    <h1>Characters:</h1>
                    <ul>
                        <button onClick={() => setCharacter("Monokuma")}>Monokuma</button>
                        <br />
                        <button onClick={() => setCharacter("Monomi")}>Usagi/Monomi</button>
                        <br />
                        <button onClick={() => setCharacter("Akane Owari")}>Akane Owari</button>
                        <br />
                        <button onClick={() => setCharacter("Byakuya Twogami")}>Byakuya Twogami</button>
                        <br />
                        <button onClick={() => setCharacter("Chiaki Nanami")}>Chiaki Nanami</button>
                        <br />
                        <button onClick={() => setCharacter("Fuyuhiko Kuzuryu")}>Fuyuhiko Kuzuryu</button>
                        <br />
                        <button onClick={() => setCharacter("Gundham Tanaka")}>Gundham Tanaka</button>
                        <br />
                        <button onClick={() => setCharacter("Hajime Hinata")}>Hajime Hinata</button>
                        <br />
                        <button onClick={() => setCharacter("Hiyoko Saionji")}>Hiyoko Saionji</button>
                        <br />
                        <button onClick={() => setCharacter("Ibuki Mioda")}>Ibuki Mioda</button>
                        <br />
                        <button onClick={() => setCharacter("Kazuichi Soda")}>Kazuichi Soda</button>
                        <br />
                        <button onClick={() => setCharacter("Mahiru Koizumi")}>Mahiru Koizumi</button>
                        <br />
                        <button onClick={() => setCharacter("Mikan Tsumiki")}>Mikan Tsumiki</button>
                        <br />
                        <button onClick={() => setCharacter("Nagito Komaeda")}>Nagito Komaeda</button>
                        <br />
                        <button onClick={() => setCharacter("Nekomaru Nidai")}>Nekomaru Nidai</button>
                        <br />
                        <button onClick={() => setCharacter("Peko Pekoyama")}>Peko Pekoyama</button>
                        <br />
                        <button onClick={() => setCharacter("Sonia Nevermind")}>Sonia Nevermind</button>
                        <br />
                        <button onClick={() => setCharacter("Teruteru Hanamura")}>Teruteru Hanamura</button>
                        <br />
                        <button onClick={() => setCharacter("Junko Enoshima")}>??? (Spoiler)</button>
                        <br />
                        <button onClick={() => setCharacter("Izuru Kamukura")}>??? (Spoiler)</button>
                    </ul>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-500 h-142 justify-between">
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