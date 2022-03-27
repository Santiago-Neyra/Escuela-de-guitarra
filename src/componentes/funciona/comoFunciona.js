import "../funciona/comoFunciona.css"
export const ComoFunciona=()=>{
return(
<div className="como-funciona-container" id="comoFunciona">
    <div className="col-8 m-auto" >
    <div className="row">
        <div className="col-lg-6 titulo-como-funciona-container">
        <div className="container-pack-titulo">
        <div className="item"></div>
        <h2 className="titulo-como-funciona ">¿Cómo Funciona?</h2>
        <p style={{color:"white"}}>EDG es una escuela de música online para aprender a tocar la guitarra que funciona a través de lecciones en vídeo a la carta. Suscríbete y accede de forma inmediata a más de 500 vídeos repartidos en cursos, ejercicios, repertorio y muchos más contenidos.

Te enseñamos el camino más fácil y ameno para mejorar con tu guitarra, con un método sin rodeos y con ejemplos claros que puedes poner en práctica inmediatamente</p>
<div className="button-container">
<button>Leer más</button></div>
</div>
        </div>
        <div className="col-lg-6 video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CRYVhuj_jKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
</div>
</div>
</div>

)

}
