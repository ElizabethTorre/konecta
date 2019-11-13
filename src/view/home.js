import { controllerExit, createPost, changeRoute } from '../controller.js';
// import { colaborador } from '../model/model-firebase.js';
// import { currentUser } from "../model/model-firebase.js";
import { viewPosts } from './post.js';
import { currentUser } from '../model/model-firebase.js';
import { viewOportunidad } from './oportunidad.js';
import { viewMisPostulaciones } from './mispostulaciones.js';
import { viewOporColaboradores } from './oportunidadesColaborador.js';
import { viewOportunidadesrh } from './oportunidadesrh.js';

const headerPost = () => {
  const contentHeaderPost = document.createElement('div');
  contentHeaderPost .innerHTML = '';
  const contentHeaderPostTemplate = `
      <a id="atras"><img class="marginFlecha" src="../img/flecha.png"/></a>
      <label class="letraHeader">ANALISTA DE CDG - CAPACITACIÓN</label>
      <img class="img2" src="../img/ring.png"/>`;

      contentHeaderPost .innerHTML = contentHeaderPostTemplate;
      contentHeaderPost.classList.add('flex-headerPost');
      const atras = contentHeaderPost.querySelector('#atras');
      // atras.addEventListener('click', () => {
      //   query.forEach(doc => {
      //     main.appendChild(viewPosts(doc));
      //   })
      // })
    return contentHeaderPost;
}
export const headerPost1 = (string) => {
  const contentHeaderPost = document.createElement('div');
  contentHeaderPost .innerHTML = '';
  const contentHeaderPostTemplate = `
      <a id="atras"><img class="marginFlecha margin-flecha" src="../img/flecha.png"/></a>
      <label class="letraHeader ">${string}</label>
   `;
      contentHeaderPost .innerHTML = contentHeaderPostTemplate;
      contentHeaderPost.classList.add('flex-headerPost');
    return contentHeaderPost;
} 


export const viewHome = (query) => {
  const homeContainer = document.createElement('div');
  homeContainer.innerHTML = '';
  
  const homeTemplate = `  
  <header id="header">
    <div class="logo-bars">
    <label id="imagen-perfil" for="toggle"><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil extraida del email, google o facebook del usuario"/></label>
    <li><input type="search" class="search"></li>
    <li><img class="img2" src="../img/ring.png"/></li>
    </div>
    <input type="checkbox" class="hide" id="toggle">  
    <nav class="colorPrincipal navbar"> 
      <ul class="main-nav flex">

        <li class="hide" id="perfil-add"><a><img class="img-perfil" src="../img/Oval.png" alt="foto de perfil"/> Gestión humana </a></li>
        <li><a href=""><img class="img-margin" src="../img/notificacion.png"/>Notificaciones</a></li>
        <li><a href="#/mispostulaciones"><img class="img-margin" src="../img/resumen1.png"/>Postulaciones</a></li>
        <li><a href="#/postulantes"><img class="img-margin" src="../img/oportunidades1.png"/>Oportunidades</a></li>
        <li><a href="#/login"><img class="img-margin" src="../img/chat1.png"/>Salir</a></li>
        <li><a href="#/home" id="cerrar"></a></li>
      </ul>
    </nav> 
  </header>
  <main id="main">
  </main>
  <footer id="footer">
    
      <p id="home"><a class="registro" href="#/home"><img src="../img/home.png"/></a><br>Inicio</p>
      <p class="hide" id="option-rrhh"><a class="registro" ><i class="fa fa-plus-circle more-post" aria-hidden="true"></i></a><br>Nueva oportunidad</p>

      <p id="option-col" ><a class="registro" ><img src="../img/resumen.png"/></a><br>Mis Postulaciones</p>
      <p id="oportunidades"><a class="registro"><img src="../img/oportunidades.png"/></a><br>Oportunidades</p>
      
      <p><a href="#/login" id="cerrar" class="btn-salir"><img src="../img/chat.png"/><br>Salir</a></p>

      
</footer>`;
  homeContainer.innerHTML = homeTemplate;
  homeContainer.classList.add('container-home');

  const exit = homeContainer.querySelector('#cerrar');
  const buttonCompartir = homeContainer.querySelector('#compartir');
  const main = homeContainer.querySelector('#main');
  const header = homeContainer.querySelector('#header');

  const home = homeContainer.querySelector('#home');

  exit.addEventListener('click', controllerExit);


  query.forEach(doc => {
    main.appendChild(viewPosts(doc));
  })

  const addUser = homeContainer.querySelector('#perfil-add');
  const rrhh = homeContainer.querySelector('#option-rrhh');
  const col = homeContainer.querySelector('#option-col');
  const btnOportunidades = homeContainer.querySelector('#oportunidades');

  // const misPostulations = homeContainer.querySelector('#mis-postulaciones');

  if (currentUser().email.slice(0, 8) === '77921150' || currentUser().email.slice(0, 8) === '46694326') {
    addUser.classList.remove('hide');
  } else {
    addUser.classList.add('hide');

  }

   btnOportunidades.addEventListener('click', () => {
    if (currentUser().email.slice(0, 8) === '77921150' || currentUser().email.slice(0, 8) === '46694326') {
      main.innerHTML = '';
      main.appendChild(viewOportunidadesrh());
    
    } else {
      main.innerHTML = '';
      header.innerHTML='';
     main.appendChild(viewOporColaboradores());
     header.appendChild(headerPost1('Oportunidades'));
    }

  }) 

  addUser.addEventListener('click', () => {
    rrhh.classList.remove('hide');
    col.classList.add('hide');
  })
  col.addEventListener('click', () => {
    main.innerHTML='';
    header.innerHTML='';
    main.appendChild(viewMisPostulaciones());
    header.appendChild(headerPost1('Mis postulaciones'));
  })
 rrhh.addEventListener('click', () => {
    main.innerHTML = '';
    main.appendChild(viewOportunidad());
  }) 

  home.addEventListener('click', () => {
    main.innerHTML = '';
    main.appendChild(viewHome(query));
  })

  return homeContainer;
};

