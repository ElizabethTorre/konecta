import { controllerRegister } from '../controller.js';

export const viewRegister = () => {
  const registerContainer = document.createElement('div');
  const registerTemplate = `  
    <img class="logo" src="../img/circlenutri.png" alt="logo de la web foods kids"/>
    <form id="screen-register" class="flex-form">
    <img class="img" src="../img/logo1.png" alt="logo de la web food kids"/>
      <h1 class="welcome2">- Registro -</h1>
      <input class="inputs" type="text" name="DNI/Carné de extranjería" id="dni" placeholder="DNI/Carné de extranjería">
      <input class="inputs" type="email" name="Correo Institucional" id="email" placeholder="Email">
      <input class="inputs" type="password" name="password" id="password" placeholder="Contraseña">
      <input class="inputs" type="password" name="second-password" id="second-password" placeholder="Repetir contraseña">
      <p class="obligatorio">Campos obligatorios (*)</p>
      <button class="btn-login" name="button" type="submit" id="registrar">ACTIVAR CUENTA</button>
      <a href="">o Iniciar sesión</a>
      <a href="">Olvidé mi contraseña </a>
      <p class="error" id="error"></p>
    </form>`;
  registerContainer.innerHTML = registerTemplate;
  registerContainer.classList.add('center');

  const buttonLog = registerContainer.querySelector('#registrar');
  buttonLog.addEventListener('click', () => {
    controllerRegister();
  });
  return registerContainer;
};
