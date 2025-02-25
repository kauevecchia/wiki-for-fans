import { Header } from "./components/Header"
import { useState, useEffect } from "react"


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
    </div>
  )
}