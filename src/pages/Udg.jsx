import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const UDG = () => {
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
                        <img className="w-80 h-auto" src="/UDG/Danganronpa_UDG_Logo.webp" alt="" />
                            <br />
                            <p>
                            Danganronpa Another Episode is a third-person adventure shooter game where the player controls Komaru Naegi as she tries to survive in a city overrun by Monokuma Units with the help of her partner, Toko Fukawa.

                            During the game, the player has the option to switch between playing as Komaru and Toko's split personality, Genocide Jack. Choosing to play as Komaru allows the player to utilize a megaphone-shaped hacking gun which turns her words into various types of ammunition, called Truth Bullets. Initially, the hacking gun has an unlimited stock of every type of Truth Bullet. Later on, The Servant messes with the gun when she is taken hostage onto the Warriors of Hope's airship, therefore forcing her to rediscover the different bullets and use them in limited supply.

                            Using the hacking gun, Komaru can issue several different commands based on the Truth Bullet she shoots:
                            <br />
                            <br />
                            <ul className="list-disc pl-4">
                                <li>The first of the two Truth Bullets that Komaru starts with is called the Break Bullet. This is the basic attack bullet that Komaru can shoot at Monokuma Units to inflict damage. 3-4 shots take down a Monokuma Unit, unless the player hits the Monokuma's weak point: the red left eye. Shooting the eye will result in a one-hit defeat, plus a golden Monocoin against most enemies. Additionally, successfully hitting the weak point powers up the next shot significantly.</li>
                                <br />
                                <li>The second of the default Truth Bullets is Move. Move allows Komaru to activate machinery such as generators, cars, and the Monoku-Man arcade machines. Move also activates the MonoMono machines, which dispense health, bullets, and batteries</li>
                                <br />
                                <li>The third Truth Bullet, Dance, is the first type collected by Komaru on her adventure. Shooting this Truth Bullet will force the Monokuma to dance for a while, leaving it completely vulnerable. The Dance Bullet is most effective against Siren Monokumas, who will draw in all nearby Monokuma toward them for easier destruction.</li>
                                <br />
                                <li>The fourth Truth Bullet, Detect, allows Komaru to search for hidden things in the area, such as Monokuma Kids and their artwork including their footprints.</li>
                                <br />
                                <li>The fifth Truth Bullet is Knockback, which blasts the Monokuma Units backward. It has a decent spread, but short range. The Knockback Bullet is especially effective against Guard Monokuma, Ball Monokuma, and Bomber Monokuma. When struck by the Knockback Bullet, Guard Monokuma lose their riot shields, Ball Monokuma roll and destroy other Monokuma in their path, and Bomber Monokuma drop their bombs. The Truth Bullet also works well near environmental hazards, such as water or pits, as it can blast Monokuma Units into the hazards for instant kills.</li>
                                <br />
                                <li>The sixth Truth Bullet obtained by Komaru is Paralyze. Paralyze is an electricity-based bullet that can defeat basic Monokumas in one hit. It also affects other enemies standing close to the initial target, making it useful against large groups. If fired at something standing in shallow water, Paralyze will hit everything touching the water - including Komaru if she isn't standing on dry land.</li>
                                <br />
                                <li>The seventh Truth Bullet is a fire-based bullet called Burn. It can be shot at an extremely fast pace. It also has the most capacity of any offensive Truth Bullet, making it effective against quicker Monokuma Units such as Destroyer Monokuma and Beast Monokuma.</li>
                                <br />
                                <li>The eighth and final Truth Bullet to be reacquired is the Link Bullet. The Link Bullet allows Komaru to temporarily control any Monokuma Unit she hits. The Monokuma Unit can then be directed to move to a new position or attack its allies.</li>
                                <br />
                                <li>On the other hand, the player can also choose to call upon the invincible Genocide Jack, who carries her "Genoscissors" and a stun gun which allows her to go on a rampage and destroy all the Monokuma Units around her. However, the player can only use Genocide Jack for a limited period of time. Once the batteries are drained, Genocide Jack will immediately revert back to Toko. The player can revert Genocide Jack manually to preserve batteries. On Genocide Mode, the batteries will regenerate when using Komaru, but on all other modes, batteries can only be replenished by collecting battery drops from MonoMono Machines.</li>
                            </ul>
                            </p>
                        </div>
                        <div>
                            <img className="w-550 h-auto pl-8" src="/UDG/Danganronpa_Cover.webp" alt="" />
                        </div>
                    </div>
                    {/* <div className="flex flex-row justify-around w-full">
                        <img className="h-30 w-auto" src="SD/Monomi_pixels.webp" alt="" />
                        <img className="h-30 w-auto" src="SD/Monomachine_pixels.webp" alt="" />
                        <img className="h-30 w-auto" src="SD/Hajime_pixels.webp" alt="" />
                        <img className="h-30 w-auto" src="SD/Sonia_pixels.webp" alt="" />
                        <img className="h-30 w-auto" src="SD/Monokuma_pixels.webp" alt="" />
                        <img className="h-30 w-auto" src="SD/MiracleGirl_pixels.webp" alt="" />   
                        <img className="h-30 w-auto" src="SD/Pets_pixels.webp" alt="" />                     
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}