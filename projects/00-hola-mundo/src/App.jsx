/* eslint-disable no-unused-vars */
import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
  return (
    <section className="App">

    <TwitterFollowCard isFollowing userName='midudev'>
      Miguel Angel Duran
    </TwitterFollowCard>

    <TwitterFollowCard isFollowing={false} userName='danybf'>
      Daniela Belen Fernandez
    </TwitterFollowCard>
    
    <TwitterFollowCard isFollowing userName='zahifernandez_' >
      Zahira Fernandez
    </TwitterFollowCard>
   </section>
  )
} 