import React, { useEffect } from 'react';
import App from './App';
import {useState} from 'react'


function ShoesList() {
    const [shoes, setShoes] = useState([])

    const fetchShoes = async () => {
        const url = 'http://localhost:8080/api/shoes_rest/'
        const res = await fetch(url)
        const shoesJSON = await res.json()
        setShoes(shoesJSON.shoes)
    }
    useEffect(() => {
        fetchShoes()
    }, [])

    function handleDelete(id) {
        const url = `http://localhost:8080/api/shoes_rest/${id}/`
        const fetchConfig = {method: 'DELETE'}
        const response = fetch(url, fetchConfig)
        setShoes(shoes.filter(
            function(shoe) {
                return shoe.id !== id;
            }
        ))
        // find hat by id and remove from shoes array
    }


    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Shoe MFG</th>
                <th>Shoe Model Name</th>
                <th>Shoe Color</th>
                <th>Shoe Picture</th>
                <th>Bins</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {shoes.map(shoe => {
                return (
                <tr key={shoe.id}>
                    <td>{ shoe.manufacturer }</td>
                    <td>{ shoe.model_name }</td>
                    <td>{ shoe.color }</td>
                    <td>
                    <img src={shoe.picture_url} className="" alt= "..." width="100" height="100"></img>
                    </td>
                    <td>{ shoe.bin }</td>
                    <td><button variant="outline-danger" onClick={() => handleDelete(shoe.id)}>Delete</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default ShoesList;

