/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true,
  },
  {
    userName: 'danydbf',
    name: 'Daniela Belen Fernandez',
    isFollowing: true,
  },
  {
    userName: 'zahifernandez_',
    name: 'Zahira Fernandez',
    isFollowing: false,
  },
]

export function App() {
  return (
    <section className='App'>
      {users.map((user) => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
