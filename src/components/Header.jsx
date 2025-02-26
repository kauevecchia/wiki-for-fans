import stLogo from '../assets/st-logo.png'

export function Header() {
    return (
        <header className="min-h-24 font-baskerville flex items-center justify-start bg-black text-red-600 p-8 border-b-2 border-red-700">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
                <h1 className="text-lg md:text-2xl font-bold">Wiki For Fans</h1>
                

                <div className='w-28 h-auto md:w-48 md:h-auto'>
                    <img src={stLogo} alt="Stranger Things logo" className="w-full h-full object-cover"/>
                </div>
            </div>
        </header>
    )
}