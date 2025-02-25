import { Header } from "./components/Header"
import { useState } from "react"


export function App() {
  const [characters, setCharacters] = useState([])

  return (
    <div className="font-poppins">
      <Header />
    </div>
  )
}