class TablaMegjelenit {
    constructor(CSALAD, szuloElem) {
      this.CSALAD = CSALAD;
      this.szuloElem = szuloElem;
      //let txt = this.htmlTablaOsszeallit(CSALAD);
      let txt = this.tablazatOsszeallit(CSALAD);
      this.szuloElem.html(txt);
    }
  
  htmlTablaOsszeallit() {
    let txt = "<table><tr>";
    
    for (let index = 0; index < this.CSALAD.length; index++) {
      const element = this.CSALAD[index];
      txt += `<th>${element}</th></tr>`;
    }
    txt += "</table>";
    return txt;
  }
  
  tablazatOsszeallit() {
    let txt2 =
      "<div class=tabla><table><tr><th>Vezetéknév</th><th>Keresztnév</th><th>Utónév</th></tr>";
    for (let index = 0; index < this.CSALAD.length; index++) {
      txt2 += "<tr>";
      for (const key in this.CSALAD[index]) {
        txt2 += `<td>${this.CSALAD[index][key]}</td>`;
      }
      txt2 += "</tr>";
    }
    txt2 += "</table></div>";
    return txt2;
  }
  }
  export default TablaMegjelenit;
  