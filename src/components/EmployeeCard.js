import React from 'react';
import "./style.css";

function EmployeeCard({id, name, image, occupation, originated}) {
    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td><img alt={name} src={image} /></td>
            <td>{occupation}</td>
            <td>{originated}</td>
        </tr>
    )

    
}

export default EmployeeCard