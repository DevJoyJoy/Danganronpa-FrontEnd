export const CharactersSD = () => {

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
                        <button>Monokuma</button>
                        <br />
                        <button>Usagi/Monomi</button>
                        <br />
                        <button>Akane Owari</button>
                        <br />
                        <button>Byakuya Twogami</button>
                        <br />
                        <button>Chiaki Nanami</button>
                        <br />
                        <button>Fuyuhiko Kuzuryu</button>
                        <br />
                        <button>Gundham Tanaka</button>
                        <br />
                        <button>Hajime Hinata</button>
                        <br />
                        <button>Hiyoko Saionji</button>
                        <br />
                        <button>Ibuki Mioda</button>
                        <br />
                        <button>Kazuichi Soda</button>
                        <br />
                        <button>Mahiru Koizumi</button>
                        <br />
                        <button>Mikan Tsumiki</button>
                        <br />
                        <button>Nagito Komaeda</button>
                        <br />
                        <button>Nekomaru Nidai</button>
                        <br />
                        <button>Peko Pekoyama</button>
                        <br />
                        <button>Sonia Nevermind</button>
                        <br />
                        <button>Teruteru Hanamura</button>
                        <br />
                        <button>??? (Spoiler)</button>
                        <br />
                        <button>??? (Spoiler)</button>
                    </ul>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-500 h-142 justify-between">
                    
                </div>
            </div>
        </div>
    )
}