import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const CharactersSD = () => {
    const [character, setCharacter] = useState("");
    const navigate = useNavigate();

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
        desc: "Usami is gentle and kindhearted, but also very naive and not very smart. While she is strict about rules and certain other things, it's very easy to trick or persuade her. All she wants is to foster love, friendship, and good manners, emphasized in her catchphrase 'love, love!'. Because of this, she can come across overly sweet and annoying. She encourages everyone to live in peace and strengthen their bonds with each other. She is very happy and proud when everyone gets along, and scolds them when they do bad and kindly asks them not to do it again.",
        img: "/SD/Monomi_Illustration.webp",
        height: "55 cm (JP)/1'9 (ENG)",
        weight: "None",
        birthday: "None",
        likes: "None",
        dislikes: "None",
        ultimate: "Magical Girl Miracle ★ Usami"
    },
    "Akane Owari": {
        desc: "Akane has a fiery personality, characterized by her love for fighting using only her fists and body. She is always eager to challenge strong opponents, feeling excited and motivated by the prospect of countless powerful people she has yet to fight. She deeply respects the physically strong, like Nekomaru, and losing to them only fuels her determination to win. In contrast, Akane shows little interest in fighting those she perceives as having low fighting power, who she can tell just by glancing at them. At the beginning of the Killing School Trip, Akane sees through Fuyuhiko’s tough facade and, despite his threats to kill, believes he's just hiding how scared he really is. She teases him about his baby face, which she doesn’t find scary, calling him 'Baby Gangsta'.",
        img: "/SD/Akane_Owari_Illustration.webp",
        height: "176 cm (JP)/5'7 (ENG)",
        weight: "56 kg (JP)/123 lbs (ENG)",
        birthday: "July 15",
        likes: "Meat",
        dislikes: "Working hard",
        ultimate: "Ultimate Gymnast"
    },
    "Byakuya Twogami": {
        desc: "Unknown",
        img: "/SD/Byakuya_Twogami_Illustration.webp",
        height: "Unknown",
        weight: "Unknown",
        birthday: "Unknown",
        likes: "Unknown",
        dislikes: "Unknown",
        ultimate: "Ultimate Impostor"
    },
    "Chiaki Nanami": {
        desc: "Chiaki normally has a quiet and sleepy disposition. She easily gets absorbed while playing video games to the point of ignoring her surroundings and forgetting her basic needs like sleeping and breathing. She stares off into space and pauses a lot amidst conversations so she has everything ready in her head before articulating it. She can instantly sleep anywhere and at any given time: while standing, swimming, reading, watching movies, riding a carousel, and the list goes on. She lucid dreams playing a different video game each time she sleeps and can perfectly retell them. Chiaki uses gaming terms and references often that sometimes she derails the conversation. At other times, she employs them to seriously convey her point.",
        img: "/SD/Chiaki_Nanami_Illustration.webp",
        height: "160 cm (JP)/5'2 (ENG)",
        weight: "46 kg (JP)/101 lbs (ENG)",
        birthday: "March 14",
        likes: "Gamer",
        dislikes: "Alarm clocks",
        ultimate: "Ultimate Gamer"
    },
    "Fuyuhiko Kuzuryu": {
        desc: "Fuyuhiko is initially incredibly stand-offish, always in a crappy mood, and rude to the other students on the island. He claims he's not going to play at being friends with anyone, and considers it not worth his time and beneath him. When Fuyuhiko interacts with others, whether by choice or not, his attitude is combative and irritable. He is easily angered and often resorts to threatening or insulting others when they disagree with or complain about his actions. He badmouths everyone, using names like 'bastard', 'dumbass', and 'motherfucker.' In the original Japanese, his signature insult is boke (ぼけ), and he frequently punctuates arguments with it. He is also not above casually issuing death threats to anyone who irritates him. He asserts his yakuza background so often to enhance his lone-wolf attitude. ",
        img: "/SD/Fuyuhiko_Kuzuryu_Illustration.webp",
        height: "157 cm (JP)/5'1 (ENG)",
        weight: "43 kg (JP)/94 lbs (ENG)",
        birthday: "August 16",
        likes: "Fried dough cookies",
        dislikes: "Milk",
        ultimate: "Ultimate Yakuza"
    },
    "Gundham Tanaka": {
        desc: "Gundham is an eccentric and larger-than-life character, having delusions of grandeur caused by his chūnibyō syndrome. As 'the offspring of an angel and evil', he proclaims himself as evil personified, one who has claimed dominion over evil, and thus a being that transcends humanity. To further embellish his villainous persona, he adopts grandiose titles such as the Supreme Overlord of Ice and Tanaka the Forbidden One. He also refers to his pets as his loyal subordinates under the dominion of the Tanaka Empire and gets offended when others call his Four Dark Devas of Destruction 'hamsters'. Gundhams talks in an exaggerated, theatrical style reminiscent of a cartoon supervillain, using pompous, old-fashioned, esoteric vocabulary, allowing him to inflate mundane interactions. His speeches, dripping with poetic, cryptic, and metaphorical language and terms, often irritate and confuse others, especially those who are not used to interacting with him, ultimately causing Gundham to push them away from him. He perceives 'normal people' as inferior beings incapable of comprehending the full extent of 'his power', calling them 'mere humans', 'fools', and 'fiends', among other dismissive terms.",
        img: "/SD/Gundham_Tanaka_Illustration.png",
        height: "182 cm (JP)/5'9 (ENG)",
        weight: "74 kg (JP)/163 lbs (ENG)",
        birthday: "December 14",
        likes: "Four Dark Devas of Destruction",
        dislikes: "Earthly life",
        ultimate: "Ultimate Breeder"
    },
    "Hajime Hinata": {
        desc: "Hajime seems cynical at first glance, but it would be more accurate to describe him as a realist. He is quite skeptical and tends to worry more than the other students, but his worries are usually understandable. He is logical and keen, often annoyed by the idea of not being able to understand someone or something at all. He tends to be quite serious, but he does joke around and often goes along with his 'classmates' eccentric hobbies anyway, and sometimes smiles awkwardly and sheepishly while his friends engage in some of their usual weird behavior. He is sometimes annoyed by some of his classmates and can be snarky towards them in his thoughts as well as blunt while speaking to them, though he's more frank than sarcastic or mean-spirited. Though sometimes a bit submissive (especially with bossy girls), he is not afraid to speak his mind, and he can be rude if annoyed enough (for example, after enduring Hiyoko's attitude during her Free Time Events, he finally ends up stating 'I don't even care anymore'). He can sometimes be short-tempered and snap at others, especially when he's tired or under pressure. He was also quite paranoid during the start of the game and didn't have much interest in friendship, but he later really wanted to believe in his classmates and felt bad about doubting them during the Class Trials, though he understood it was necessary.",
        img: "/SD/Hajime_Hinata_Illustration.webp",
        height: "179 cm (JP)/5'8 (ENG)",
        weight: "67 kg (JP)/147 lbs (ENG)",
        birthday: "January 1",
        likes: "Kusamochi",
        dislikes: "Sakuramochi",
        ultimate: "Ultimate ???"
    },
    "Hiyoko Saionji": {
        desc: "Hiyoko's cute appearance, voice, and initial way of talking to strangers give the impression that she is innocent and childlike. In the original Japanese, Hiyoko refers to her classmates using childish honorifics like 'onee' (おね, big sis) and 'onii' (おにい, big bro), which enhances her childlike persona, though she pointedly excludes certain individuals—such as Mikan and Fuyuhiko—and omits it for those she has lost respect for, like Teruteru and Peko in the Killing School Trip. That first impression falters the moment she opens her mouth, where Hiyoko is revealed to be cruel, malicious, foul-mouthed and brutally honest. An early example is her tendency to torture small animals, like squishing ants because they make a satisfying popping noise when done correctly, and calling Hajime a wuss for refusing to join her. Later, at the beach, she goes around trying to step on and trample crabs, laughing as if it were just child's play, showing an alarming fascination with it.",
        img: "/SD/Hiyoko_Saionji_Illustration.webp",
        height: "130 cm (JP)/4'2 (ENG)",
        weight: "31 kg (JP)/68 lbs (ENG)",
        birthday: "March 9",
        likes: "Squish squishy",
        dislikes: "Lectures",
        ultimate: "Ultimate Tradicional Dancer"
    },
    "Ibuki Mioda": {
        desc: "Ibuki exudes quirkiness and eccentricity in every aspect of herself, styling everything to suit her revolutionary and unique taste. An obvious example is her heavily stylized punk-rock sailor uniform—an uncommon look for a light music club member or high school girl in general. Hajime noted that Ibuki put so much effort into styling her clothes that they looked completely unlike commercial products. Her quirkiness also extends to her over-the-top introductions and the variety of unique 'good mornings' she invents and throws at people daily, such as 'Good nom-nom-noming' and 'Good mongrel.' In the original Japanese release, she refers to herself in the third person and calls everyone by their first name with '-chan' from the moment she meets them, which is rather jarring and highly informal in a cultural setting where honorifics and social distance are usually respected, especially among acquaintances or strangers. Ibuki also speaks in the third person in the English version, but not as consistently.",
        img: "/SD/Ibuki_Mioda_Illustration.webp",
        height: "164 cm (JP)/5'3 (ENG)",
        weight: "42 kg (JP)/92 lbs (ENG)",
        birthday: "November 27",
        likes: "Walking",
        dislikes: "Boredom",
        ultimate: "Ultimate Musician"
    },
    "Kazuichi Soda": {
        desc: "Kazuichi is a carefree character, aptly described by Hajime as a 'confident, happy-go-lucky guy who gets a little carried away sometimes'. He is among the most notably excited students upon arriving at Jabberwock Island, so over the moon that he is willing to look past the strange situation they are in. Even after the school trip turned deadly, he refuses to give up his tropical paradise fantasy by enacting what the group was supposed to do, such as enjoying coconuts with friends and fantasizing about the group splashing the private beach together. He tends to brag and be self-serving, like showing up late to the rendezvous he arranged for him and Hajime unapologetically. He can act rather clingy and whiny, even threatening Hajime to bug him further if he refuses to come along as a plus one to his mischief.[39] Sometimes, he does things out of compassion, though it often comes with childish and shallow ulterior motives. For example, he builds a monitor to let his classmates use for a gaming session, while also earning bragging rights.",
        img: "/SD/Kazuichi_Soda_Illustration.webp",
        height: "172 cm (JP)/5'6 (ENG)",
        weight: "64 kg (JP)/141 lbs (ENG)",
        birthday: "June 29",
        likes: "Coke",
        dislikes: "Sugar-free anything",
        ultimate: "Ultimate Mechanic"
    },
    "Mahiru Koizumi": {
        desc: "A reliable and honest photographer who values friendship and responsibility.",
        img: "/SD/Mahiru_Koizumi_Illustration.webp",
        height: "165 cm (JP)/5'4 (ENG)",
        weight: "46 kg (JP)/101 lbs (ENG)",
        birthday: "April 24",
        likes: "Travelling Alone",
        dislikes: "Bad manners",
        ultimate: "Ultimate Photographer"
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
                <button  onClick={() => navigate("/")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit justify-end">
                            Home
                </button>
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