
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Monokubs = () => {
    const [character, setCharacter] = useState();
    const navigate = useNavigate();

    const info = {"Monodam": {
            desc: "Monodam is a child-like robot. Unlike his overly talkative siblings, he is very quiet. For the most part, he doesn't speak even to his fellow siblings, and he is somewhat of an outcast in the group. He sometimes appears a bit shy and seems to be blushing, like during the time when he made his first official announcement. When he does talk, Monodam speaks in a typical monotone robotic manner, making him appear very emotionless and thus unpredictable. He tends to silently stare at others, with no visible reaction when others speak to him. He occasionally speaks short sentences unexpectedly in a rather loud voice, which may startle others due to his usual silence. The rare moments when he laughs sounds especially unnatural due to his very robotic voice. All of this causes him to come across rather creepy, much more so than his siblings. Like all the Kubs, Monodam imitates Monokuma by constantly calling the students 'you bastards' and having his own version of his father's signature laughーa monotone 'pu-hu-hu-hu'.",
            img: "/MonoTypes/Monodam_Illustration.webp"
        },
        "Monokid": {
            desc: "Monokid is a child-like robot. However, he also has a very bad mouth and a short temper, and he's considered the hooligan of the group. He is a noisy and vulgar bully. He enjoys rock music and playing his guitar, and occasionally shouts exaggerated high-pitched screams like a rockstar. He also apparently loves eating salmon and especially honey, which for some reason can make him drunk and mutter nonsense. In the bonus mode Ultimate Talent Development Plan, he is constantly seen lying on the floor, passed out from eating too much honey. As seen in the Anthology manga, as a robot he also likes to drink oil, though not as much as honey. He appears to be the most unintelligent Monokub. He doesn't pay attention when others are talking and will randomly spout incoherent nonsense, making him the main cause of conversations getting derailed. He occasionally messes up words or says things backward, and loves to shout his catchphrase 'Hell yeah!'' He usually repeats things a lot whenever he gets excited over something.",
            img: "/MonoTypes/Monokid_Illustration.webp"
        },
        "Monosuke": {
            desc: "Monosuke is a child-like robot. He is the most cool-headed in the group, seemingly remaining calm whenever the other Monokubs are shocked and analyzes the situations. At first glance, he appears to be the most intelligent as well, being capable of having much more cohesive and intelligent conversations. However, despite this, he is neither mature nor docile, and he has a horrible mouth similar to Monokid. He is somewhat aggressive and tends to call others stupid. With a calm nature, Monosuke acts like the straight man of a double act stand-up comedy and provides snark to the group's dynamic. To emphasize this, he speaks in Kansai dialect in the Japanese version and New Jersey accent in the English version. He tends to be the one correcting his siblings whenever they say something nonsensical and is sometimes annoyed by them. Whenever his siblings talk their usual nonsense, he tends to interject with the appending '...more importantly' before he starts talking.",
            img: "/MonoTypes/Monosuke_Illustration.webp"
        },
        "Monotaro":{
            desc: "Monotaro is the leader figure of the Monokubs, a group of child-like robots. As a leader, he tries to unite the group members' discordant voices into one. However, being a scatterbrain, he gets sidetracked a lot and often struggles to keep his rambunctious siblings focused on the task at hand. He is also mentioned to have a clumsy side, giving him a childlike charm and he often acts the most child-like and 'pure' out of the siblings. Despite not being a very competent leader nor the smartest, his siblings consider him a reliable figure. Compared to Monokid and Monosuke, Monotaro is relatively mild-mannered and less openly hostile towards the students, though like all the Kubs he calls the students 'you bastards' seemingly as an attempt to imitate his father. He also seems considerate of Monophanie and overall appreciates all the members of the group.",
            img: "/MonoTypes/Monotaro_Illustration.webp"
        },
        "Monophanie": {
            desc: "Monophanie is a child-like robot with a feminine personality and the only sister of all the Monokubs. Her personality appears much more gentle than her brothers, and her kindness is mentioned to be 'a unique character trait', which seems to make her somewhat well-liked by her father and siblings, though it can also annoy the other bears who are more openly 'evil'. She loves flowers, but she isn't good with gore and cruelness, which is why she is very often seen vomiting, with the vomit even turning different colors depending on the situation.[4] Commonly, white or tan puke is for looking at anything gory. According to Monotaro, her green stinky puke is an omen of bad luck and disaster, and anyone who sees her blue sparkly puke will have good luck. In general, Monophanie is considered 'the cute one', with a tendency to do cute things like trying to solve the killing game via rock-paper-scissors, or suddenly falling asleep, and liking flowers. ",
            img: "/MonoTypes/Monophanie_Illustration.webp"
        },
        "Monokubs": {
            desc: " The Monokubs are Monokuma Units featured with five different colors. They are red, blue, yellow, green and pink. Each of the Monokubs has a different major personality trait, with Monotaro being the clumsy leader, Monophanie being the kindest one, Monokid being loud and wild, Monodam being quiet and shy because of his history of him being bullied, and Monosuke being the more money orientated type. The Monokubs also have a notable unique object for each of them such as a scarf, a guitar, a flower, and a pair of glasses. All of the Kubs have their own version of Monokuma's signature laugh 'puhuhu' and they repeatedly refer to the students as 'you bastards', clearly copying their father's way of speaking. Strangely, the Monokubs appear to bleed when they receive serious damage, despite being robots. They also seem to have the capability to eat and sleep, as they are often seen eating and repeatedly mention that they sleep during night time, though it's possible that they are just acting like their father sometimes does.",
            img: "/MonoTypes/Monokubs_Illustration.webp"
        },
    };

    return (
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
                <button onClick={() => navigate("/")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit ml-auto">
                    Home
                </button>
            </div>

            <div className="h-[150%] w-full flex p-6 gap-6">
            <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-60 justify-between">
                <h1>Characters:</h1>
                <ul>
                    <button onClick={() => setCharacter("Monokubs")}>Monokubs</button>
                    <br />
                    <button onClick={() => setCharacter("Monodam")}>Monodam</button>
                    <br />
                    <button onClick={() => setCharacter("Monokid")}>Monokid</button>
                    <br />
                    <button onClick={() => setCharacter("Monosuke")}>Monosuke</button>
                    <br />
                    <button onClick={() => setCharacter("Monotaro")}>Monotaro</button>
                    <br />
                    <button onClick={() => setCharacter("Monophanie")}>Monophanie</button>
                    <br />
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

                        <div className="mt-4 text-justify leading-relaxed">
                        <p>{info[character]?.desc}</p>
                        </div>
                    </div>
                    </>
                )}
                </div>
            </div>
        </div>
    );
}