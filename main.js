//import {LISTA} from "./adatok.js"
import {CSALAD} from "./adatok.js"
//import ListaMegjelenit from "./megjelenit.js";
import TablaMegjelenit from "./tablaMegjelenit.js";
$(function(){
const szuloElem=$(".tartalom")
// new ListaMegjelenit(LISTA, szuloElem)
new TablaMegjelenit(CSALAD, szuloElem)
});


