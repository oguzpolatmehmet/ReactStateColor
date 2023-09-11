import './App.css'
// import ColorBox from './Components/ColorBox'
import ColorBoxes from './Components/ColorBoxes'

const colors = [
  "#037050",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#808080",
  "#40E0D0",
  "#FFD700",
  "#ADFF2F",
  "#000080",
  "#228B22",
  "#D2691E",
  "#20B2AA",
  "#D3D3D3",
  "#FF5F5E",
  "#FFFFF0",
]


function App() {
  

  return (
    <>
      <ColorBoxes colors={colors}/>
    </>
  )
}

export default App
