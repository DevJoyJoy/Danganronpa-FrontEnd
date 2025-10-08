import { useState } from "react"

export const CharactersSD = () => {
    const [character, setCharacter] = useState("")

    const info = {
    "Monokuma": {
        desc: "Monokuma is often described as easygoing and cheerful at first glance, but with a very sinister undertone. However, he always rather quickly reveals his evil nature by describing killing games and his desire for despair, and he is very well known for his habit to say and do whatever he wants to. He loves hysteria, violence, and chaos, summarized in one of his catchphrases 'thrills, chills, kills!'. He also has his own signature laughs, a sadistic 'puhuhu' ('upupupu' in the Japanese version) and a mocking 'ah-hahahaha'. In many ways, Monokuma represents duality both in design and personality, with his white good side and black evil side. He can sometimes act polite or cute and innocent, even patronizing, and during rare moments he even seems to give genuine positive and wise advice. However, he is mostly known for his malicious and cruel side, possessing a twisted sense of humor and a tendency to torment others and do anything for the sake of despair. He can switch between these traits at the drop of a hat, making him unpredictable for his students to deal with. He usually gets excited about the Class Trials and does everything he can in order to make them entertaining for himself.",
        img: "/SD/Monokuma_Illustration.webp",
        height: "65 cm/2'5 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Headmaster of Hope's Peak Academy"
    },
    "Monomi": {
        desc: "A kind-hearted rabbit mascot who tries to promote love and peace among the students.",
        img: "/SD/Monomi_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Akane Owari": {
        desc: "A carefree and athletic girl obsessed with food and fighting. Passionate and fiercely loyal.",
        img: "/SD/Akane_Owari_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Byakuya Twogami": {
        desc: "A confident and commanding figure who takes charge of the group, though not all is as it seems.",
        img: "/SD/Byakuya_Twogami_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Chiaki Nanami": {
        desc: "A gentle and sleepy gamer who acts as a voice of reason and support for her classmates.",
        img: "/SD/Chiaki_Nanami_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Fuyuhiko Kuzuryu": {
        desc: "The heir to a powerful yakuza family. Short-tempered but values loyalty and honor deeply.",
        img: "/SD/Fuyuhiko_Kuzuryu_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Gundham Tanaka": {
        desc: "An eccentric 'Dark Lord' who loves animals and speaks in dramatic, mysterious tones.",
        img: "/SD/Gundham_Tanaka_Illustration.png",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Hajime Hinata": {
        desc: "A curious and determined student with no known talent, seeking to discover his true identity.",
        img: "/SD/Hajime_Hinata_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Hiyoko Saionji": {
        desc: "A traditional dancer with a childish and abrasive personality who hides a fragile side.",
        img: "/SD/Hiyoko_Saionji_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Ibuki Mioda": {
        desc: "An energetic and quirky musician who lives for fun, noise, and excitement.",
        img: "/SD/Ibuki_Mioda_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Kazuichi Soda": {
        desc: "A mechanic with bright creativity and low confidence, especially around girls he admires.",
        img: "/SD/Kazuichi_Soda_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Mahiru Koizumi": {
        desc: "A reliable and honest photographer who values friendship and responsibility.",
        img: "/SD/Mahiru_Koizumi_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Mikan Tsumiki": {
        desc: "A nervous and clumsy nurse with deep insecurity, always trying to please others.",
        img: "/SD/Mikan_Tsumiki_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Nagito Komaeda": {
        desc: "Nagito has a laid-back and quite calm demeanor, and he is often smiling or laughing. However, his cheerfulness may not be entirely genuine, as his calmness is more akin to apathy and he tends to feel strong self-hatred. He remains cheerful even during his self-loathing rambling, and acts disturbingly optimistically toward horrible things such as death, as long as it's for the sake of hope. Nagito likely suppresses any real feelings of sorrow or fear as a coping mechanism, because he experiences tragedy often due to his luck. He has also seen very unlikely and strange things due to his luck, which is why he is not easily surprised. As a result of everything he's been through, he has become more emotionally numb and he is rarely openly angry or scared. He often lacks appropriate emotions in situations where most people would be afraid, like threats of violence. Even so, he once mentioned that he feels fear every day of his life, most likely because of his luck. Furthermore, he can be very angered by despair and other things he considers insulting toward hope. When he does express anger, he becomes notably more serious. When displeased, he is very passive-aggressive.",
        img: "/SD/Nagito_Komaeda_Illustration.webp",
        height: "180 cm (JP)/5'9 (ENG)",
        weight: "65 kg (JP)/143 lbs (ENG)",
        birthday: "April 28",
        likes: "Pretty/beautiful things",
        dislikes: "Noisy places",
        ultimate: "Ultimate Lucky Student"
    },
    "Nekomaru Nidai": {
        desc: "A passionate and loud coach who motivates others through discipline and encouragement.",
        img: "/SD/Nekomaru_Nidai_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Peko Pekoyama": {
        desc: "A quiet and composed swordswoman devoted to her duty and those she serves.",
        img: "/SD/Peko_Pekoyama_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Sonia Nevermind": {
        desc: "A polite and curious princess fascinated by Japanese culture and everyday life.",
        img: "/SD/Sonia_Nevermind_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Teruteru Hanamura": {
        desc: "A passionate cook with a flirtatious personality and big dreams of culinary fame.",
        img: "/SD/Teruteru_Hanamura_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky Students"
    },
    "Junko Enoshima": {
        ddesc: "As a young fashionista, Junko Enoshima is described as simply 'not fake', charismatic and eager to try new things. During her first appearances, she comes across slightly air-headed and hot-tempered. In the official artbook, she is described as a person who 'drips with dissatisfaction the moment she opens her mouth' and tends to be in trouble with her classmates. She is also mentioned to be a bit too talkative with an overly carefree attitude. However, Junko's real personality, revealed at the conclusion of the Killing School Life, is notably different: very apathetic and easily bored to an unhealthy and abnormal degree. Because of this, her behavior and mannerisms tended to be extremely erratic and unstable by her own autonomous design; keeping up one 'appearance' for too long bores her, which causes her to often switch between her aforementioned different personas.",
        img: "/SD/Junko_Enoshima_Illustration.webp",
        height: "169 cm (JP)/5'7 (ENG)",
        weight: "45 kg (JP)/99 lbs (ENG)",
        birthday: "December 24",
        likes: "None",
        dislikes: "None",
        ultimate: "The Ultimate Despair"
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
                <div className="flex flex-row bg-pink-200 rounded-lg p-6 w-500 h-142 justify-between">
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

                                <p><b>Ultimate:</b> {info[character]?.ultimate}</p>
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