import './App.css'

function App() {
  let num = 5
 
  let x = 5
  let y = 3
  let wyn1 = 7 * Math.pow(x, 3) + 1 - 7 * y; //7x<sup>3</sup> + 1 - 7y
  let wyn2 = 2 * x + Math.pow(x, 2) - 4 * Math.pow(y, 2); // 2x + x<sup>2</sup> - 4y<sup>2</sup>
  let wyn3 = 3 * Math.pow(y, 2) - 7 * Math.pow(x, 2) - 7 * y; // 3y<sup>2</sup> - 7x<sup>2</sup> -7y
  let wyn4 = 2 * x * y + 7 * x * y;               // 2xy + 7xy
  let wyn5 = 3 * Math.pow(x, 2) + 7 * y + 2;       // 3x<sup>2</sup> + 7y + 2
 
 
  return (
    <>
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/17856/17856366.png" />
    <title>Mathematics</title>
    <body>
    <div class="header">
    Komputer number - 5
  </div>
 <div class="multiplication-table" id="multiplication">
 5*1=5 <br></br>
 5*2=10 <br></br>
 5*3=15 <br></br>
 5*4=20 <br></br>
 5*5=25 <br></br>
 5*6=30 <br></br>
 5*7=35 <br></br>
 5*8=40 <br></br>
 5*9=45 <br></br>
 5*10=50 <br></br>
   </div>
     <div class="formulas">
      <ul id="formulas-list">
      <li>7x<sup>3</sup> + 1 - 7y = {wyn1}</li>
      <li>2x + x<sup>2</sup> - 4y<sup>2</sup> = {wyn2}</li>
      <li>3y<sup>2</sup> - 7x<sup>2</sup> - 7y = {wyn3}</li>
      <li>2xy + 7xy = {wyn4}</li>
      <li>3x<sup>2</sup> + 7y + 2 = {wyn5}</li>
      </ul>
     </div>
   
  
    
    </body>
    </>
  )
}

export default App
