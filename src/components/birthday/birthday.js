import { useEffect, useState } from 'react';
import styles from './birthday.css'
export const Birthday=(props)=>{
    const[table,setTable] = useState([]);

    useEffect(async()=>{
        const response =await fetch('http://localhost:8080/getUserTwoData');
        const stuff = await response.json();
        setTable(stuff);
    },[]);
    return(
        <div className="tableHolder">
            Sort By Name : <input value="name" name="switch" type="radio" onChange={async(e)=>{
                const response =await fetch('http://localhost:8080/sortByName');
                const stuff = await response.json();
                setTable(stuff);
            }}/>
            Sort By Age : <input value="age" name="switch" type="radio" onChange={async(e)=>{
                const response =await fetch('http://localhost:8080/sortByAge');
                const stuff = await response.json();
                setTable(stuff);
                }}/>
        <table>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
            {
            table.map((item,index)=>{
                return(
                     <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.firstName+" "+item.lastName}</td>
                         <td>{item.email}</td>
                        <td>{item.age}</td>
                     </tr>   
                )
                
            })
        }</table>
        </div>
    )
}