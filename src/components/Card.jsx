/* eslint-disable react/prop-types */
export function Card({ characterInfo, toggleModal}) {
    return (
        <div className="flex flex-col gap-4 p-4 bg-black shadow-darkish-red rounded-md cursor-pointer hover:scale-110 transition duration-500" onClick={() => toggleModal(characterInfo)}>
            <div className="w-full h-72 flex items-center justify-center">
                <img src={characterInfo.imgUrl} alt={`${characterInfo.name} photo`} className="w-64 h-64 object-cover object-top rounded-md" />
            </div>
            
            <div>
                <p className="text-white font-bold">Name: <span className="font-baskerville text-red-600 font-normal ml-1">{characterInfo.name}</span></p>
                <p className="text-white font-bold">Status: <span className="font-baskerville text-red-600 font-normal ml-1">{characterInfo.status}</span></p>
                <p className="text-white font-bold">Gender: <span className="font-baskerville text-red-600 font-normal ml-1">{characterInfo.gender}</span></p>
                <p className="text-white font-bold">Portrayed By: <span className="font-baskerville text-red-600 font-normal ml-1">{characterInfo.portrayedBy}</span></p>
            </div>
        </div>
    )
}