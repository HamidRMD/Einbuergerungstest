import Logo from "./Logo"

const ZumBundesländer=()=>{

  

    
      
    
    return(
        <div className="ZumBundesländer">

            <Logo />
  
              
                <label id="stats">Stats:</label>
                <select id="stats" name="stats">

                    <option value="Baden-Württemberg">Baden-Württemberg </option>
                    <option value="Bayern">Bayern </option>
                    <option value="Berlin">Berlin</option>
                    <option value="Brandenburg">Brandenburg </option>
                    <option value="Bremen">Bremen</option>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Hessen">Hessen</option>
                    <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                    <option value="Niedersachsen">Niedersachsen</option>
                    <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                    <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                    <option value="Saarland">Saarland</option>
                    <option value="Sachsen">Sachsen</option>
                    <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                    <option value="Schleswig-Holstein">Schleswig-Holstein </option>
                    <option value="Thüringen">Thüringen</option>

                </select>
            <button>ZumBundesländerStats</button>
        </div>
    )
}

export default ZumBundesländer