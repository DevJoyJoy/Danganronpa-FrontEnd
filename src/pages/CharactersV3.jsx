import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CharactersV3 = () => {
    const [character, setCharacter] = useState();
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
        "Angie Yonaga": {
            desc: "Angie is very spiritual, believing Atua is always at her side. She has a pious heart, has firm faith in her god, and is very willing to help and assist other people with spiritual matters. Angie often searches for things to offer as blood sacrifices, somewhat creepily talks about her need for blood, and asks other students to provide her with some. She also has a habit of speaking on behalf of Atua, and, strangely, these words can sometimes turn out to be very truthful. As another eccentric habit, she freely uses her own original Japanese, like 'Bye-yonara' or 'strange miracle', which shows a little bit of her artistic side. She also calls everyone by their first names in the Japanese version, which is considered eccentric since Japanese acquaintances typically refer to each other with their last names instead of their first names. However, in Angie's case, this seems to be because she's not a Japan-native.",
            img: "/V3/Angie_Yonaga_Illustration.webp",
            height: "157 cm (JP)/5'1 (ENG)",
            weight: "41 kg (JP)/90 lbs (ENG)",
            birthday: "April 18",
            likes: "Avocados",
            dislikes: "Humidity",
            ultimate: "Ultimate Artist"
        },
        "Gonta Gokuhara": {
            desc: "Gonta likes animals very much, especially insects, and he can even speak with them. He is a kind-hearted, gentle, and polite person. He is very pure and naive, as he easily believes strangers and can get easily discouraged by other people's comments. When he is accused of being the culprit, he answers with complete honesty even if it makes him look much more suspicious. He also does not seem to understand sexual matters very well, as after seeing a half-naked Miu he states he got a 'weird feelin', and he assumes being 'horny' means something like having horns on your head. Even his uncharacteristic 'keep you up all night' line during the Love Suite scene appears to be a case of misinformation. He himself acknowledges and often points out that he is dumb, which is one of the reasons why he listens to other people so much. Naturally, he strongly dislikes killing and cruelty, which can rather easily make him cry. However, despite his gentle nature, he can turn very angry if he sees or hears someone hating on insects, and he believes bug lovers can't be bad. Due to his strong love for bugs, he is often seen searching and yelling for them to come out, claiming that he wants to talk with them.",
            img: "/V3/Gonta_Gokuhara_Illustration.webp",
            height: "198 cm (JP)/6'6 (ENG)",
            weight: "94 kg (JP)/207 lbs (ENG)",
            birthday: "January 23",
            likes: "Arthropods",
            dislikes: "Bananas",
            ultimate: "Ultimate Entomologist"
        },
        "Himiko Yumeno": {
            desc: "Regarding her talent, thanks to her master's teachings, Himiko truly considers and believes her parlor tricks to be real magic. This is why she prefers to be called a mage instead of a magician. However, she is only seen doing rather ordinary things like hand techniques and making doves appear. She gets annoyed if people tell her magic isn't real, causing her to repeat that it is over and over again. During various situations, she tends to claim that she could use her magic to fix the problem, but she says she doesn't have enough MP. She also tends to take the credit in multiple situations, claiming it all happened thanks to her magic. Fitting her mage theme, she also uses a very notable outdated way of speaking, though this is not included in the English version. While all of this can make her appear self-centered, she has actually explained that one of the biggest reasons why she likes being a 'mage' is to make her audience happy and smile, especially children.",
            img: "/V3/Himiko_Yumeno_Illustration.webp",
            height: "150 cm (JP)/4'11 (ENG)",
            weight: "39 kg (JP)/86 lbs (ENG)",
            birthday: "January 23",
            likes: "Small places",
            dislikes: "The ocean",
            ultimate: "Ultimate Mage"
        },
        "K1-B0 (Keebo)": {
            desc: "K1-B0 is a polite and serious teenage robot, who has some trouble with human social interaction, and often comes across as unintentionally comical as a result. According to Kazutaka Kodaka, K1-B0 has both cute and cool characteristics, with him being socially awkward but serious.[8] Nevertheless, K1-B0 takes pride in his form and often boasts about his wonderfulness and efficient functions, even though the other students never seem to find them impressive, much to his disappointment. His aim is to overcome being an ordinary robot and because of this, he may get offended if he is compared to much more simple machines. While generally well-mannered, he is quickly angered by any prejudice against robots and sometimes threatens to sue people who make 'discriminatory remarks'. He considers robots a minority group among humans and can get slightly paranoid about 'robophobia', supposedly because of past experiences. However, ironically, he himself is shown acting condescending and perpetrating 'robot-on-robot abuse' towards simpler machines such as the robots with Monokuma's likeness, considering them mere stuffed animals who are beneath him.",
            img: "/V3/K1-B0_Illustration.webp",
            height: "160 cm (JP)/5'3 (ENG)",
            weight: "89 kg (JP)/196 lbs (ENG)",
            birthday: "October 29",
            likes: "100-240 volts",
            dislikes: "Vending Machines",
            ultimate: "Ultimate Robot"
        },
        "Kaede Akamatsu": {
            desc: "Kaede is an optimistic hard worker. As a leader type with a firm character, she has a strong will and doesn't hesitate to take action, with her most notable character trait being her strong sense of belief in herself and others. Her main motivation for playing the piano is to see others smiling. Kaede has a kind personality that makes her think about others before herself. Because of this, she is unable to immediately suspect people, as demonstrated in the demo by her going as far as faking an alibi out of her trust for Makoto, with no rational basis for his innocence. She is willing to lie for good reasons, but appears uncomfortable while doing so and is quite bad at lying. Like the other protagonists before her, she has a very sensitive nature and listens to other people's troubles.",
            img: "/V3/Kaede_Akamatsu_Illustration.webp",
            height: "167 cm (JP)/5'8 (ENG)",
            weight: "53 kg (JP)/117 lbs (ENG)",
            birthday: "March 26",
            likes: "Piano keys",
            dislikes: "Bicycles",
            ultimate: "Ultimate Pianist"
        },
        "Kaito Momota": {
            desc: "Kaito is an energetic person with a passionate heart, who lives for dreams and romance, and tends to give somewhat dramatic encouraging speeches for others. He believes you need to take risks for the sake of your dreams and shouldn't limit yourself nor ever give up. Due to his clichéd hot-blooded spirit and his document falsification he could pass the astronaut examination, proving that he is smart. Being the Ultimate Astronaut, he harbors a dream and a great longing to go to space, and already considers himself a space legend. He often refers to himself as 'The Luminary of the Stars' and talks about the Universe being on his side. Furthermore, he talks about being popular with women and children, and he thinks that his goatee gives him a 'glamorous celebrity vibe'.",
            img: "/V3/Kaito_Momota_Illustration.webp",
            height: "184 cm (JP)/6'0 (ENG)",
            weight: "74 kg (JP)/163 lbs (ENG)",
            birthday: "April 12",
            likes: "House plants",
            dislikes: "The occult",
            ultimate: "Ultimate Astronault"
        },
        "Kirumi Tojo": {
            desc: "Kirumi is a refined, mature young lady who is described as 'a professional who does a perfect job'. She has a keen mind and she is talented in various ways, reportedly able to carry out any job, as well as being capable of independence and doing things on her own. She is polite and formal, as well as quite serious, and very willing to use all of her power to cooperate with the other students. She is intelligent, observant, and level-headed. Her intelligence can be shown when she is speculating. Her speculations are provided with a fact and thus they are quite hard to refute—for example, when she accused Gonta of being the culprit of Rantaro's murder case everyone believed her until Kaede objected it with a solid evidence.",
            img: "/V3/Kirumi_Tojo_Illustration.webp",
            height: "176 cm (JP)/5'9 (ENG)",
            weight: "52 kg (JP)/115 lbs (ENG)",
            birthday: " May 10",
            likes: "Cleaning",
            dislikes: "Taking days off",
            ultimate: "Ultimate Maid"
        },
        "Kokichi Ouma": {
            desc: "Kokichi describes himself as an evil supreme leader, and often claims that this title is the reason behind many of his questionable actions as if he is expected to fulfill his role. He is an elusive and manipulative person who unabashedly tells lies and says whatever he's thinking. He is also strangely straightforward about his supposed evil nature, openly claiming to be a leader of a large secret society, admitting to being a liar, and saying he has done nothing but bad things. Among other things, his organization supposedly has covert agents in every country, control over all the mafias in the world, torture as a form of punishment, and Kokichi's defeated opponents apparently will get sent to Siberia. However, none of his claims have been confirmed, and the other students think he's either lying or delusional.",
            img: "/V3/Kokichi_Ouma_Illustration.webp",
            height: "156 cm (JP)/5'1 (ENG)",
            weight: "44 kg (JP)/97 lbs (ENG)",
            birthday: "June 21",
            likes: "Carbonated drinks",
            dislikes: "Pig feet",
            ultimate: "Ultimate Leader"
        },
        "Korekiyo Shinguji": {
            desc: "Korekiyo is aloof and somewhat disturbing, but he is also very cool-headed and intelligent. Having met a wide variety of human beings during his experience in cultural anthropology fieldwork, he can keep himself composed even under confinement circumstances and believes in facing things with a calm and rational approach rather than an emotional one. He tends to stay calmer than the others during dire situations. As for him, it's an opportunity to observe. However, even his spirit begins to break during the Death Road of Despair, and he becomes panicky during Gonta's Insect Meet and Greet. His morals have been described as being 'a bit off'. At one point, he even openly states he has no problem with killing and wonders why the others do, saying that killing is perceived as wrong only because of laws made by humans and such laws do not exist in the Killing Game. He is aware that his appearance and behavior cause him to come across as a potential murderer, but he does not appear to care what other people think of him. He claims the others shouldn't fear him as a potential murderer, as he merely wishes to observe.",
            img: "/V3/Korekiyo_Shinguji_Illustration.webp",
            height: "188 cm (JP)/6'2 (ENG)",
            weight: "65 kg (JP)/143 lbs (ENG)",
            birthday: "July 31",
            likes: "Straw ropes",
            dislikes: "Air conditioning",
            ultimate: "Ultimate Antropologist"
        },
        "Maki Harukawa": {
            desc: "Despite her cute appearance, Maki is described as a hostile misanthrope of few words. She is very aware that she comes across as unfriendly and prefers to be alone. In general, she dislikes people and thus she is not very cooperative and can be stubborn. She talks very little, so when she does, she states things clearly and she appears to be very confident about her arguments. She is cynical and negative with a sharp tongue and sometimes talks in a cold sarcastic manner. While not the type to assertively act on her own, she is stated to have guts and willing to take action when it suits her. She has no problem blaming Kaede coldly and rudely multiple times. She was also shown to be very openly irritated by people who believe in the supernatural, such as Kaito's fear of ghosts and Korekiyo's seances. She bluntly told Korekiyo that she finds his beliefs stupid right to his face.",
            img: "/V3/Maki_Harukawa_Illustration.webp",
            height: "162 cm (JP)/5'4 (ENG)",
            weight: "44 kg (JP)/97 lbs (ENG)",
            birthday: "February 2",
            likes: "Morning lake shores",
            dislikes: "Winter Lake shores",
            ultimate: "Ultimate Child Caregiver"
        },
        "Miu Iruma": {
            desc: "Miu is described as an oddball, having an overly confident, loud personality and a frighteningly sharp tongue. She considers herself a beautiful genius, and every time she opens her mouth she spews a parade of reckless vulgar remarks and insults, strongly putting pressure on others and looking down on them. However, Miu's arrogant personality seems to be a mask that can drop fairly easily. This often happens when her festival of coarse language and dirty jokes actually get replied to (usually, with the person snapping back) or ignored. Then, her personality quickly changes into a timid coward, who is terrified of other people being angry with her. Because of this, she has a charm similar to an innocent child.",
            img: "/V3/Miu_Iruma_Illustration.webp",
            height: "173 cm (JP)/5'8 (ENG)",
            weight: "56 kg (JP)/123 lbs (ENG)",
            birthday: "November 16",
            likes: "Children's television",
            dislikes: "Taking things easy",
            ultimate: "Ultimate Inventor"
        },
        "Rantaro Amami": {
            desc: "When he was first introduced, Rantaro seemed like a mysterious individual. Later it could be seen that he is a carefree and relaxed person. Despite his mysteriousness, he is described as one of the more ordinary students, with he himself stating that he can sometimes get a bit overwhelmed by the others' stranger personalities. Nevertheless, he is shown to have more patience than others with some eccentric students like Kokichi Oma and Miu Iruma, having a tendency to just laugh off some of the potentially hurtful things they say. Even though Rantaro cannot remember his talent, he doesn't seem worried about it. Instead, he simply says he looks forward to finding out what it is. He is usually seen smiling and describes himself as 'not a suspicious guy'. He gives off a really calm and composed vibe, making him seem like a pretty reliable person.",
            img: "/V3/Rantaro_Amami_Illustration.webp",
            height: "179 cm (JP)/5'10 (ENG)",
            weight: "62 kg (JP)/137 lbs (ENG)",
            birthday: "October 3",
            likes: "Extraterritorial rights",
            dislikes: "Cars",
            ultimate: "Ultimate ???"
        },
        "Ryoma Hoshi": {
            desc: "Ryoma is a hard-boiled dandy character.[9] Though he looks like a child, it's been said that his life experience would put an adult to shame. He has a coolness that typical high school students don't have, heightened by his very deep, mature voice. He is the calmest, most composed, and unperturbed person in the Killing Game. He isn't shaken by murders, nor even if he is personally harmed. He often mentions how he refuses to do something 'uncool' and doesn't want to show his softer side. He also speaks with a lot of unique idioms and hyperboles such as 'cool your jets', 'break out the confetti' and 'plead the fifth'.",
            img: "/V3/Ryoma_Hoshi_Illustration.webp",
            height: "105 cm (JP)/3'5 (ENG)",
            weight: "40 kg (JP)/88 lbs (ENG)",
            birthday: "July 1",
            likes: "Russian blues",
            dislikes: "Whitetip reef sharks",
            ultimate: "Ultimate Tennis Pro"
        },
        "Shuichi Saihara": {
            desc: "Shuichi appears to have quite a serious and polite personality. He often has negative remarks, frequently blushes and suffers from a cold sweat. With his unsure demeanor, he has a tendency to assume that other people can do things better than him, and he comes across as quite unreliable at first glance. Among the sixteen students, he is a boy who stands out for his submissiveness but also for his level-headedness. However, Shuichi can also have a stronger attitude at times when the situation calls for it. He is the first to immediately suggest going after the mastermind during chapter 1 and goes to great lengths to trap them, showing an affinity towards proactivity. His hat is an especially sore subject for him and he dislikes to look at other people's eyes, which is why he wears the hat. ",
            img: "/V3/Shuichi_Saihara_Illustration.webp",
            height: "171 cm (JP)/5'7 (ENG)",
            weight: "58 kg (JP)/128 lbs (ENG)[",
            birthday: "September 7",
            likes: "Novels",
            dislikes: "Gossip",
            ultimate: "Ultimate Detective"
        },
        "Tenko Chabashira": {
            desc: "Tenko is a boisterous and generally cheerful person. She wears her emotions on her sleeve and has the habit of yelling out in a loud voice to show her fighting spirit. She suffers from overactivity and anger issues and directs her energy into her Neo Aikido. Even still, she claims she is much calmer compared to her childhood. She has also described herself as 'not very good at thinking' and appears quite gullible and impulsive, using her emotions over logic. She refers to herself in the third person in the Japanese version. As a Neo Aikido practitioner, Tenko takes pride in facing the opponent from the front, and she courageously tries to confront the Exisals. Indeed, despite being an Aikido practitioner, Tenko can be very aggressive and quickly resorts to violence, insisting it is self-defense. She takes pride in inventing Neo Aikido with her master.",
            img: "/V3/Tenko_Chabashira_Illustration.webp",
            height: "165 cm (JP)/5'5 (ENG)",
            weight: "52 kg (JP)/115 lbs (ENG)",
            birthday: "January 9",
            likes: "Nunchucks",
            dislikes: "Men",
            ultimate: "Ultimate Aikido Master"
        },
        "Tsumugi Shirogane": {
            desc: "Tsumugi is an honors type student who speaks in a docile and gentle way, but she becomes very passionate when she talks about her favorite series or cosplays, having a habit of slipping infamous quotes from various sources into the conversation. Being a self-proclaimed introvert, she also tends to ignore people while she's in her thoughts, no matter how many times they try talking to her, and appears rather distant at times. She tends to call herself and everything that she has done 'plain', as she believes that among all of the students, she is the one who has the plainest appearance and personality. She uses the word repeatedly and sometimes appears even offended if someone else tries to argue that she isn't plain. She understands that some people might not recognize her as the Ultimate Cosplayer since her plain appearance conceals her talent.",
            img: "/V3/Tsumugi_Shirogane_Illustration.webp",
            height: "174 cm (JP)/5'9 (ENG)",
            weight: "51 kg (JP)/112 lbs (ENG)",
            birthday: "August 15",
            likes: "EVA foam",
            dislikes: "Disorderly queues",
            ultimate: "Ultimate Cosplayer"
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
        }
    };

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
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-130 justify-between">
                    <h1>Characters:</h1>
                    <ul>
                        <button onClick={() => setCharacter("Monokuma")}>Monokuma</button>
                        <br />
                        <button onClick={() => setCharacter("Monokids")}>Monokids</button>
                        <br />
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