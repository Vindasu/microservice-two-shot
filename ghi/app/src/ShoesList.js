import React, { useEffect } from 'react';
import App from './App';
import {useState} from 'react'

// async function loadHats() {
//   
//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App hats={data.hats} />

//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// loadHats();

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

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Shoe MFG</th>
                <th>Shoe Model Name</th>
                <th>Shoe Color</th>
                <th>Shoe Picture</th>
                <th>Bins</th>
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
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default ShoesList;

