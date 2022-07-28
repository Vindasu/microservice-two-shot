import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);

async function loadShoes() {
const response = await fetch('http://localhost:8080/api/shoes_rest/');
if (response.ok) {
    const data = await response.json();
    root.render(
    <React.StrictMode>
        <App shoes={data.shoes} />

    </React.StrictMode>
    );
} else {
    console.error(response);
}
}
loadShoes();


function ShoesList(props) {
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
        {props.shoes.map(shoe => {
            return (
            <tr key={shoe.id}>
                <td>{ shoe.manufacturer }</td>
                <td>{ shoe.model_name }</td>
                <td>{ shoe.color }</td>
                <td>
                <img src={hat.picture_url} className="" alt= "..."></img>
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
