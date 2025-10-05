import { useState } from "react";

export const CharactersV3 = () => {
    const [character, setCharacter] = useState();

    const info = {
        "Monokuma": {
            desc: "The chaotic bear returns as the headmaster once again, bringing madness and despair wherever he goes.",
            img: "/V3/Monokuma_Illustration.webp"
        },
        "Angie Yonaga": {
            desc: "A cheerful and eccentric artist who believes her inspiration comes directly from a divine being.",
            img: "/V3/Angie_Yonaga_Illustration.webp"
        },
        "Gonta Gokuhara": {
            desc: "A gentle giant raised in the wild, striving to become a true gentleman despite his rough past.",
            img: "/V3/Gonta_Gokuhara_Illustration.webp"
        },
        "Himiko Yumeno": {
            desc: "A lazy and quiet magician who insists her tricks are real magic, despite others’ doubts.",
            img: "/V3/Himiko_Yumeno_Illustration.webp"
        },
        "K1-B0 (Keebo)": {
            desc: "A humanoid robot with a pure heart, learning what it means to be truly human.",
            img: "/V3/K1-B0_Illustration.webp"
        },
        "Kaede Akamatsu": {
            desc: "An optimistic pianist who believes in hope and unity among her classmates.",
            img: "/V3/Kaede_Akamatsu_Illustration.webp"
        },
        "Kaito Momota": {
            desc: "A passionate space enthusiast who encourages others to chase their dreams and never give up.",
            img: "/V3/Kaito_Momota_Illustration.webp"
        },
        "Kirumi Tojo": {
            desc: "An efficient and elegant maid who takes her responsibilities seriously and serves with grace.",
            img: "/V3/Kirumi_Tojo_Illustration.webp"
        },
        "Kokichi Ouma": {
            desc: "A mischievous liar and prankster whose true motives are hard to read.",
            img: "/V3/Kokichi_Ouma_Illustration.webp"
        },
        "Korekiyo Shinguji": {
            desc: "A composed anthropologist fascinated by human nature and cultural beauty.",
            img: "/V3/Korekiyo_Shinguji_Illustration.webp"
        },
        "Maki Harukawa": {
            desc: "A quiet and stoic girl with a mysterious background, hiding her emotions behind a cold exterior.",
            img: "/V3/Maki_Harukawa_Illustration.webp"
        },
        "Miu Iruma": {
            desc: "A foul-mouthed but brilliant inventor with wild creativity and bold confidence.",
            img: "/V3/Miu_Iruma_Illustration.webp"
        },
        "Rantaro Amami": {
            desc: "A relaxed and observant student shrouded in mystery, with sharp insight and calm demeanor.",
            img: "/V3/Rantaro_Amami_Illustration.webp"
        },
        "Ryoma Hoshi": {
            desc: "A former tennis prodigy who now carries a quiet and brooding outlook on life.",
            img: "/V3/Ryoma_Hoshi_Illustration.webp"
        },
        "Shuichi Saihara": {
            desc: "A shy and thoughtful detective who doubts himself but seeks the truth above all else.",
            img: "/V3/Shuichi_Saihara_Illustration.webp"
        },
        "Tenko Chabashira": {
            desc: "An energetic martial artist devoted to her master and her own strong ideals.",
            img: "/V3/Tenko_Chabashira_Illustration.webp"
        },
        "Tsumugi Shirogane": {
            desc: "A calm and polite cosplayer who loves bringing characters to life through her craft.",
            img: "/V3/Tsumugi_Shirogane_Illustration.webp"
        },
        "Junko Enoshima": {
            desc: "A charismatic and chaotic fashion model obsessed with despair and unpredictability.",
            img: "/V3/Junko_Enoshima_Illustration.webp"
        }
    };

    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
            </div>
            
            <div className="h-[150%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-130 justify-between">
                    <h1>Characters:</h1>
                    <ul>
                        <button onClick={() => setCharacter("Monokuma")}>Monokuma</button>
                        <br />
                        {/* <button>Monokids</button>
                        <br /> */}
                        <button onClick={() => setCharacter("Angie Yonaga")}>Angie Yonaga</button>
                        <br />
                        <button onClick={() => setCharacter("Gonta Gokuhara")}>Gonta Gokuhara</button>
                        <br />
                        <button onClick={() => setCharacter("Himiko Yumeno")}>Himiko Yumeno</button>
                        <br />
                        <button onClick={() => setCharacter("K1-B0 (Keebo)")}>K1-B0 (Keebo)</button>
                        <br />
                        <button onClick={() => setCharacter("Kaede Akamatsu")}>Kaede Akamatsu</button>
                        <br />
                        <button onClick={() => setCharacter("Kaito Momota")}>Kaito Momota</button>
                        <br />
                        <button onClick={() => setCharacter("Kirumi Tojo")}>Kirumi Tojo</button>
                        <br />
                        <button onClick={() => setCharacter("Kokichi Ouma")}>Kokichi Ouma</button>
                        <br />
                        <button onClick={() => setCharacter("Korekiyo Shinguji")}>Korekiyo Shinguji</button>
                        <br />
                        <button onClick={() => setCharacter("Maki Harukawa")}>Maki Harukawa</button>
                        <br />
                        <button onClick={() => setCharacter("Miu Iruma")}>Miu Iruma</button>
                        <br />
                        <button onClick={() => setCharacter("Rantaro Amami")}>Rantaro Amami</button>
                        <br />
                        <button onClick={() => setCharacter("Ryoma Hoshi")}>Ryoma Hoshi</button>
                        <br />
                        <button onClick={() => setCharacter("Shuichi Saihara")}>Shuichi Saihara</button>
                        <br />
                        <button onClick={() => setCharacter("Tenko Chabashira")}>Tenko Chabashira</button>
                        <br />
                        <button onClick={() => setCharacter("Tsumugi Shirogane")}>Tsumugi Shirogane</button>
                        <br />
                        <button onClick={() => setCharacter("Junko Enoshima")}>??? (Spoiler)</button>
                    </ul>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-500 h-130 justify-between">
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