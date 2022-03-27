import "../header/header.css"

export const Header=()=>{

    return(
        <div className="header">
          <a className="a-logo" style={{display:"flex"}} class="navbar-brand" href="#"><img style={{height:"80px"}} src="https://i.postimg.cc/cLhjHF5B/guitar-instrument.png" ></img></a>
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid justify-content-center">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><img class="toggle" style={{width:"80px"} }src="https://i.postimg.cc/RCnbxS1m/menu-1.png"></img></span>
    </button>
    <div class="collapse navbar-collapse navv" id="navbarNav">
    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#comoFunciona">¿Cómo funciona?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#planes">Precios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">Contáctanos</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
    )

}