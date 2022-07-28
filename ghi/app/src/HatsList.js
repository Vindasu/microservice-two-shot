function HatsList(props) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Hat Fabric</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {props.hats.map(hat => {
            return (
              <tr key={hat.id}>
                <td>{ hat.fabric }</td>
                <td>{ hat.location }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  
  export default HatsList;
  