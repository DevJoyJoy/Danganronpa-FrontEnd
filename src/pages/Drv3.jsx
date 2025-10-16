import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const DRV3 = () => {
    const navigate = useNavigate();

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
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-full h-auto items-start gap-8">
                    <div className="flex flex-row">
                        <div>
                            <div className="flex flex-col">
                            <img className="w-80 h-auto" src="/V3/Danganronpa_V3_Logo.webp" alt="" />
                                <br />
                                <p>
                                With Danganronpa 3: The End of Hope's Peak High School closing the Hope's Peak Academy story arc, Danganronpa V3: Killing Harmony takes place in a new school, with a completely new cast of characters, acting as the start of a new arc rather than a direct sequel to the previous two main titles. Despite this, the gameplay and story take place along a similar linear path to the previous main titles while adding new gameplay elements.

                                Like its predecessors, the game's progression is chapter-based and split into three major gameplay types: character interaction, investigation, and Class Trials. The player controls the protagonist from a first-person perspective and can explore the school at their leisure, with additional parts of the school becoming available as the plot progresses. Interacting with certain characters or objects is used to progress the story. In each chapter, a murder must be solved, which is up to the protagonist and their classmates to investigate and solve, culminating in a class trial inside the school's courtroom.

                                The game introduced the concept of "smacking" objects to look for Monocoins while exploring the school, which removes the in-game models from the room. As in previous games, the protagonist can interact with other students and improve their relationship through Free Time Events.
                                <br />
                                <br />
                                <ul className="list-disc pl-8">
                                    <li>Hangman's Gambit Ver. 3.0 now features letters encased in orbs that scroll across the screen. They can collide but now harmlessly slide around each other. The letters are hidden unless illuminated, either by the minigame every few seconds, or by the player's spotlight which consumes Focus.</li>
                                    <br />
                                    <li>Argument Armament is a rhythm game equivalent to Bullet Time Battle/Panic Talk Action. This time, the player now has to tap the correct button in time with the beat in order to destroy the opponent's statement. As the opponent's health depletes, their clothing also gets destroyed and the next phase takes on a faster beat. When their health is empty, four words (or word segments) will appear on screen which, if selected in the correct order, form a rebuttal to the opponent's argument.</li>
                                    <br />
                                    <li>In Debate Scrum, the students are split into two teams arguing over a common matter. The opposing team will lead with their arguments, and the protagonist must find the key point in that argument from among their own teammates to decide the one to refute the opposition.</li>
                                    <br />
                                    <li>Mind Mine is a puzzle-style minigame in which the player destroys blocks in order to uncover images hidden underneath. Colored blocks adjacent to each other can be grouped together and destroyed, but it also changes the colors of any surrounding blocks. Isolated blocks can be chipped away at the cost of a time penalty. Uncovering and locking on to the correct image wins the game.</li>
                                    <br />
                                    <li>Psyche Taxi is similar to Logic Dive, with the protagonist driving a car through a route to collect letters to form a question with a multiple choice answer. To answer the question, the protagonist must drive into the correct lane and slow down enough to pick up the girl who is standing in that lane, who will hop into one of the passenger seats.</li>
                                    <br />
                                    <li>Mass Panic Debate is similar to Nonstop Debate, but multiple students are talking at the same time, and multiple arguments and potentially weak points are present on the screen at once. If one student is shouting loud enough, their voice can drown out other concurrent statements, rendering them inaccessible until the loud statement is hit with the silencer. As with Nonstop Debate, the correct Truth Bullet must be used to destroy the correct weak point, and a V-Refute can be performed if aimed well.</li>
                                    <br />
                                    <li>Rebuttal Showdown returns, and this time the player has to manually aim their slashes to cut through the opponent's words. The angle where they can aim is restricted based on how much of an advantage the opponent has, and gaining advantage frees up more room to maneuver. Cutting down multiple phrases in one go will also provide a bonus to the time limit. Aim for the V-point in a weak spot to unleash a V-Counter!</li>
                                </ul>
                                </p>
                            </div>
                                <div>
                                    <img className="w-650 h-auto pl-4" src="/V3/Danganronpa_Cover.webp" alt="" />
                                </div>
                        </ div>
                            <div>
                                <div className="flex flex-row justify-around w-full">
                                <img className="h-30 w-auto" src="SD/Monomi_pixels.webp" alt="" />
                                <img className="h-30 w-auto" src="SD/Monomachine_pixels.webp" alt="" />
                                <img className="h-30 w-auto" src="SD/Hajime_pixels.webp" alt="" />
                                <img className="h-30 w-auto" src="SD/Sonia_pixels.webp" alt="" />
                                <img className="h-30 w-auto" src="SD/Monokuma_pixels.webp" alt="" />
                                <img className="h-30 w-auto" src="SD/MiracleGirl_pixels.webp" alt="" />   
                                <img className="h-30 w-auto" src="SD/Pets_pixels.webp" alt="" />                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}