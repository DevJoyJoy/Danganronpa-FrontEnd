export const CharactersV3 = () => {

    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
            </div>
            
            <div className="h-[150%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-100 h-135 justify-between">
                    <h1>Characters:</h1>
                    <ul>
                        <button>Monokuma</button>
                        <br />
                        <button>Monokids</button>
                        <br />
                        <button>Angie Yonaga</button>
                        <br />
                        <button>Gonta Gokuhara</button>
                        <br />
                        <button>Himiko Yumeno</button>
                        <br />
                        <button>K1-B0 (Keebo)</button>
                        <br />
                        <button>Kaede Akamatsu</button>
                        <br />
                        <button>Kaito Momota</button>
                        <br />
                        <button>Kirumi Tojo</button>
                        <br />
                        <button>Kokichi Ouma</button>
                        <br />
                        <button>Korekiyo Shinguji</button>
                        <br />
                        <button>Maki Harukawa</button>
                        <br />
                        <button>Miu Iruma</button>
                        <br />
                        <button>Rantaro Amami</button>
                        <br />
                        <button>Ryoma Hoshi</button>
                        <br />
                        <button>Shuichi Saihara</button>
                        <br />
                        <button>Tenko Chabashira</button>
                        <br />
                        <button>Tsumugi Shirogane</button>
                        <br />
                        <button>??? (Spoiler)</button>
                    </ul>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-500 h-135 justify-between">
                    
                </div>
            </div>
        </div>
    )
}