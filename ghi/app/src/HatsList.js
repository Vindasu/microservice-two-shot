import React, { useState } from 'react';
import App from './App';

function HatsList() {
  const [hats, setHats] = useState([])
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Hat Fabric</th>
          <th>Hat Style</th>
          <th>Hat Color</th>
          <th>Hat Picture</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {hats.map(hat => {
          return (
            <tr key={hat.id}>
              <td>{ hat.fabric }</td>
              <td>{ hat.style_name }</td>
              <td>{ hat.color }</td>
              {/* <td>
              <img src={hat.picture_url} className="" alt= "..."></img>
              </td> */}
              <td>{ hat.picture_url }</td>
              <td>{ hat.location }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
  
export default HatsList;
  