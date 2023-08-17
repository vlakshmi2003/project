import React, {} from "react";
import "./Conter.css";
class Counterchild extends React.Component {
    render () {
        console.log(this.props);
    const {count,addcount,subcount} =this.props
    return (
        <div className="body">
        <div className="inputbox">
        <div className="app">
        <h1 className= {count >0?"positive":count<0 ?"negative":null }>{count}</h1>
           </div>
            <div className="btn">
                <button onClick={addcount}>+</button>
                <button onClick={subcount}>-</button>
            </div>
            </div>
        </div>
    )
}
}
export default Counterchild;