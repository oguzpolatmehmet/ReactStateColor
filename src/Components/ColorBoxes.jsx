import ColorBox from "./ColorBox";
import '../Styles/ColorBoxGrid.css'

export default function ColorBoxes({colors}){
  const boxes = []
  for(let i =0; i<= 26; i++){
    boxes.push(<ColorBox colors={colors}/>)
  }
  return(
    <>
      <div className="ColorBoxGrid">
        {boxes}
      </div>
    </>
  )
}