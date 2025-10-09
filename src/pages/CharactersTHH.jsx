import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const CharactersTHH = () => {
    const [character, setCharacter] = useState("")
    const navigate = useNavigate();

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
        desc: "Makoto proclaims himself to be a very ordinary person, to the point that he seems a little bit insecure about it. He does admit to having one distinguishing feature, that being his unique sense of optimism. Makoto is very kind, supportive and forgiving, though slightly naive at times. He is friendly, polite and a lot more down-to-earth compared to the other students. These qualities could be the reason he seems to successfully approach and befriend even his most antisocial classmates during Free Time.",
        img: "/THH/Makoto_Naegi_Illustration.webp",
        height: "161 cm (JP; DR3)/5'3 (ENG)",
        weight: "52 kg/115 lbs (ENG)",
        birthday: "February 5",
        likes: "Curry",
        dislikes: "Dried bean curd",
        ultimate: "Ultimate Lucky StudentS"
    },
    "Kyoko Kirigiri": {
        desc: "Kyoko is a stoic, intelligent, and mysterious girl who tends to hide her feelings. She has a calm demeanor and tends to be completely unfazed by most of the events that occur, even at the sight of a dead body. At the beginning of the game, Kyoko often keeps her distance from the other students while investigating. Prior to the investigation to find the way out with no casualties, Kyoko doesn't seem to cooperate with the other students and does most of the investigating by herself. She plays major roles in solving mysteries of the culprits in Class Trials and is also one of very few students that see things objectively and doesn't jump to conclusions in the trial, making her a valuable ally to Makoto.",
        img: "/THH/Kyoko_Kirigiri_Illustration.webp",
        height: "167 cm (JP)/5'6 (ENG)",
        weight: "48 kg (JP)/106 lbs (ENG)",
        birthday: "October 6",
        likes: "Hair braids",
        dislikes: "Goya",
        ultimate: "Ultimate Detective"
    },
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
    "Aoi Asahina": {
        desc: "Aoi is a warm, cheerful, upbeat, and outgoing girl who is friendly and welcoming towards everyone she meets, trying to make friends with everybody and include them in her activities. Aoi can be quite air-headed and forgetful, relying on the memory trick of writing people's names three times on her hand in order to remember them - a trick she also taught to her brother, Yuta. Due to being quite air-headed, she can be easily manipulated by others and jump to conclusions or take them at face value, often being one of the few to fall for killers' tricks and misdirection during Class Trials. Aoi is an extremely athletic person and considers it an absolutely fundamental part of herself, using it as an important coping mechanism in her daily life and feeling like she 'might die' if she can't exercise. Although Aoi is a star athlete in the running to become an Olympic swimmer, Aoi is insecure that being athletic, which is seen as quite a masculine activity, makes her undesirable to others and might lead to her never finding love.",
        img: "/THH/Aoi_Asahina_Illustration.webp",
        height: "160 cm/5'3 (ENG)",
        weight: "50 kg (JP)/110 lbs (ENG)",
        birthday: "April 24",
        likes: "Donuts",
        dislikes: "Calculating",
        ultimate: "Ultimate Swimming Pro"
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
    "Sakura Ogami": {
        desc: "Contrary to what her appearance might suggest, Sakura is a quiet, kind and level-headed girl. She rarely loses her nerve and seems able to maintain clarity in any situation. At times she can grow slightly annoyed and upset, like when people assume things like she isn't a good cook due to her looks. During more rare moments, she can lose her temper completely and become terrifying to those around her, particularly when her friends get hurt. She also gets impatient if she cannot properly train for a long period of time. She is known for her love of protein and protein coffee and enjoying exercising early in the morning before a large breakfast.",
        img: "/THH/Sakura_Ogami_Illustration.webp",
        height: "192 cm/6'4 (ENG)",
        weight: "99 kg (JP)/218 lbs (ENG)",
        birthday: "September 13",
        likes: "Protein",
        dislikes: "Modern Training Machinery",
        ultimate: "Ultimate Martial Artist"
    },
    "Sayaka Maizono": {
        desc: "Sayaka has a cheerful, sweet, lighthearted, and supporting personality, expressing a kind demeanor and pleasant disposition, although it is unknown if this is only because of her status as an idol. Sayaka develops a bond with Makoto Naegi, whom she considers her friend, assisting him on every occasion in Chapter 1. However, she tends to hide her feelings when she is under great pressure by putting on her public persona. She cares greatly for her band members, and would not hesitate to do something if anything were to happen to one of them, including things that could hurt others. When pushed to her limit, Sayaka will do anything to achieve the goals she sets out, however risky her actions may be.",
        img: "/THH/Sayaka_Maizono_Illustration.webp",
        height: "165 cm/5'5 (ENG)",
        weight: "49 kg (JP)/108 lbs (ENG)",
        birthday: "July 7",
        likes: "Strawberry cake",
        dislikes: "Unicycles",
        ultimate: "Ultimate Pop Sensation"
    },
    "Leon Kuwata": {
        desc: "Leon is a passionate, hot-blooded young teenager. He often slacked off from studying and baseball practice; however, his baseball skills were never diminished due to his status as Ultimate Baseball Star. In fact, he hated to practice, seeing no point or enjoyment in it because he was already so talented. Due to his natural physical talent, he considered even very difficult and unusual feats easy and had some trouble empathizing with people who lacked such talent, as he didn't fully realize how hard the bet he made with Kanon really was. Despite his talent, Leon claimed he strongly hated baseball and was very determined to change his current title to Ultimate Musician.",
        img: "/THH/Leon_Kuwata_Illustration.webp",
        height: "175 cm/5'9 (ENG)",
        weight: "67 kg (JP)/148 lbs (ENG)",
        birthday: "January 3",
        likes: "Sonic Cup-a-Noodle",
        dislikes: "None",
        ultimate: "Ultimate Baseball Star"
    },
    "Chihiro Fujisaki": {
        desc: "Chihiro is very intelligent, but he also has a very meek and timid personality. He is very shy and apologizes a lot - it's easy to intimidate him to the point of tears. However, he also loves to talk about anything related to his work as a programmer and he becomes more lively whenever the topic is brought up. Chihiro is one of the kindest and softest characters in Danganronpa, as he literally wouldn't hurt a mosquito because it's 'hungry and might have a family'. After Leon Kuwata's execution, he felt guilt-ridden, even though it wasn't his fault. When he was attempting to reason with Byakuya Togami in Chapter 2, he revealed a deep disdain for disputes occurring between friends.",
        img: "/THH/Chihiro_Fujisaki_Illustration.webp",
        height: "148 cm/4'10 (ENG)",
        weight: "41 kg (JP)/90 lbs (ENG)",
        birthday: "March 14",
        likes: "Silicon",
        dislikes: "Selenium",
        ultimate: "Ultimate Progammer"
    },
    "Mondo Owada": {
        desc: "Behaving like a stereotypical delinquent, Mondo is foul-mouthed and can come off as a rude and intimidating individual. When Makoto first met Mondo he did his best to keep the conversation short, as he realized Mondo could become easily aggravated depending on what was said. He is very easy to provoke, and will not hesitate to resort to violence if he starts to lose his patience. This is shown during his interactions with Byakuya who acts condescendingly towards him, prompting Mondo to fight back without considering the consequences. Just like Chihiro, Mondo has a severe complex about being seen as weak, which he represses by constantly repeating in his mind that he is strong. This complex stems from the fact that his gang members tended to look down on him due to his status as the little brother of Daiya, the first leader of The Crazy Diamonds.",
        img: "/THH/Mondo_Owada_Illustration.webp",
        height: "187 cm/6'2 (ENG)",
        weight: "76 kg (JP)/168 lbs (ENG)",
        birthday: "June 9",
        likes: "Luxurious Cushions",
        dislikes: "Rumors",
        ultimate: "Ultimate Biker Gang Leader"
    },
    "Kiyotaka Ishimaru": {
        desc: "Befitting of the Ultimate Moral Compass, Kiyotaka is righteous and values order and rules above all else. He takes his role as a student very seriously, shown when he gets upset that there are currently no classes going on during the Killing School Life. He also states he has 10 sets of his uniform so he never runs out and so he is able to wear one every day of the year, even on holidays or days off from school. He is shown to be very polite and respectful, as in original Japanese release, he addresses people, even girls with '-kun' honorifics. Because of his grandfather's tragedy, he considers effort most important and he is a hard worker, believing that one can achieve anything through it. He views his grandfather with bitterness, but also pity, as considers genius's fate a tragedy and he considers geniuses his enemies because they don't understand the true value of effort.",
        img: "/THH/Kiyotaka_Ishimaru_Illustration.webp",
        height: "176 cm/5'9 (ENG)",
        weight: "66 kg (JP)/146 lbs (ENG)",
        birthday: "August 31",
        likes: "Discipline",
        dislikes: "Breaking the rules",
        ultimate: "Ultimate Moral Compass"
    },
    "Celestia Ludenberg": {
        desc: "As an experienced gambler, Celestia appears collected, cold, and cunning by nature. She possesses the ability to manipulate others to do her bidding and can lie with a perfectly straight face, this is shown when she is able to manipulate Hifumi to make her royal milk tea and further be her accomplice during Chapter 3. She is shown to be fairly intelligent, referencing several aspects of game theory such as Prisoner's Dilemma or Zero-Sum Game, and her manipulative and coercion skills are shown in Chapter 3, being able to deceive the majority of the students, including Byakuya up until the class trial. Her intelligence is also shown in previous cases in which she, alongside Kyoko, Byakuya, and Makoto, are the ones to bring up crucial points and is also capable of keeping up with Byakuya and Kyoko's train of thought during the trials as well.",
        img: "/THH/Celestia_Ludenberg_Illustration.webp",
        height: "164 cm/5'5 (ENG)",
        weight: "46 kg (JP)/101 lbs (ENG)",
        birthday: "November 23",
        likes: "Money",
        dislikes: "Ordinary life",
        ultimate: "Ultimate Gambler"
    },
    "Hifumi Yamada": {
        desc: "Hifumi has a verbose manner of speaking, often going on long-winded tangents about his interests such as anime or fanfiction. He also has a tendency to casually make creepy or perverted comments in the middle of conversations, especially about or to women. He can also be oblivious to how others perceive him, as shown when Toko says he smells like a 'big fat ugly donkey' — he couldn't tell if that was an insult or a compliment. However, he also displays some intelligence, such as when he figures out one piece of Sayaka's dying message in the first trial. He also has late reactions to shocking events, as shown when Leon tries to pin the murder of Sayaka Maizono on him, and then again when Chihiro Fujisaki's true gender was exposed. He reacted calmly and interested at first, but then freaked out when he fully processed the situation.",
        img: "/THH/Hifumi_Yamada_Illustration.webp",
        height: "170 cm/5'7 (ENG)",
        weight: "155 kg (JP)/342 lbs (ENG)",
        birthday: "December 31",
        likes: "Prismatic Hardtack",
        dislikes: "None",
        ultimate: "Ultimate Fanfic Creator"
    },
    "Yasuhiro Hagakure": {
        desc: "Yasuhiro is one of the more cheery, laid-back students, though a bit odd as well. However, he is generally not well-liked and he himself has openly admitted that he has no friends, being quite cowardly, lazy, slow-witted, and having a habit to act selfishly. Notably, he is mentioned to be very clumsy with money and he has constant problems with massive debts. This trait is especially apparent when he stated that he bought his crystal ball (which is made of glass instead of crystal) at the price of 100 million yen due to it being used by Napoleon, Genghis Khan, and George Washington in the past. He has also bought multiple items related to fortune-telling, despite not actually having any use for them. He tends to talk absurdly about subjects such as conspiracy theories and the one time aliens stole his hamburger. However, he really hates it if someone compares his fortune-telling to the occult, frequently insisting that they are not the same. He is also afraid of ghosts and would freak out if such a subject comes up in a conversation.",
        img: "/THH/Yasuhiro_Hagakure_Illustration.webp",
        height: "180 cm/6'0 (ENG)",
        weight: "71 kg (JP)/157 lbs (ENG)",
        birthday: "July 25",
        likes: "Money",
        dislikes: "Hidden Cameras",
        ultimate: "Ultimate Clairvoyant"
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
        desc: "Mukuro has a cold, serious expression and a reserved personality. She is completely indifferent towards other people unless it's her sister Junko. Unlike her sister, she doesn't take any sadistic pleasure in hurting or killing people, but at the same time, she shows little concern for other people's suffering, regarding them more as tools such as when she was surprised Junko made all of the brainwashed Reserve Course students commit suicide despite how useful they could have been. She is mentioned in Danganronpa: Trigger Happy Havoc IF to have never held much interest in the world outside of Junko before her time at Hope's Peak Academy, and is perhaps the only Ultimate Despair member who is not obsessed with either hope or despair.",
        img: "/THH/Mukuro_Ikusaba_Illustration.webp",
        height: "169 cm/5'7 (ENG)",
        weight: "44 kg (JP)/97 lbs (ENG)",
        birthday: "December 24",
        likes: "Army knives",
        dislikes: "Make-up",
        ultimate: "Ultimate Soldier"
    }
}


    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
                <button  onClick={() => navigate("/")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit ml-auto">
                            Home
                </button>
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

                <div className="flex flex-row bg-pink-200 rounded-lg p-6 w-full h-auto items-start gap-8">
                    {character && (
                        <>
                        <div className="flex-shrink-0">
                            <img src={info[character]?.img} alt={character} className="h-[360px] w-auto rounded-xl object-cover"/>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-3">{character}</h2>

                            <p><b>Height:</b> {info[character]?.height}</p>
                            <p><b>Weight:</b> {info[character]?.weight}</p>
                            <p><b>Birthday:</b> {info[character]?.birthday}</p>
                            <p><b>Likes:</b> {info[character]?.likes}</p>
                            <p><b>Dislikes:</b> {info[character]?.dislikes}</p>
                            <p><b>Ultimate:</b> {info[character]?.ultimate}</p>

                            <div className="mt-4 text-justify leading-relaxed">
                            <p>{info[character]?.desc}</p>
                            </div>
                        </div>
                        </>
                    )}
                    </div>
            </div>
        </div>
    )
}
