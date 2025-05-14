import './App.css'

function App() {
  let num = 5
 
  let x = 5
  let y = 3
  let wyn1 = num * Math.pow(x, 3) + 1 - num * y; //7x<sup>3</sup> + 1 - 7y
  let wyn2 = 2 * x + Math.pow(x, 2) - 4 * Math.pow(y, 2); // 2x + x<sup>2</sup> - 4y<sup>2</sup>
  let wyn3 = 3 * Math.pow(y, 2) - num * Math.pow(x, 2) - num * y; // 3y<sup>2</sup> - 7x<sup>2</sup> -7y
  let wyn4 = 2 * x * y + num * x * y;               // 2xy + 7xy
  let wyn5 = 3 * Math.pow(x, 2) + num * y + 2;       // 3x<sup>2</sup> + 7y + 2
 
 
  return (
    <>
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/17856/17856366.png" />
    <title>Mathematics</title>
    <body>
    <div class="header">
    Komputer number - {num}
  </div>
 <div class="multiplication-table" id="multiplication">
 {num}*1=5 <br></br>
 {num}*2=10 <br></br>
 {num}*3=15 <br></br>
 {num}*4=20 <br></br>
 {num}*5=25 <br></br>
 {num}*6=30 <br></br>
 {num}*7=35 <br></br>
 {num}*8=40 <br></br>
 {num}*9=45 <br></br>
 {num}*10=50 <br></br>
   </div>
     <div class="formulas">
      <ul id="formulas-list">
      <li> {num}x<sup>3</sup> + 1 -  {num}y = {wyn1}</li>
      <li>2x + x<sup>2</sup> - 4y<sup>2</sup> = {wyn2}</li>
      <li>3y<sup>2</sup> - 7x<sup>2</sup> -  {num}y = {wyn3}</li>
      <li>2xy +  {num}xy = {wyn4}</li>
      <li>3x<sup>2</sup> +  {num}y + 2 = {wyn5}</li>
      </ul>
     </div>
   
  
    
    </body>
    </>
  )
}

export default App
