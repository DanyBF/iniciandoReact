import redToken from '../assets/red Token.svg'
import blackToken from '../assets/black Token.svg'

export const Slot = ({ ch, y, x }) => {
  return (
    <div className='slot' x={x} y={y}>
      {ch && (
        <img
          src={ch === 'X' ? redToken : blackToken}
          width='100%'
          height='100%'
        />
      )}
    </div>
  )
}
