import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CharactersUDG = () => {
    const [character, setCharacter] = useState();
    const navigate = useNavigate();

    const info = {
        "Byakuya Togami": {
            desc: "Byakuya is a cold and self-centered person who is very reserved. He is not interested in co-operating with others due to his own sense of self-superiority, and his opinion that others are, on the whole, lesser than him. This sense of superiority and black-and-white worldview comes as a result of his upbringing; Byakuya had to prove his worth in battle against his siblings in order to earn his role in the family as heir-apparent, whereas all his other siblings who lost the battle were effectively ex-communicated from the family and cut off financially, deemed 'unfit for the name of Togami'. Because Byakuya was raised in such a highly competitive environment of 'haves' and 'have-nots', he thinks all people only think about themselves and he dismisses emotional ties as petty and unimportant.",
            img: "/UDG/Byakuya_Togami_Illustration.webp",
            height: "185 cm (JP)/6'1 (ENG)",
            weight: "68 kg (JP)/150 lbs (ENG)",
            birthday: "May 5",
            likes: "Coffee",
            dislikes: "Microwave meals",
            ultimate: "Ultimate Affluent Progeny"
        },
        "Haiji Towa": {
            desc: "Haiji is deliberate and calculating, although others might call him cowardly. He is very paranoid about the Resistance's hideout, not allowing anyone to leave the place. He claims he isn't hiding, but simply waiting for the right opportunity, although he later admits that he was just being a coward and states that he probably isn't a very good leader. He is rather serious, the one time he tries to joke around being an awkward and tone-deaf joke about Nagisa's trauma a moment after the child's supposed death. It's also implied that he was an abusive older brother towards his half-sister.",
            img: "/UDG/Haiji_Towa_Illustration.webp",
            height: "188 cm (JP)/6'2 (ENG)",
            weight: "72 kg (JP)/159 lbs (ENG)",
            birthday: " August 9",
            likes: "Young girls",
            dislikes: "Old girls",
            ultimate: "None"
        },
        "Hiroko Hagakure": {
            desc: "Hiroko is a street smart, relaxed and open-minded lady with a 'you do your thing, and I'll do mine- live and let live' personality. Hiroko has high regard for human lives. Cruelty and killing, especially senseless killing, makes her absolutely furious; enough that unlike the other members, she doesn't blame any of the chaos and the killings on the children. She convinces men to act as her envoys and venture out to rescue survivors on her orders through her 'womans special charm'.",
            img: "/UDG/Hiroko_Hagakure_Illustration.webp",
            height: "171 cm (JP)/5'6 (ENG)",
            weight: "52 kg (JP)/115 lbs (ENG)",
            birthday: "July 5",
            likes: "Cigarretes",
            dislikes: "Mother in Law",
            ultimate: "None"
        },
        "Jataro Kemuri": {
            desc: "Jataro has an incredible talent for anything seen as creative, such as drawing, painting and sculpting. He is also shown to be quiet, shy and scatter-brained. The official artbook describes him as 'curious, crafty, and fascinated by dark and disturbing things'. Jataro is acknowledged by both himself and those around him for being hated, and he seems content with that fact. He has a tendency to blame himself for things that have nothing to do with him, as well as repeatedly apologizing and putting himself down. He believes that his face is horribly ugly and he panics if anyone wants to see it, claiming that seeing his face would make people's eyeballs explode.",
            img: "/UDG/Jataro_Kemuri_Illustration.webp",
            height: "130 cm (JP)/4'3 (ENG)",
            weight: "30 kg (JP)/66 lbs (ENG)",
            birthday: "February 29",
            likes: "Being hatred",
            dislikes: "Being liked",
            ultimate: "Li'l Ultimate Art/Priest of Warriors of Hope"
        },
        "Komaru Naegi": {
            desc: "Komaru wavers between hope and despair as a result of her forced imprisonment. She doesn't want to have strong hope, because she believes it will be lost eventually, leading to worse despair. She has low self-esteem, considering herself boring, ordinary and weak. While she finds escaping hard and fighting even harder, she is willing to fight off hordes of Monokuma Unit robots as she tries to survive the world's current catastrophe and find her missing family. Komaru shows some childish traits, such as being naive, reliant, and easily excitable. She also has an 'unusual' kind of pride, as she gets really worked up from the puzzles of the Monokuma Kids and brags towards the kids when she solves them. She is also very gullible, which is revealed when Toko says certain things that are obviously false, and Komaru easily believes them to be true. She is rather innocent as well and doesn't seem to have much interest in romance nor sexual thingsーas a great contrast to Toko, she never seems to get flustered by handsome guys and just treats them like any other people.",
            img: "/UDG/Komaru_Naegi_Illustration.webp",
            height: "163 cm (JP)/5'4 (ENG)",
            weight: "49 kg (JP)/108 lbs (ENG)",
            birthday: "May 31",
            likes: "Girl's manga",
            dislikes: "Lightning",
            ultimate: "Ultimate Little Sister of Hope"
        },
        "Kotoko Utsugi": {
            desc: "Kotoko is a hot-headed girl who loves 'adorbs' things. She collects them and seems even slightly obsessed with the concept. Kotoko also has an odd speech pattern as she often starts to list off-topic facts she finds interesting in the middle of conversation. Sometimes they're vaguely related to the topic (for example, if the topic is too long speeches, she starts to talk about how things like elephant's nose and giraffe necks are also too long). Even still, her speech is clear and focused, unlike in the case of Jataro Kemuri. Kotoko acts cheerful, polite and happy. However, she is mentioned to have a bullying nature and she can be very mean and cruel. She is very mean to Jataro, even more than the others are, and she likes to tease Nagisa Shingetsu. However, she constantly tries to stay on Monaca's good side and praises her a lot.",
            img: "/UDG/Kotoko_Utsugi_Illustration.webp",
            height: "134 cm (JP)/4'5 (ENG)",
            weight: "29 kg (JP)/64 lbs (ENG)",
            birthday: "June 13",
            likes: "Peeled chestnuts",
            dislikes: "Unpeeled chestnuts",
            ultimate: "Li'l Ultimate Drama/Fighter of Warriors of Hope"
        },
        "Kurokuma": {
            desc: "Kurokuma has a gangster-like, obscene personality. He swears often and has an impatient, immature nature. He is very immoral and has a rather dark, vulgar sense of humor. Some of his jokes are references and more clever, while others are simply immature or just bizarre. He is also very brash and disrespectful, even towards people he just met. He isn't above cheap insults or provoking. He appears to enjoy annoying Nagisa Shingetsu the most, most likely because of the boy's strict personality. He makes fun of the Servant by implying that he's homosexual in a mocking fashion and he calls Toko Fukawa 'emo chick' and insults her for having glasses. He is also quite perverted and disrespectful towards pretty girls. ",
            img: "/UDG/Kurokuma_Illustration.webp",
            height: "100 cm (JP)/3'3 (ENG)",
            weight: "None",
            birthday: "NOne",
            likes: "Good things",
            dislikes: "Shit rhyme",
            ultimate: "Warriors of Hope's Advisor"
        },
        "Makoto Naegi": {
            desc: "Makoto proclaims himself to be a very ordinary person, to the point that he seems a little bit insecure about it. He does admit to having one distinguishing feature, that being his unique sense of optimism. Makoto is very kind, supportive and forgiving, though slightly naive at times. He is friendly, polite and a lot more down-to-earth compared to the other students. These qualities could be the reason he seems to successfully approach and befriend even his most antisocial classmates during Free Time.",
            img: "/UDG/Makoto_Naegi_Illustration.webp",
            height: "161 cm (JP; DR3)/5'3 (ENG)",
            weight: "52 kg/115 lbs (ENG)",
            birthday: "February 5",
            likes: "Curry",
            dislikes: "Dried bean curd",
            ultimate: "Ultimate Lucky Students"
        },
        "Masaru Daimon": {
            desc: "Masaru is a cheerful, hot-headed showoff and seems to be the one who has a more goofy outlook on life. He is extremely energetic and constantly brags about his role as the Hero and leader of the Warriors of Hope, despite the circumstances of how he became 'leader' (by winning in Rock, Paper, Scissors). He loves praise and fame. He refers to himself using orecchi, a form of the Japanese pronoun ore, which can be rude depending on its context but is often used when a speaker wants to assert a feeling of superiority. He also calls himself 'Lord Masaru Daimon'.",
            img: "/UDG/Masaru_Daimon_Illustration.webp",
            height: "131 cm (JP)/4'3 (ENG)",
            weight: "35 kg (JP)/77 lbs (ENG)",
            birthday: "May 7",
            likes: "Soccer",
            dislikes: "Cigarettes",
            ultimate: "Li'l Ultimate P.E./Leader of Warriors of Hope"
        },
        "Monaca Towa": {
            desc: "Monaca is seemingly very amiable and caring. She appears very cheerful and has a childish way of talking, sometimes meowing and almost exclusively referring to herself in the third person. Because of her charming personality, all of the Warriors love her and try their best to keep her happy and go along with what she wants. However, it's slowly revealed that she is actually manipulative and cunning behind her friendly facade. Her 'true' personality resembles that of Junko's. She is also mentioned to be very intelligent for her age and very skilled with robots. When things are not going her way, Monaca will manipulate the situation by any means necessary, such as throwing fits or causing the Warriors to turn on each other. She ultimately has very little regard for their well-being, knowingly using their traumatic pasts against them and not feeling any sympathy nor sorrow for them nor anyone else.",
            img: "/UDG/Monaca_Towa_Illustration.webp",
            height: "134 cm (JP)/4'4 (ENG)",
            weight: "28 kg (JP)/62 lbs (ENG)",
            birthday: "April 1",
            likes: "Free period",
            dislikes: "Alone times",
            ultimate: "Li'l Ultimate Homeroom/True Leader of the Warriors of Hope"
        },
        "Nagisa Shingetsu": {
            desc: "Nagisa is the most serious member of the Warriors. He is calm, intelligent and level-headed. Because of this, he considers himself the babysitter of the other Warriors, often acting as the voice of reason and calming the others down when needed. He has an aversion to things he considers childish and, though he refers to himself as a child, doesn't like to be underestimated on the basis of age. He is a perfectionist and suffers from a fear of abandonment as a result of his traumatic childhood. His prime goal in life has always been to exceed the expectations of the people around him in order to prove worth to both his parents and himself. As a result, placing any sort of expectations on him is somewhat of a 'trigger'. It propels him to try his best to exceed those expectations set for him, even at the expense of his own well-being and overall health. He is loyal, humble, compassionate and protective of his friends and fellow children. Despite the cruel nature of his abusive home life, he often downplays it as 'not as bad' as that of his fellow Warriors, putting more emphasis on their struggles than his own.",
            img: "/UDG/Nagisa_Shingetsu_Illustration.webp",
            height: "137 cm (JP)/4'6 (ENG)",
            weight: "33 kg (JP)/73 lbs (ENG)",
            birthday: "October 23",
            likes: "Dictionaries",
            dislikes: "Needles",
            ultimate: "Li'l Ultimate Social Studies/'Leader' of the Warriors of Hope"
        },
        "Nagito Komaeda": {
            desc: "Nagito has a laid-back and quite calm demeanor, and he is often smiling or laughing. However, his cheerfulness may not be entirely genuine, as his calmness is more akin to apathy and he tends to feel strong self-hatred. He remains cheerful even during his self-loathing rambling, and acts disturbingly optimistically toward horrible things such as death, as long as it's for the sake of hope. Nagito likely suppresses any real feelings of sorrow or fear as a coping mechanism, because he experiences tragedy often due to his luck. He has also seen very unlikely and strange things due to his luck, which is why he is not easily surprised. As a result of everything he's been through, he has become more emotionally numb and he is rarely openly angry or scared. He often lacks appropriate emotions in situations where most people would be afraid, like threats of violence. Even so, he once mentioned that he feels fear every day of his life, most likely because of his luck. Furthermore, he can be very angered by despair and other things he considers insulting toward hope.",
            img: "/UDG/Nagito_Komaeda_Illustration.webp",
            height: "180 cm (JP)/5'9 (ENG)",
            weight: "65 kg (JP)/143 lbs (ENG)",
            birthday: "April 28",
            likes: "Pretty/beautiful things",
            dislikes: "Noisy places",
            ultimate: "Ultimate Lucky Student/The Servant"
        },
        "Shirokuma": {
            desc: "Shirokuma is a pacifist and he thinks that adults and kids should live together in harmony. He is very considerate and has a friendly aura surrounding himーhe can even say things very similar to Usami such as 'violence is a big no-no'. He wants to have the power to protect others, but he feels he isn't strong enough. He is a bit shy and all kind of fighting and mean words make him distressed. However, he can be surprisingly forceful at times. He claims to have a good eye for judging character, as well as the ability to tell the date and time of someone's first kiss just by looking at them, among other things. He also considers the abilities and limitations of his allies, taking breaks despite technically not needing to (being a machine) in order to give Komaru time to rest and regain herself.",
            img: "/UDG/Shirokuma_Illustration.webp",
            height: "100 cm (JP)/3'3 (ENG)",
            weight: "None",
            birthday: "None",
            likes: "World peace",
            dislikes: "Fighting",
            ultimate: "Idol of the Adults"
        },
        "Toko Fukawa": {
            desc: "Toko is intellectually gifted, yet she has problems in social behavior. It's been stated that she either never learned or never bothered to learn social skills. She even considers herself a 'gloomy outcast', often deciding to distance herself from others. Due to the constant bullying she faced as a child, Toko is highly suspicious of other people, frequently accusing them of thinking bad things about her. She expresses her opinions freely and extremely, which can come across as mean and often rubs people the wrong way, though she claims she is just being honest. She has an unusually quick tendency to self-victimize and she refuses to believe compliments from other people. She also is very self-conscious about her body and tends to think that other people consider her ugly.",
            img: "/THH/Toko_Fukawa_Illustration.webp",
            height: "164 cm/5'4 (ENG)",
            weight: "47 kg (JP)/104 lbs (ENG)",
            birthday: "March 3",
            likes: "Romance novels",
            dislikes: "Manga",
            ultimate: "Ultimate Writing Prodigy"
        },

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
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-110 h-110 justify-between">
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
                            <img src={info[character]?.img}  alt={character} className="w-105 h-auto rounded-lg mb-4 justify-start" />
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