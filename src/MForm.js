import React, { Component, useState } from 'react';
import 'rmwc/dist/styles';
import { Button } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';
import { Dialog, DialogActions, DialogButton, DialogContent } from '@rmwc/dialog';
import { connect } from 'react-redux';
import './index.css';

// import { Select } from '@rmwc/select';
// import Picker from './Picker';

class MForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries: [
                { name: 'Saudi Arabia', cites: ['Riyadh', 'Jeddah', 'Dammam'] },
                { name: 'USA', cites: ['California', 'Florida', 'Virginia'] },
            ],
            selectedCountry: 'Saudi Arabia',
            open: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const Country = this.getCountry.value;
        const City = this.getCity.value;
        const address = this.getAddress.value;
        const PC = this.getPC.value;
        const productType = this.getProducType.value;
        const productTradeName = this.getProductTradeName.value;
        const ProductGenericName = this.getProductGenericName.value;
        const ProductModelNumber = this.getProductModelNumber.value;
        const ProductDescription = this.getProductDescription.value;
        const ProductExiprationDate = this.getProductExiprationDate.value;
        const data = {
            id: new Date(),
            name,
            Country,
            City,
            address,
            PC,
            productType,
            productTradeName,
            ProductGenericName,
            ProductModelNumber,
            ProductDescription,
            ProductExiprationDate,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_DATA',
            data
        });
        this.getName.value = '';
        this.getCountry.value = '';
        this.getCity.value = '';
        this.getAddress.value = '';
        this.getPC.value = '';
        this.getProducType.value = '';
        this.getProductTradeName.value = '';
        this.getProductGenericName.value = '';
        this.getProductModelNumber.value = '';
        this.getProductDescription.value = '';
        this.getProductExiprationDate.value = '';
    }

    handleChange = (e) => {
        this.setState({ selectedCountry: e.target.value })
    }

    openDialog = () => {
        this.setState({ open: true });
    }

    render() {
        let Country = this.state.Countries.filter(Country => {
            return Country.name === this.state.selectedCountry
        })

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={evt => {
                        this.setState({ open: false });
                    }}
                    // onClosed={evt => console.log(evt.detail.action)}
                    >
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>

                            <div className="main-form" style={{ width: '500px' }}>
                                <h3>Manufacturer</h3>
                                <hr /><br />

                                <div className="form">

                                    <select required ref={(input) => this.getCountry = input}
                                        value={this.state.selectedCountry} onChange={this.handleChange.bind(this)}>
                                        {
                                            this.state.Countries.map((country, i) => {
                                                return <option>{country.name}</option>
                                            })
                                        }
                                    </select>
                                    <br /><br /><br />

                                    <select required ref={(input) => this.getCity = input}>
                                        {
                                            Country[0].cites.map((city, i) => {
                                                return <option>{city}</option>
                                            })
                                        }
                                    </select>
                                    <br /><br /><br />

                                    <TextField required fullwidth label="Enter Name" inputRef={(input) => this.getName = input} />
                                    <br /><br />

                                    <TextField required textarea fullwidth label="Enter Address" inputRef={(input) => this.getAddress = input} />
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Postal Code" inputRef={(input) => this.getPC = input} />
                                    <br /><br />
                                </div>

                                <h3>Device</h3>
                                <hr /><br />
                                <div className="form">
                                    <select required ref={(input) => this.getProducType = input}>
                                        <option value="" disabled selected>Select Product Type</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Product Trade Name" inputRef={(input) => this.getProductTradeName = input} />
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Product Generic Name" inputRef={(input) => this.getProductGenericName = input} />
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Product Model Number" inputRef={(input) => this.getProductModelNumber = input} />
                                    <br /><br />

                                    <TextField required textarea outlined fullwidth label="Enter Product Description" inputRef={(input) => this.getProductDescription = input} />
                                    <br /><br />

                                    {/* <Picker /> */}
                                    <TextField required fullwidth label="Product Exipration Date" type="date" inputRef={(input) => this.getProductExiprationDate = input} />
                                    <br /><br />
                                </div>

                                <Button className='btn' label="Add Device" outlined onClick={() => this.setState({ open: false })} />
                                
                                <br /><br />

                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                <div className='btn-add'>
                <Button className='btn' raised onClick={() => this.setState({ open: true })}>
                    Add
                </Button>
                </div>
            </div >
        );
    }
}

export default connect()(MForm);