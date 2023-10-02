/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export function TwitterFollowCard ({userName, children, isFollowing}) {
  return(
    <article className='tw-followCard'>
    <header className='tw-followCard-header' >
      <img 
      className='tw-followCard-avatar'
      alt='Avatar de midudev'
      src={`https://unavatar.io/${userName}`}/>
      <div className='tw-followCard-info'>
        <strong>{children}</strong>
        <span className='tw-followCard-infoUserName'>@{userName}</span>
      </div>
    </header>
   
    <aside>
      <button className='tw-followCard-button'>
        Seguir
      </button>
    </aside>
   </article>
  )
} 