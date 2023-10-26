export default function MovieCard(props){
    return( 
        <div className="movie">
        <div> 
          <p>{props.film.Year}</p>
        </div> 
        <div> 
          <img src={props.film.Poster !=='N/A' ?props.film.Poster:props.notfound} style={{cursor:"pointer"}}alt ={props.film.Title}/> 
        </div> 
        <div> 
          <span>{props.film.Type}</span> 
          <h3>{props.film.Title}</h3>
        </div>
      </div>
    )
}