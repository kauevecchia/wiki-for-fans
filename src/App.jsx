import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"
import { Loading } from "./components/Loading"
import { AnimatePresence } from "framer-motion"

export function App() {
  const [characters, setCharacters] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://stranger-things-api.fly.dev/api/v1/characters/?perPage=108')
      .then((res) => res.json())
      .then(data => {
        setLoading(false)
        setCharacters(data)
      })
      .catch((error) => {
        console.error(`Failed to fetch character data: ${error}`)
      })
  }, [])

  const toggleModal = (characterInfo) => {
    if (isModalOpen) {
      setIsModalOpen(false)
      setSelectedCharacter({})
    } else {
      setSelectedCharacter(characterInfo)
      setIsModalOpen(true)
    }
  }

  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-col items-center justify-center gap-10 bg-zinc-900 px-8 py-16 flex-grow">

        {!loading && (
          <div className="max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {characters.map(character => {
              if (!character.name || !character.gender || !character.portrayedBy) {
                return null
              }
              return <Card
                key={character._id}
                toggleModal={toggleModal}
                characterInfo={{
                  name: character.name,
                  status: character.status,
                  born: character.born,
                  gender: character.gender,
                  portrayedBy: character.portrayedBy,
                  imgUrl: character.photo,
                  aliases: character.aliases,
                }}
              />
            })}
          </div>
        )} 
      </main>

      <AnimatePresence>
        {isModalOpen && <Modal
          selectedCharacter={selectedCharacter}
          toggleModal={toggleModal}
        />}
      </AnimatePresence>

      {loading && <Loading />}

      <Footer />
    </div>
  )
}