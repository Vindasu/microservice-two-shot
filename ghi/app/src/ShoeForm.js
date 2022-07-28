import React from 'react';
import { renderMatches } from 'react-router-dom';

class ShoeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            manufacturer: '',
            model_name: '',
            color: '',
            picture_url: '',
            bins: [],
        };
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
        this.handleModelNameChange = this.handleModelNameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
        this.handleBin = this.handleBinChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.bins;
        const url = 'http://localhost:8080/api/shoes_rest/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newShoe = await response.json();
            const cleared = {
                manufacturer: '',
                model_name: '',
                color: '',
                picture_url: '',   
                bins: [],
            };
            this.setState(cleared);
        }
    }

    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer: value})
    }

    handleModelNameChange(event) {
        const value = event.target.value;
        this.setState({model_name: value})
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
    }

    handlePictureUrlChange(event) {
        const value = event.target.value;
        this.setState({picture_url: value})
    }

    handleBinChange(event) {
        const value = event.target.value;
        console.log("event: ", event);
        console.log("event.target: ", event.target);
        console.log("value: ", value);
        this.setState({bin: value})
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/bins/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({bins: data.bins})
        }
    }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new shoe</h1>
                <form onSubmit={this.handleSubmit} id="create-shoe-form">
                <div className="form-floating mb-3">
                    <input value={this.state.manufacturer} onChange={this.handleManufacturerChange} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                    <label htmlFor="Manufacturer">Manufacturer</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.style_name} onChange={this.handleModelNameChange} placeholder="Model name" required type="text" name="model_name" id="model_name" className="form-control" />
                    <label htmlFor="style_name">Style name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.color} onChange={this.handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.picture_url} onChange={this.handlePictureUrlChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture URL</label>
                </div>
                <div className="mb-3">
                    <select value={this.state.bin} onChange={this.handleBinChange} required name="bin" id="bin" className="form-select">
                    <option value="">Choose a bin</option>
                    {this.state.bins.map(bin => {
                        return (
                        <option key={bin.id} value={bin.href}>
                            {bin.closet_name}
                        </option>
                        );
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default ShoeForm;
