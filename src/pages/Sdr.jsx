import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SDR = () => {
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
                        <div className="flex flex-col">
                        <img className="w-80 h-auto" src="/SD/Danganronpa_GD_logo.webp" alt="" />
                            <br />
                            <p>
                            In Danganronpa 2, the player controls the main protagonist and playable character Hajime Hinata. The gameplay is very similar to the first game, so please check the gameplay section in Danganronpa: Trigger Happy Havoc first.

                            A major change in the game was that Hajime is able to walk around the Jabberwock Island in 2D. Very noticeable changes were made in the Class Trial segments:
                            <br />
                            <br />
                            <ul className="list-disc pl-8">
                                <li>Nonstop Debate</li>
                                <li>There are now blue lines during Nonstop Debate; contrary to the typical orange lines which are fired at to express contradictory information, these blue lines are fired at in order to express information supporting the point.</li>
                                <li>Chatter may require more hits to silence.</li>
                                <li>Panic Talk Action and Hangman's Gambit have been revamped.</li>
                                <li>Instead of hearts and stars to represent health and concentration, there are bars that go down if you lose health.</li>
                                <li>There are two all-new minigames: Logic Dive, a hybrid of racing, platforming, and quizzing, and Rebuttal Showdown, a game that combines a Nonstop Debate with slashing action.</li>
                            </ul>
                            </p>
                        </div>
                        <div>
                            <img className="w-150 h-auto" src="/SD/Danganronpa_Cover.webp" alt="" />
                        </div>
                    </div>
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
        </>
    )
}