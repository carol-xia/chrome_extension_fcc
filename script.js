// async function fetchData() {
//     const res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     const record = await res.json();
//     console.log(record);
//     document.getElementById("date").innerHTML=record.data[0].date;
//     document.getElementById("areaName").innerHTML=record.data[0].areaName;
//     document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//     document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();

function togglePokemonList(){
  document.getElementById("select-pokemon").classList.toggle("show");
  // document.getElementByValue("normal").classList.toggle("show");
  // document.getElementByValue("fire").classList.toggle("show");
}

{/* <option value="normal">Normal</option>
<option value="fire">Fire</option>
<option value="water">Water</option>
<option value="grass">Grass</option>
<option value="electric">Electric</option>
<option value="ice">Ice</option>
<option value="fighting">Fighting</option>
<option value="poison">Poison</option>
<option value="ground">Ground</option>
<option value="flying">Flying</option>
<option value="psychic">Psychic</option>
<option value="bug">Bug</option>
<option value="rock">Rock</option>
<option value="ghost">Ghost</option>
<option value="dark">Dark</option>
<option value="dragon">Dragon</option>
<option value="steel">Steel</option>
<option value="fairy">Fairy</option> */}