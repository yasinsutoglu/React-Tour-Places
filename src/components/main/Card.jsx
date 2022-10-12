
const Card = (props) =>{
    // console.log(props)
    return (
      <div className="card">
        <h1 className="title">{props.title}</h1>
        <img src={props.image} alt="" />
        <div className="card-over">
          <p>{props.desc}</p>
        </div>
      </div>
    );
}

export default Card;