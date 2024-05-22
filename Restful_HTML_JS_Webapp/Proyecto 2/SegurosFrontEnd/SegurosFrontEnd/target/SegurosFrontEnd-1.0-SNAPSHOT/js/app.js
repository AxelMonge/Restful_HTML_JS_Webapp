class App{
  dom;
  modal; // login modal
  
  registerModal //register modal
  
  state;  // state variables: if any
  
  countries; // Countries view

  constructor(){
    this.state={};
    this.dom=this.render(); 
    this.modal = new bootstrap.Modal(this.dom.querySelector('#app>#modal'));
    this.registerModal = new bootstrap.Modal(this.dom.querySelector('#app>#registerModal'));
    this.dom.querySelector('#app>#modal #apply').addEventListener('click',e=>this.login());
    this.dom.querySelector('#app>#registerModal #registerConfirm').addEventListener('click',e=>this.register());
    this.renderBodyFiller();
    this.renderMenuItems();
    this.countries = new Countries();
  }
  
  render=()=>{
    const html= `
            ${this.renderMenu()}
            ${this.renderBody()} 
            ${this.renderFooter()}
            ${this.renderModal()}
        `;
       var rootContent= document.createElement('div');
       rootContent.id='app';
       rootContent.innerHTML=html;
       return rootContent;
  }
  
   renderMenu=()=>{
    return `
          <header class="bg-dark text-light" id="menu">
              <div class="container d-flex justify-content-between align-items-center py-3">
                <div class="logo">
                  <img src="images/logo.png" alt="Logo" style="max-width: 150px;" class="logo-image rounded-circle">
                </div>
                <nav class="navbar navbar-expand-lg navbar-dark" id="menuNav">
                  <div class="collapse navbar-collapse" id="menuItems">
                  </div>
                </nav>
              </div>
            </header>
        `;
  }
  
   renderBody=()=>{
    return `
        <div id="body">   
        </div>          
    `;
  }

   renderFooter=()=>{
    return `
        <footer class="footer mt-auto bg-dark text-white fixed-bottom" style="padding: 20px 0;">
          <div class="container text-center">
            <div class="row">
              <div class="col-md-4">
                <p class="mb-0">Seguros Infinito</p>
              </div>
              <div class="col-md-4">
                <p class="mb-0">
                  <a href="#" class="text-white"><i class="fab fa-twitter fa-sm"></i></a>
                  <a href="#" class="text-white"><i class="fab fa-facebook fa-sm"></i></a>
                  <a href="#" class="text-white"><i class="fab fa-instagram fa-sm"></i></a>
                </p>
              </div>
              <div class="col-md-4">
                <p class="mb-0">©2023</p>
              </div>
            </div>
          </div>
        </footer>

    `;
  }      

   renderModal=()=>{
    return `
        <div id="modal" class="modal fade" tabindex="-1">
          <div class="modal-dialog" style="height: 600px;">
            <div class="modal-content bg-dark text-light">
              <div class="modal-header">
                <img class="img-circle" id="img_logo" src="images/logo.png" style="max-width: 50px; max-height: 50px" alt="logo">
                <span style='margin-left:4em;font-weight: bold;'>Iniciar sesión</span>
                <button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form id="form">
                <div class="modal-body">
                  <div class="input-group mb-3">
                    <span class="input-group-text bg-dark text-light"><i class="fas fa-user"></i></span>
                    <input type="text" class="form-control bg-dark text-light" id="username" name="usuario">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text bg-dark text-light"><i class="fas fa-lock"></i></span>
                    <input type="password" class="form-control bg-dark text-light" id="password" name="contraseña">
                  </div>
                </div>
                <div class="modal-footer justify-content-center">
                  <button id="apply" type="button" class="btn btn-primary click-animation">Iniciar sesión</button>
                </div>
                <div class="text-center mb-3">
                  <span style="font-style: italic; color: lightgray;">¿No tiene cuenta? ... </span>
                </div>
                <div class="d-flex justify-content-center">
                  <a id="register" class="btn btn-info hover-animation click-animation" style="background-color: white; color:red; border:1px solid red; margin-bottom:10px;" href="#">Regístrese aquí</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div id="registerModal" class="modal fade" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content bg-dark text-light">
              <div class="modal-header">
                <img class="img-circle" id="img_logo" src="images/logo.png" style="max-width: 50px; max-height: 50px" alt="logo">
                <span style='margin-left:4em;font-weight: bold;'>Registro</span>
                <button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form id="registerForm">
                <div class="modal-body">
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Cédula</label>
                    <input type="text" class="form-control bg-dark text-light" id="cedula" name="cedula" placeholder="Ingrese su identificación" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Nombre de Usuario</label>
                    <input type="text" class="form-control bg-dark text-light" id="usuario" name="usuario" placeholder="Ingrese su nombre de usuario" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Contraseña</label>
                    <input type="password" class="form-control bg-dark text-light" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Nombre</label>
                    <input type="text" class="form-control bg-dark text-light" id="nombre" name="nombre" placeholder="Ingrese su nombre" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Teléfono</label>
                    <input type="text" class="form-control bg-dark text-light" id="telefono" name="telefono" placeholder="Ingrese su número de teléfono" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Correo Electrónico</label>
                    <input type="email" class="form-control bg-dark text-light" id="correo" name="correo" placeholder="Ingrese su correo electrónico" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Número de Tarjeta</label>
                    <input type="text" class="form-control bg-dark text-light" id="numero" name="numeroTarjeta" placeholder="Ingrese su número de tarjeta" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">Fecha de Vencimiento</label>
                    <input type="month" class="form-control bg-dark text-light" id="vencimiento" name="fechaVencimiento" placeholder="Ingrese la fecha de vencimiento de la tarjeta" required>
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text bg-dark text-light">CVC</label>
                    <input type="text" class="form-control bg-dark text-light" id="cvc" name="cvc" placeholder="Ingrese el código CVC de su tarjeta" required>
                  </div>
                </div>
                <div class="modal-footer justify-content-center">
                  <button id="registerConfirm" type="submit" class="btn btn-primary click-animation">Confirmar Registro</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    `;
  }

   renderBodyFiller = () => {
      const html = `
      <br><br>
        <div id='bodyFiller' class="text-center">
          <img src="images/grandImage.gif" class="img-fluid rounded-circle" style="max-width: 400px;" alt="Imagen Grande">
          <div style="margin-top: 20px;">
            <h2>Por qué elegir nuestro seguro automovilístico?</h2>
            <p>
              En nuestra empresa, nos preocupamos por tu seguridad y tranquilidad. Nuestro seguro automovilístico ofrece una amplia cobertura y beneficios que te brindan la protección necesaria en caso de cualquier eventualidad en la carretera.
            </p>
            <p>
              Con nuestro seguro, obtendrás asistencia en carretera las 24 horas, atención personalizada, reparaciones y servicios de calidad, además de una rápida y sencilla gestión de reclamos. Nos enfocamos en brindarte una experiencia satisfactoria y confiable.
            </p>
            <p>
              Protege tu vehículo y a ti mismo/a con nuestro seguro automovilístico. No te arriesgues y viaja con la tranquilidad que mereces. ¡Contáctanos hoy mismo y descubre por qué somos la mejor opción!
            </p>
          </div>
        </div>
      `;
      this.dom.querySelector('#app>#body').replaceChildren();
      this.dom.querySelector('#app>#body').innerHTML = html;
    }


    renderMenuItems=()=>{
        var html='';
        if(globalstate.user===null){
            html+=`
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" id="login" href="#">Iniciar Sesión</a>
                    </li>
                </ul>
            `;
        }else{
            if(globalstate.user.tipo==='Cliente'){
                html+=`
                    <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" id="polizas" href="#">Pólizas</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Perfil
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" id="editar" href="#">Editar</a></li>
                        <li><a class="dropdown-item" id="logout" href="#">Salir</a></li>
                      </ul>
                    </li>
                  </ul>
                `;
            }
            if(globalstate.user.tipo==='Administrador'){
                html+=`
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" id="clientes" href="#">Clientes</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="coberturas" href="#">Categorías y Coberturas</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="vehiculos" href="#">Vehículos</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Administrador
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" id="logout" href="#">Salir</a></li>
                      </ul>
                    </li>
                  </ul>
                `;
            }
        };
        this.dom.querySelector('#app>#menu #menuItems').replaceChildren();
        this.dom.querySelector('#app>#menu #menuItems').innerHTML=html;
        //this.dom.querySelector("#app>#menu #menuItems #countries")?.addEventListener('click',e=>this.countriesShow());   
        this.dom.querySelector("#app>#menu #menuItems #login")?.addEventListener('click',e=>this.modal.show());  
        this.dom.querySelector("#app>#menu #menuItems #logout")?.addEventListener('click',e=>this.logout());
        
        this.dom.querySelector("#app>#modal #register")?.addEventListener('click', e => {
          this.modal.hide();
          this.registerModal.show();
        }); 
    
        if(globalstate.user!==null){
            switch(globalstate.user.rol){
                case 'Cliente':
                    this.countriesShow();
                    break;
            }
        }
    }

    countriesShow=()=>{
        this.dom.querySelector('#app>#body').replaceChildren(this.countries.dom);
        this.countries.list();
    }
    
    login = async () => {
      const candidate = Object.fromEntries(new FormData(this.dom.querySelector("#form")).entries());
      console.log(candidate);

      const request = new Request(`${backend}/usuarios/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(candidate)
      });

      try {
        const response = await fetch(request);
        if (!response.ok) {
          errorMessage(response.status);
          console.log("ERROR LOGIN");
          return;
        }
        console.log("OK LOGIN");
        const user = await response.json();
        globalstate.user = user;
        this.modal.hide();
        this.renderMenuItems();
      } catch (error) {
        console.error(error);
      }
    }

    
    logout= async ()=>{
        // invoque backend for login
        globalstate.user=null;
        this.dom.querySelector('#app>#body').replaceChildren();
        this.renderBodyFiller();
        this.renderMenuItems();         
        let request = new Request(`${backend}/login`, {method: 'DELETE', headers: { }});
    }
    
    register = async () => {
      const formData = new FormData(this.dom.querySelector("#registerForm"));
      const clientData = Object.fromEntries(formData.entries());
      console.log(clientData);

      const request = new Request(`${backend}/clientes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData)
      });

      try {
        const response = await fetch(request);
        if (!response.ok) {
          errorMessage(response.status);
          console.log(response.status);
          return;
        }
        console.log("register OK");
        this.registerModal.hide(); 
        this.modal.show(); 
      } catch (error) {
        console.error(error);
      }
    }
} 
