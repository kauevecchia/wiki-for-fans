import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Card } from "./components/Card"

export function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://stranger-things-api.fly.dev/api/v1/characters/?perPage=108')
      .then((res) => res.json())
      .then(data => setCharacters(data))
      .catch((error) => {
        console.error(`Failed to fetch character data: ${error}`)
      })
  }, [])

  return (
    <div className="font-poppins">
      <Header />

      <div className="flex flex-col gap-8 bg-gray-900 p-8">
        {characters.map(character => {
          if (!character.name || !character.name || !character.gender || !character.portrayedBy) {
            return null
          }

          return <Card
            key={character._id}
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
    </div>
  )
}