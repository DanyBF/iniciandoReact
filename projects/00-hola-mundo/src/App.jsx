/* eslint-disable no-unused-vars */
import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
  return (
    <section className="App">

    <TwitterFollowCard userName='midudev'>
      Miguel Angel Duran
    </TwitterFollowCard>

    <TwitterFollowCard userName='danybf'>
      Daniela Belen Fernandez
    </TwitterFollowCard>
    
    <TwitterFollowCard userName='zahifernandez_' >
      Zahira Fernandez
    </TwitterFollowCard>
   </section>
  )
} 