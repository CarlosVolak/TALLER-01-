import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { estudiante } from './Estudiante';

//--------FUNCIONES EXTRAS---------------------
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//------------FUNCIONES EJERCICIOS-------------
function segun_horas (){
  const rs = document.getElementById("segundos").value
  var hora,min,seg,m
  
    if(rs < 0){

      m = "No se puede tener  los segundos negativos"

    }else if(rs <=60){

      hora = 0
      min = 0
      seg = rs
      m ="el tiempo que usted digito es:"+
      " hrs:"+hora+
      " min:"+min+
      " seg:"+seg 

    }else if(rs > 60){

      let p_min = Math.floor(rs/60)
      if(p_min > 60){

        hora = Math.floor(p_min/60)
        min = p_min-(hora*60)
        seg = rs-(p_min*60)
        
      }else{
        hora = 0
        min = p_min-(hora*60)
        seg = rs-(p_min*60)
      }
      m ="el tiempo que digito usted es:"+
        " hrs:"+hora+
        " min:"+min+
        " seg:"+seg  
    }
    console.log(min)
    
  return(m)
}

function llamada () {
  const dur = document.getElementById("llamada").value
  let m
  if (dur < 0){
    m = "No puede haber una llamada con una duración negativa"
  }else if(dur <= 3){
    m = "La llamada le va a salir nomas en $100"
  }else if(dur>3){
    let valor = 100 + (50*(dur-3))
    m = "La llamada le sale en unos miserables $"+valor
  }
  return(m)
}



function iguales(){
  let m
  let rep = 0
  const uno = document.getElementById("uno").value
  const dos = document.getElementById("dos").value
  const tres = document.getElementById("tres").value
  const arreglo = [uno, dos, tres]
  arreglo.forEach((numero, index) => {
    let p = arreglo[index]
    switch(index){
      case 0:
        if (p===arreglo[index+1] || p===arreglo[index+2]){
          rep++
        }
        break;
      case 1:
        if (p===arreglo[index+1] || p===arreglo[index-1]){
          rep++
        }
        break;
      case 3:
        if (p===arreglo[index-1] || p===arreglo[index-2]){
          rep++
        }
        break;
    }
  })
  m = "Hubieron "+rep+" numeritos repetidos"
  return(m)
}

function menorMayor(){
  const lista = []
  const num = document.getElementById("numero").value
  for (var i = 0; i<= num; i++){
    lista.push(i)
  }
  return lista
}

function Impar(){
  const lista = []
  const num = document.getElementById("numeroImpar").value
  console.log(num)
  for (var i = 0; i<= num; i++){
    if(i%2!==0){
      lista.push(i)
    }
  }
  return lista
}

function salarios(lista){
  let salarios = []
  if(lista.length === 10){
    lista.forEach((salario) => {
      let s = salario+ (salario*0.08)
      salarios.unshift(s)
    })
  }else{
    const m = "Error hay "+lista.length+" salarios y deben ser 10"
    salarios.unshift(m)
  }

  return salarios

}

function dividir (){
  let lista = []
  for(let i = 0; i < 10; i++){
    let r = random(1,25)
    lista.unshift(r)
  }
  console.log(lista)
  const index = document.getElementById("index").value

  let numeros = []
  if (index < 0 || index > 10){
    let m = "Debe ser un numero entre 0 y 10"
    numeros.unshift(m)
  }else{
    let p = lista[index]
    lista.forEach((num) =>{
      let j = num/p
      numeros.unshift(j)
    })
  }

  return numeros
}

function tabla (){
  const div = document.getElementById("tabla")
  div.innerHTML = ""
  var table = document.createElement("table")

  

  const m = document.getElementById("columnas").value
  const n = document.getElementById("filas").value
  if(m <= 0 || n <= 0){
    var mensaje = document.createTextNode("Debe ser numero mayores o diferente de 0")
    div.appendChild(mensaje)
  }else{
    //filas
    for(let i = 0; i<n; i++){
      var fila = document.createElement("tr")
      for(let j = 0; j<m; j++){
        var celda = document.createElement("td")
        var texto = document.createTextNode(j)
        celda.appendChild(texto)
        fila.appendChild(celda)

      }
      table.appendChild(fila)
    }
    div.appendChild(table)
    table.setAttribute("border", "2")
  }
  
}

function tablaInput (){
  const div = document.getElementById("tablaInput")
  div.innerHTML = ""
  var table = document.createElement("table")

  

  const m = document.getElementById("columnasInput").value
  const n = document.getElementById("filasInput").value
  if(m <= 0 || n <= 0){
    var mensaje = document.createTextNode("Debe ser numero mayores o diferentes a 0")
    div.appendChild(mensaje)
  }else{
    //filas
    for(let i = 0; i<n; i++){
      var fila = document.createElement("tr")
      for(let j = 0; j<m; j++){
        var celda = document.createElement("td")
        var texto = document.createElement("input")
        celda.appendChild(texto)
        fila.appendChild(celda)

      }
      table.appendChild(fila)
    }
    div.appendChild(table)
    table.setAttribute("border", "2")
  }
}

function calcularSuma(){
  let numeros= []
  let sumaTotal = 0
  var nTd = document.createElement("td")
  const table = document.getElementById("tablaInput").children[0]
  const filas = table.children
  for (let tr of filas){
    var td = tr.children
    for(let input of td){
      var n = input.children[0].value
      numeros.push(n)
    }
  }
  numeros.forEach((num)=>{
    sumaTotal += parseFloat(num)
  })
  console.log(sumaTotal)

  var total = document.createTextNode(sumaTotal)
  nTd.appendChild(total)
  table.appendChild(nTd)
}


function App() {
  const [mensaje, setmensaje] = useState("Hola");
  const [valorLlamada, setValorLLamada] = useState("$0.0")
 
  const [numerosMensaje, setNumeros] = useState("")
  const [menorMayorLista, setLista] = useState([])
  const [imparLista, setListaImpar] = useState([])
  const [listaSalarios, setSalarios] = useState([])
  const[salario, setSalario] = useState("")
  const[listaNumeros, setDivididos] = useState([])
  
  
  const calcularseg = () => {
    const msj = segun_horas()
    setmensaje(msj)
  }

  const CalcularLllamada = () => {
    const msj = llamada()
    setValorLLamada(msj) 
  }

  

  const calcularRept = () =>{
    const msj = iguales()
    setNumeros(msj)
  }

  const crearLista = () =>{
    setLista(menorMayor())
  }

  const crearListaImpar = () =>{
    setListaImpar(Impar())
  }

  const addSalario = () =>{
    setSalarios(list => [...list, salario])
    setSalario("")
  }

  const onSetSalario = (evt) =>{
    setSalario(evt.target.value)
  }

  const calcularSalario = () =>{
    setSalarios(salarios(listaSalarios))
  }

  const eliminarSalario = () =>{
    listaSalarios.shift()
  }

  const dividirNumeros = () =>{
    
    setDivididos(dividir())
  }

  const crearTabla = () =>{
    tabla()
  } 
  const crearTablaInput = () =>{
    tablaInput()
  }
  const suma = () =>{
    calcularSuma()
  }


  return (
    <>
      <h1>Taller #01 de WEB - 2200367</h1>
      <h2>Ejercicio #1:</h2>
      <div>
        <span>Ingrese su tiempo en segundos: </span>
        <input type="text" id='segundos'></input>
        <button onClick={calcularseg}>CALCULAR</button>
      </div>
      <span>{mensaje}</span>
      <h2>Ejercicio #2:</h2>
      <div>
        <span>Ingrese el tiempo de la llamada en min: </span>
        <input type="text" id='llamada'></input>
        <button onClick={CalcularLllamada}>CUANTO DEBO</button>
      </div>
      <span>{valorLlamada}</span>
      
    <h2>Ejercicio #4:</h2>
      <div>
        <span>Escriba tres numeros: </span>
        <input type="text" id='uno'></input>
        <input type= "text" id="dos"></input>
        <input type= "text" id="tres"></input>
        <button onClick={calcularRept}>MOSTRAR</button>
      </div>
    <span>{numerosMensaje}</span>
    <h2>Ejercicio #5:</h2>
      <div>
        <span>Ingrese el tamaño de lista: </span>
        <input type="text" id='numero'></input>
        <button onClick={crearLista}>CREAR LISTA</button>
      </div>
    <ol>{
      menorMayorLista.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>Ejercicio #6:</h2>
      <div>
        <span>Ingrese un numero</span>
        <input type="text" id='numeroImpar'></input>
        <button onClick={crearListaImpar}>MOSTRAR</button>
      </div>
    <ol>{
      imparLista.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>Ejercicio #7:</h2>
      <div>
        <span>Ingrese un valor de salario: </span>
        <input type="text" value={salario} onChange = {(evt) => onSetSalario(evt)}></input>
        <button onClick={addSalario}>Añadir un salario</button>
        <button onClick={calcularSalario}>Dividir los salarios</button>
        <button onClick={eliminarSalario}>Eliminar el primer salario</button>
      </div>
    <ol>{
      listaSalarios.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>Ejercicio #8:</h2>
      <div>
        <span>Ingrese un numero entre 0 y 10</span>
        <input type="text" id='index'></input>
        <button onClick={dividirNumeros}>MOSTRAR</button>
      </div>
    <ol>{
      listaNumeros.map(
        (num, key) =>
        {
          return <li key={key}>{num}</li>
        })
      }
    </ol>
    <h2>Ejercicio #9:</h2>
      <div>
        <span>Ingrese el tamaño que desea de su tabla </span>
        <span>Filas:</span>
        <input type="text" id='filas'></input>
        <span>Columnas:</span>
        <input type="text" id='columnas'></input>
        <button onClick={crearTabla}>CREAR</button>
      </div>
      <div id='tabla'></div>
      <h2>Ejercicio #10:</h2>
      <div>
        <span>Ingrese el tamaño de su tabla </span>
        <span>Filas:</span>
        <input type="text" id='filasInput'></input>
        <span>Columnas:</span>
        <input type="text" id='columnasInput'></input>
        <button onClick={crearTablaInput}>CREAR</button>
        <button onClick={suma}>CALCULAR</button>
      </div>
      <div id='tablaInput'></div>
    
    
    </>
  );
}

export default App;
