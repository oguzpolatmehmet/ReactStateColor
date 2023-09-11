import { useState } from 'react'
import '../Styles/ColorBox.css'
export default function ColorBox({ colors }) {
  const [changeColor, setChangeColor] = useState(colors[Math.floor(Math.random()*colors.length)]);
  const handleClick = () => { setChangeColor(colors[Math.floor(Math.random() * colors.length)]) }
  // console.log(colors)
  return (
    <div className="ColorBox" onClick={handleClick} style={{backgroundColor: changeColor}}>
        <p style={{color: 'black', fontSize: '50px', fontWeight:'bold'}}>
          {changeColor}
        </p>
    </div>
  )
}