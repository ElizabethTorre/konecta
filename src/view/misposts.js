import { readPostulaciones } from '../model/model-firestore.js';
import { currentUser } from "../model/model-firebase.js";
import {changeRoute} from "../controller.js";
export const viewMisPosts = () => {
  console.log('oh')

    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = ''
    let homeTemplate=''
    const dniUser = currentUser();
    const dni=dniUser.email.slice(0,8);

    readPostulaciones(dni,(doc)=>doc.forEach(e => {
      console.log(e)
         
     homeTemplate += `  
        <div class="cards">
          <div class="card-title card-puesto"><h1 class="card-title">${e.puesto}</h1></div>
          <div class="card-body" id="margin-card"><p><span class="spanTitulo">Área : </span>${e.area}</p>
          <p><span class="spanTitulo">Cierre de Convocatoria : </span>${e.cierre}</p></div>
          <div class="btnContainer"><button id="verMasBtn">Ver más</button></div>
        </div>`;
  
  homeContainer.innerHTML = homeTemplate;
  homeContainer.classList.add('flex-post');
  homeContainer.querySelector('#verMasBtn').addEventListener('click', ()=>{changeRoute("#/detallesMisPostulacionesActuales")})
}));

    return homeContainer;
  };