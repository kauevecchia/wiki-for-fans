import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"

export function App() {
  const [characters, setCharacters] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState({})

  useEffect(() => {
    fetch('https://stranger-things-api.fly.dev/api/v1/characters/?perPage=108')
      .then((res) => res.json())
      .then(data => setCharacters(data))
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
    <div className="font-poppins">
      <Header />

      <main className="flex flex-col items-center justify-center gap-10 bg-zinc-900 px-8 py-16">

        <div className="max-w-7xl md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          {characters.map(character => {
            if (!character.name || !character.name || !character.gender || !character.portrayedBy) {
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
      </main>

      {isModalOpen && <Modal
        selectedCharacter={selectedCharacter}
        toggleModal={toggleModal}
      />}

      <Footer />
    </div>
  )
}