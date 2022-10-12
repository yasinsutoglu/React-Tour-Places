import "./Main.scss"
import {data} from "../../helper/data";
import Card  from "./Card"


const Main = () =>{
    // console.log(data);
    return(
        <div className="main">
            {data.map((item)=>{
                return (
                  <Card {...item}/>
                );
            })}
        </div>
    )
}

export default Main;