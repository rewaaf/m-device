import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';

class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries: [
                { name: 'Saudi Arabia', cites: ['Riyadh', 'Jeddah', 'Dammam'] },
                { name: 'USA', cites: ['California', 'Florida', 'Virginia'] },
            ],
            selectedCountry: 'Saudi Arabia'
        }
    }

    handleEdit = (e) => {
        e.preventDefault();
        const nameNew = this.getName.value;
        const CountryNew = this.getCountry.value;
        const CityNew = this.getCity.value;
        const addressNew = this.getAddress.value;
        const PCNew = this.getPC.value;
        const productTypeNew = this.getProducType.value;
        const productTradeNameNew = this.getProductTradeName.value;
        const ProductGenericNameNew = this.getProductGenericName.value;
        const ProductModelNumberNew = this.getProductModelNumber.value;
        const ProductDescriptionNew = this.getProductDescription.value;
        const ProductExiprationDateNew = this.getProductExiprationDate.value;
        const data = {
            nameNew,
            CountryNew,
            CityNew,
            addressNew,
            PCNew,
            productTypeNew,
            productTradeNameNew,
            ProductGenericNameNew,
            ProductModelNumberNew,
            ProductDescriptionNew,
            ProductExiprationDateNew
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.result.id, data: data })
    }

    handleChange = (e) => {
        this.setState({ selectedCountry: e.target.value })
    }

    render() {
        let Country = this.state.Countries.filter(Country => {
            return Country.name === this.state.selectedCountry
        })

        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <h3 style={{ color: 'blueviolet' }}>Manufacturer</h3>
                    <hr /><br />

                    <TextField fullwidth label="Enter Name" inputRef={(input) => this.getName = input}
                        defaultValue={this.props.result.name} />
                    <br /><br />

                    {/* <Select type='text' label="Select Country" ref={(input) => this.getCountry = input}  >
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="USA">USA</option>
                            <option value="UAE">UAE</option>
                        </Select> */}

                    {/* <select required ref={(input) => this.getCountry = input} defaultValue={this.props.result.Country}>
                                <option value="" disabled selected>Select Country</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="USA">USA</option>
                                <option value="UAE">UAE</option>
                            </select>
                            <br /><br /><br />

                            <select required ref={(input) => this.getCity = input} defaultValue={this.props.result.City}>
                                <option value="" disabled selected>Select City</option>
                                <option value="Riyadh">Riyadh</option>
                                <option value="Jeddah">Jeddah</option>
                                <option value="Dammam">Dammam</option>
                            </select>
                            <br /><br /><br /> */}

                    <select required defaultValue={this.props.result.Country} ref={(input) => this.getCountry = input}
                         onChange={this.handleChange.bind(this)}>
                        {
                            this.state.Countries.map((country, i) => {
                                return <option>{country.name}</option>
                            })
                        }
                    </select>
                    <br /><br /><br />

                    <select required defaultValue={this.props.result.City} ref={(input) => this.getCity = input}>
                        {
                            Country[0].cites.map((city, i) => {
                                return <option>{city}</option>
                            })
                        }
                    </select>
                    <br /><br /><br />

                    <TextField textarea fullwidth label="Enter Address" inputRef={(input) => this.getAddress = input}
                        defaultValue={this.props.result.address} />
                    <br /><br />

                    <TextField fullwidth label="Enter Postal Code" inputRef={(input) => this.getPC = input}
                        defaultValue={this.props.result.PC} />
                    <br /><br />

                    <br /><br />

                    <h3 style={{ color: 'blueviolet' }}>Device</h3>
                    <hr /><br />
                    <select required ref={(input) => this.getProducType = input} defaultValue={this.props.result.productType}>
                        <option value="" disabled selected>Select Product Type</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    <br /><br />

                    <TextField fullwidth label="Enter Product Trade Name" inputRef={(input) => this.getProductTradeName = input}
                        defaultValue={this.props.result.productTradeName} />
                    <br /><br />

                    <TextField fullwidth label="Enter Product Generic Name" inputRef={(input) => this.getProductGenericName = input}
                        defaultValue={this.props.result.ProductGenericName} />
                    <br /><br />

                    <TextField fullwidth label="Enter Product Model Number" inputRef={(input) => this.getProductModelNumber = input}
                        defaultValue={this.props.result.ProductModelNumber} />
                    <br /><br />

                    <TextField textarea outlined fullwidth label="Enter Product Description" inputRef={(input) => this.getProductDescription = input}
                        defaultValue={this.props.result.ProductDescription} />
                    <br /><br />

                    {/* <Picker /> */}
                    <TextField fullwidth label="Product Exipration Date" type="date" inputRef={(input) => this.getProductExiprationDate = input}
                        defaultValue={this.props.result.ProductExiprationDate} />
                    <br /><br />

                    <br /><br />

                    <Button label="Update" outlined />

                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);