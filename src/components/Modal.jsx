import charactersDescription from "../data/charactersDescription.json"
import { motion } from "framer-motion"

export function Modal({ selectedCharacter, toggleModal }) {
    const description = charactersDescription[selectedCharacter.name]

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-zinc-900 p-4 md:p-8 rounded-md flex items-center justify-center flex-col max-w-xl">
                <div>
                    <img src={selectedCharacter.imgUrl} alt={`${selectedCharacter.name} photo`} className="rounded-lg max-h-72"/>
                </div>

                <div>
                    <h1 className="text-white pb-3 pt-6 font-bold text-2xl">Character Information:</h1>
                    <p className="text-red-600 font-bold">Name: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.name}</span></p>
                    <p className="text-red-600 font-bold">Status: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.status}</span></p>
                    <p className="text-red-600 font-bold">Gender: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.gender}</span></p>
                    <p className="text-red-600 font-bold">Portrayed By: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.portrayedBy}</span></p>
                    <p className="text-red-600 font-bold">Born: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.born === undefined ? "unknown" : selectedCharacter.born}</span></p>
                    <p className="text-red-600 font-bold">Aliases: <span className="font-baskerville text-white font-normal ml-1">{selectedCharacter.aliases.map(alias => {
                        if (alias === selectedCharacter.aliases[selectedCharacter.aliases.length - 1]) {
                            return ` ${alias}.`
                        }
                        return ` ${alias},`
                    })}</span></p>
                    <p className="text-red-600 font-bold">Description: <span className="font-baskerville text-white font-normal ml-1">{description}</span></p>
                    <div className="flex items-center justify-center ">
                        <button className="py-2 px-4 bg-red-600 rounded-md font-bold text-center mt-4 mx-auto hover:bg-red-800 transition duration-500" onClick={toggleModal}>Close</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}