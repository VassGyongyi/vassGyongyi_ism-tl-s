class ListaMegjelenit {
  constructor(LISTA, szuloElem) {
    this.LISTA = LISTA;
    this.szuloElem = szuloElem;
    let txt = this.htmlOsszeallit(LISTA);
    this.szuloElem.html(txt);
  }

htmlOsszeallit() {
  let txt = "<ul>";
  for (let index = 0; index < this.LISTA.length; index++) {
    const element = this.LISTA[index];
    txt += `<li>${element}</li>`;
  }
  txt += "<ul>";
  return txt;
}
}
export default ListaMegjelenit;
