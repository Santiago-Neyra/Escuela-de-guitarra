import "../footer/footer.css"

export const Footer=()=>{
return(
    <div className="footer-container row" id="footer">

        <div className="container-form col-lg-6">
            <h2 className="titulo-contactanos" style={{color:"orangered"}}>Contáctanos!</h2>
        <form class="container-inputs" action="https://formsubmit.co/santineyra97@gmail.com" method="POST"  >     
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Nombre y Apellido</span>
  <input type="text" name="Nombre" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
<div class="input-group mb-3">
  <span class="input-group-text"  id="basic-addon1">Email</span>
  <input type="email" name="Email" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
<div class="input-group">
  <span class="input-group-text" id="basic-addon1">Consulta</span>

  <textarea type="text" name="Mensaje" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></textarea>

</div>
<button type="submit" className="button-consulta">Enviar</button>
</form>
</div>  
<div className="col-lg-4 text-footer"> 
<h2 className="titulo-map">Encontranos en: </h2>
<div className="mapa-container">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13917.562810925127!2d-60.651046857551925!3d-32.952266028695846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab16004baa87%3A0xce318d7967c8cf6e!2sShopping%20del%20Siglo!5e0!3m2!1ses-419!2sar!4v1648316461620!5m2!1ses-419!2sar" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>

</div>
<p className="dire">Dirección: Córdoba 1750, Rosario - Santa Fe <br></br> Lunes a viernes 10hs a 18hs</p>

</div>
        
        <div className="container-iconos-footer col-lg-2">
            <h2 className="titulo-redes">Seguinos en nuestras Redes!</h2>
            <div className="unidad-icono"><a target="_blank" href="https://www.facebook.com"><img src="https://i.postimg.cc/xTGT0r0V/facebook-logo-png.png" alt="logo" ></img></a> <span className="nombre-redes">Facebook</span></div>
            <div className="unidad-icono"><a target="_blank" href="https://www.instagram.com"><img src="https://i.postimg.cc/8z1kcy5J/instagram-logo-png.png" alt="logo" ></img></a><span className="nombre-redes">Instagram</span></div>
            <div className="unidad-icono"><a target="_blank" href="https://web.whatsapp.com"><img alt="logo" src="https://i.postimg.cc/BnMSKxLh/whatsapp-logo-png.png" ></img></a><span className="nombre-redes">whatsapp</span></div>
             </div> 
        

    </div>
)

}