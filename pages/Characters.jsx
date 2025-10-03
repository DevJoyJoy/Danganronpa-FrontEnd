export const Characters = () => {
    return(
        <div className='bg-pink-100 h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-[15%] flex flex-row items-center'>
                <img src="../Monokuma.gif" alt="" className="h-[110%]"/>
                <h1 className="flex font-sans text-white text-3xl  justify-center">Danganronpa</h1>
            </div>

            <h1 className="justify-center text-2xl">Main Games:</h1>
            <div className="h-[90%] w-full flex p-6 gap-6">
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 ">
                    <h1>Danganronpa: Trigger Happy Havoc</h1>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3 ">
                    <h1>Super Danganronpa: Goodbye Despair</h1>
                </div>
                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-1/3">
                    <h1>Danganronpa Another Episode: Ultra Despair Girls</h1>
                </div>
            </div>
            <h1>Spin Off Games:</h1>
                <div className="w-[96%] bg-pink-200 rounded-lg p-6 h-64 mx-auto">
                    <h1>Danganronpa V3: Killing Harmony</h1>
                </div>
        </div>
    )
}