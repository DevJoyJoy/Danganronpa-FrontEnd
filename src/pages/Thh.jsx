import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const THH = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return(
        <>
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
                <div className="flex flex-row bg-pink-200 rounded-lg p-6 w-full h-auto items-start gap-8">
                    <div className="flex flex-col">
                        <img className="w-80 h-auto" src="/THH/Danganronpa_THH_logo.webp" alt="" />
                        <br />
                        <p>
                        In Danganronpa: Trigger Happy Havoc, the player controls Makoto Naegi, a student at Hope's Peak who is forced into a killing game with other students. Each chapter is divided into two parts: School Life, in which the player can explore the academy and progress through the story, and the Class Trial, in which the player must deduce the culprit of a murder.
                        During School Life, the player can explore the school grounds in a first-person perspective. In certain locations, the player moves a crosshair cursor to converse with other characters and interact with various objects. Examining specific objects yields the player Monocoins, which can be redeemed for presents from The All-Mighty Monomono Machine located in the school's store. As the game progresses, more areas in the academy become available, along with places that were sealed off in the previous chapter(s) on accessible floors.
                        </p>
                        <br />
                        <p>
                        School Life is separated into two sections: "Daily Life" and "Deadly Life". In "Daily Life," the players converse with other characters and progress through the story. When speaking with other characters, some comments can be "reacted" to to reveal new information. Daily Life also features "Free Time" segments, where the player can spend time with other characters and give them presents, which in turn reveals more information about them and unlocks "skills," which aid the player in certain aspects of the Class Trial, and "skill points," which determine the number of skills that can be used.
                        Once a murder has occurred, the game transitions into Deadly Life, where the player must look for clues throughout the academy. Evidence and testimonies, or "Truth Bullets," are stored in the player's e-Handbook. After all possible Truth Bullets are found, the game shifts to the Class Trial.
                        </p>
                        <br />
                        <p>
                        In a Class Trial, the students must discuss among themselves who the killer is. The game’s logic difficulty will determine how the facts are shown and how logical they are (the logic difficulty can be changed in the settings at almost anytime). The Class Trial consists of four main game modes: Nonstop Debate, Hangman's Gambit, Bullet Time Battle, and Closing Argument. The most common of these is the Nonstop Debate, in which characters will discuss their thoughts on the case. During these sections, the player is armed with "Truth Bullets," metaphorical bullets containing evidence relevant to the case. To break the debate, the player must find a lie or contradiction among the "weak points" (words highlighted in yellow) in the characters' arguments and shoot them with the correct truth bullet. In Hangman's Gambit, the player must shoot specific letters to spell out a clue. Bullet Time Battle is a one-on-one debate against another student featuring rhythm-style gameplay. As the opponent makes remarks, the player must press buttons in time to the beat to lock onto the remarks and shoot them down. To close out the case, "Closing Argument" is a puzzle in which the player pieces together a comic strip depicting how the murder went down.
                        <br />
                        <br />
                        Occasionally, the player must answer a multiple-choice question and present a shred of evidence to progress through the Class Trial. The player's "Influence" among the other students is represented by hearts, which are reduced whenever the player makes errors in shooting contradictions or presenting evidence and are slightly replenished once the player does otherwise. The game ends if the player loses all their "Influence" or runs out of time during a segment. At the end of a trial, the game ranks the player's performance and rewards them with Monocoins.
                        <br />
                        <br />
                        When the player completes a chapter, a screen with outlines of every student's silhouette appears. Text at the top of the screen displays "Surviving Students"; though moments later, the casualties' sprite colours change to show their status change from alive to deceased as the number on the bottom changes accordingly to the number of surviving students.
                        </p>
                    </div>
                    <img className="w-100 h-auto" src="/THH/Danganronpa_Cover.webp" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}