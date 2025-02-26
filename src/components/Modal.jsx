import charactersDescription from "../data/charactersDescription.json"

export function Modal({ selectedCharacter, toggleModal }) {
    const description = charactersDescription[selectedCharacter.name]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-black p-4 md:p-8 rounded-md flex items-center justify-center flex-col">
                <div>
                    <img src={selectedCharacter.imgUrl} alt={`${selectedCharacter.name} photo`} className="rounded-lg"/>
                </div>

                <div>
                    <h1>Character Information</h1>
                    <p className="text-red-600 font-bold">Name: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.name}</span></p>
                    <p className="text-red-600 font-bold">Status: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.status}</span></p>
                    <p className="text-red-600 font-bold">Gender: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.gender}</span></p>
                    <p className="text-red-600 font-bold">Portrayed By: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.portrayedBy}</span></p>
                    <p className="text-red-600 font-bold">Born: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.born}</span></p>
                    <p className="text-red-600 font-bold">Aliases: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.aliases}</span></p>
                    <p className="text-red-600 font-bold">Description: <span className="font-baskerville text-white font-normal ml-1">{description}</span></p>
                    <div className="flex items-center justify-center ">
                        <button className="py-2 px-4 bg-red-600 rounded-md font-bold text-center mt-4 mx-auto hover:bg-red-800 transition duration-500" onClick={toggleModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}