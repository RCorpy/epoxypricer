import './App.css';
import {priceObject} from './pricesObject'
import {useState} from 'react'

function App() {
  
  const [area, setArea] = useState(0)
  const [color, setColor] = useState("Gris")
  const [paintType, setPaintType] = useState("HS100")
  const [manos, setManos] = useState(1)
  const [gm2, setGm2]= useState(125)
  const [subOptions, setSubOptions] = useState("EPOXY HS100 MAGNUM")
  const [finalPrice, setFinalPrice] = useState(0)

  const handleArea = (e)=>{
    setArea(e.target.value)
  }

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  const handlePaintType = (e) => {
    setPaintType(e.target.value)
  }

  const handleSubOptions = (e) => {
    setSubOptions(e.target.value)
  }

  const handleManos = (e) => {
    setManos(e.target.value)
  }

  const handleGM2 = (e) => {
    setGm2(e.target.value)
  }

  const calculateFinalPrice = () => {

    let myFinalPrice = 0

    if(gm2<75){
      alert("Muy pocos gramos por metro cuadrado")
    }
    else if(gm2>300){
      alert("Demasiados gramos por metro cuadrado")
    }
    else{
      if(manos==1 || manos ==2){
        myFinalPrice= manos*priceObject[paintType][subOptions][color]["30Kg"]*gm2/30000*area
        console.log(myFinalPrice)
      }
      setFinalPrice(myFinalPrice)
    }
    
  }
  return (
    <div className="App">
      <button onClick={()=>console.log(priceObject)}>console prices</button>

      <div className="input">
        <label for="area">Area</label>
        <input name="area" type="number" value={area} onChange={handleArea}/>
      </div>

      <div className="input">
        <label for="color">Color</label>
        <select name="color"value={color} onChange={handleColor}>
          <option value="Amarillo">amarillo</option>
          <option value="Azul">azul</option>
          <option value="Blanco">blanco</option>
          <option value="Crema">crema</option>
          <option value="Negro">negro</option>
          <option value="Rojo ferrari">rojo Ferrari</option>
          <option value="Rojo granate">rojo granate</option>
          <option value="Verde">verde</option>
          <option value="Gris">gris</option>
        </select>
      </div>

      <div className="input">
        <label for="paintType">Tipo de pintura</label>
        <select name="paintType" value={paintType} onChange={handlePaintType}>
          <option value="HS100">HS100</option>
          <option value="EPOXY WATER">Epoxi al agua</option>
          <option value="POLITOP">POLITOP</option>
          <option value="ENEKRIL">ENEKRIL</option>
        </select>
      </div>

      <div className="input">
        <label for="subOptions">Otras Opciones</label>
        <select name="subOptions" value={subOptions} onChange={handleSubOptions}>
          {Object.keys(priceObject[paintType]).map(element=>(
            <option value={element}>{element}</option>
          ))}
        </select>
      </div>

      <div className="input">
        <label for="manos">Manos</label>
        <select name="manos" value={manos} onChange={handleManos}>
          {(paintType=="POLITOP") ? 
          (<option value={1}>1</option>)
          :
          (<><option value={1}>1</option>
          <option value={2}>2</option>
          <option value="imprimacion1">Imprimación y 1 mano</option>
          <option value="imprimacion2">Imprimación y 2 manos</option></>)
          }

        </select>
      </div>
      
      <div className="input">
        <label for="gm2">Gramos por metro cuadrado</label>
        <input name="gm2" type="number" value={gm2} onChange={handleGM2}/>
      </div>

      <div>
        <p>Area : {area}</p>
        <p>Color : {color}</p>
        <p>Tipo de pintura : {paintType}</p>
        <p>Suboptions: {subOptions}</p>
        <p>Manos : {manos}</p>
        <p>Gramos por m2 : {gm2}</p>
      </div>

      <div className="final">
            <button onClick={calculateFinalPrice}>Calcular precio final</button>
            <p style={finalPrice==0 ? {"display": "none"} : {}}>{finalPrice}</p>
      </div>
    </div>
  );
}

export default App;
