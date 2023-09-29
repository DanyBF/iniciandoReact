import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
  return (
    <>    
    <section className="App">
    <TwitterFollowCard userName='midudev' name="Miguel Angel Duran" />
    <TwitterFollowCard userName='danybf' name="Daniela Belen Fernandez" />
    </section>
    </>
  )
}