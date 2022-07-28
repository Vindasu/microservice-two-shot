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
                <td>{ shoe.picture_url }</td>
                <td>{ shoe.bin }</td>
            </tr>
            );
        })}
        </tbody>
    </table>
    );
}

export default ShoesList;
