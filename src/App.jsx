import { useEffect, useState } from "react"
import Background from "./Component/Background/Background"
import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero"

const App = () => {
  let herDate = [
    {text1:"Drive into",text2:"What you love ?"},
    {text1:"Indulge",text2:"Your passions"},
    {text1:"Give into",text2:"Your passions"}
  ]

  const [heroCount,setHeroCount] = useState(2)
  const [playStatus,setPlayStatus] = useState(false)

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar/>
      <Hero
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      heroCount={heroCount}
      herDate={herDate[heroCount]}
      setHeroCount={setHeroCount}
      />
    </div>
  )
}

export default App
