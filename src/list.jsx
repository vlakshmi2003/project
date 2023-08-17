import React from "react"
import './list.css'
const  list=()=>{
    const Data= require("./data.json")
return(
    <>
    <table className="table">
        <thead className="thead">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
        </tr>
         </thead>
         <tbody className="tbody">  
    {Data.map((item,index)=>{
        console.log(item,index);
        return(
            <>
                <tr>
                    <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.username}</td>
                   <td>{item.email}</td>
                </tr>
            </>
        )
    })}
    </tbody>
    </table>
      </>
)
}
export default list;