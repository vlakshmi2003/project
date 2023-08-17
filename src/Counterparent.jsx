import React, {useState} from "react";
import Counterchild from "./Counterchild";
const Counterparent =  (props) => {
    const [count, setcount]=useState(0)
    console.log(count ,"value");
    return (
            <div>
                <Counterchild count ={count} addcount={()=>setcount(count+1)}
                subcount={()=>setcount(count-1)} ></Counterchild>
            </div>
    
    )
}
export default Counterparent;