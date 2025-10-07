import { useState } from "react";

export const CharactersUDG = () => {
    const [character, setCharacter] = useState();

    const info = {
        "Byakuya Togami": {
            desc: "A composed and intelligent young man who takes charge in critical situations. Confident and logical.",
            img: "/UDG/Byakuya_Togami_Illustration.webp"
        },
        "Haiji Towa": {
            desc: "A nervous yet determined leader of a resistance group striving to protect survivors.",
            img: "/UDG/Haiji_Towa_Illustration.webp"
        },
        "Hiroko Hagakure": {
            desc: "A laid-back and resourceful woman with a strong will to survive and protect others.",
            img: "/UDG/Hiroko_Hagakure_Illustration.webp"
        },
        "Jataro Kemuri": {
            desc: "A masked child who hides deep insecurities behind his disturbing appearance and speech.",
            img: "/UDG/Jataro_Kemuri_Illustration.webp"
        },
        "Komaru Naegi": {
            desc: "An ordinary girl suddenly thrown into chaos. Kind-hearted, brave, and determined to survive.",
            img: "/UDG/Komaru_Naegi_Illustration.webp"
        },
        "Kotoko Utsugi": {
            desc: "A former child star with a cute but unpredictable personality, masking a troubled past.",
            img: "/UDG/Kotoko_Utsugi_Illustration.webp"
        },
        "Kurokuma": {
            desc: "A gangster-like Monokuma who speaks with flair and rebellion, often clashing with others.",
            img: "/UDG/Kurokuma_Illustration.webp"
        },
        "Makoto Naegi": {
            desc: "A hopeful and optimistic young man dedicated to saving others and bringing light to despair.",
            img: "/UDG/Makoto_Naegi_Illustration.webp"
        },
        "Masaru Daimon": {
            desc: "An energetic and outspoken child who takes pride in being a leader among his peers.",
            img: "/UDG/Masaru_Daimon_Illustration.webp"
        },
        "Monaca Towa": {
            desc: "A genius girl who hides her cunning nature behind an innocent smile.",
            img: "/UDG/Monaca_Towa_Illustration.webp"
        },
        "Nagisa Shingetsu": {
            desc: "A calm and intelligent child with a serious demeanor and strong sense of duty.",
            img: "/UDG/Nagisa_Shingetsu_Illustration.webp"
        },
        "Nagito Komaeda": {
            desc: "A mysterious boy obsessed with hope and despair, whose actions are often unpredictable.",
            img: "/UDG/Nagito_Komaeda_Illustration.webp"
        },
        "Shirokuma": {
            desc: "A gentle, kind-hearted bear who supports the resistance and promotes peace.",
            img: "/UDG/Shirokuma_Illustration.webp"
        },
        "Toko Fukawa": {
            desc: "A shy and sharp-tongued writer with strong emotions and a complex personality.",
            img: "/UDG/Toko_Fukawa_Illustration.webp"
        },

    };

    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
            </div>
            
            <div className="h-[150%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-110 justify-between">
                    <h1>Characters:</h1>
                    <ul>
                        {/* <button  onClick={() => setCharacter("")}>Monokuma types</button>
                        <br /> */}
                        <button onClick={() => setCharacter("Byakuya Togami")}>Byakuya Togami</button>
                        <br />
                        <button onClick={() => setCharacter("Haiji Towa")}>Haiji Towa</button>
                        <br />
                        <button onClick={() => setCharacter("Hiroko Hagakure")}>Hiroko Hagakure</button>
                        <br />
                        <button onClick={() => setCharacter("Jataro Kemuri")}>Jataro Kemuri</button>
                        <br />
                        <button onClick={() => setCharacter("Komaru Naegi")}>Komaru Naegi</button>
                        <br />
                        <button onClick={() => setCharacter("Kotoko Utsugi")}>Kotoko Utsugi</button>
                        <br />
                        <button onClick={() => setCharacter("Kurokuma")}>Kurokuma</button>
                        <br />
                        <button onClick={() => setCharacter("Makoto Naegi")}>Makoto Naegi</button>
                        <br />
                        <button onClick={() => setCharacter("Masaru Daimon")}>Masaru Daimon</button>
                        <br />
                        <button onClick={() => setCharacter("Monaca Towa")}>Monaca Towa</button>
                        <br />
                        <button onClick={() => setCharacter("Nagisa Shingetsu")}>Nagisa Shingetsu</button>
                        <br />
                        <button onClick={() => setCharacter("Nagito Komaeda")}>Nagito Komaeda</button>
                        <br />
                        <button onClick={() => setCharacter("Shirokuma")}>Shirokuma</button>
                        <br />
                        <button onClick={() => setCharacter("Toko Fukawa")}>Toko Fukawa</button>
                    </ul>
                </div>
                <div className="flex flex-row bg-pink-200 rounded-lg p-6 w-500 h-110 justify-between">
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