import React, { Component, useState } from 'react';
import 'rmwc/dist/styles';
import { Button } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';
import { Dialog, DialogContent } from '@rmwc/dialog';
import { connect } from 'react-redux';
import './index.css';

class MForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries: [
                { name: 'Saudi Arabia', cites: ['Riyadh', 'Jeddah', 'Dammam'] },
                { name: 'USA', cites: ['California', 'Florida', 'Virginia'] },
            ],
            selectedCountry: 'Saudi Arabia',
            open: false,
            name: '',
            address: '',
            PC: '',
            PT: '',
            PTN: '',
            PGN: '',
            PMN: '',
            PD: '',
            PED: ''
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
        this.setState({ selectedCountry: e.target.value });
    }

    NameChange = (e) => {
        this.setState({name: e.target.value})
    }

    AddressChange = (e) => {
        this.setState({address: e.target.value})
    }

    PCChange = (e) => {
        this.setState({PC: e.target.value})
    }

    PTChange = (e) => {
        this.setState({PT: e.target.value})
    }

    PTNChange = (e) => {
        this.setState({PTN: e.target.value})
    }

    PGNChange = (e) => {
        this.setState({PGN: e.target.value})
    }

    PMNChange = (e) => {
        this.setState({PMN: e.target.value})
    }

    PDChange = (e) => {
        this.setState({PD: e.target.value})
    }

    PEDChange = (e) => {
        this.setState({PED: e.target.value})
    }

    openDialog = () => {
        this.setState({ open: true });
    }

    clearInputs = () => {
        this.setState({name: ''});
        this.setState({address: ''});
        this.setState({PC: ''});
        this.setState({PT: ''});
        this.setState({PTN: ''});
        this.setState({PGN: ''});
        this.setState({PMN: ''});
        this.setState({PD: ''});
        this.setState({PED: ''});
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

                                    <TextField required fullwidth label="Enter Name" inputRef={(input) => this.getName = input} onChange={this.NameChange}/>
                                    <br /><br />

                                    <TextField required textarea fullwidth label="Enter Address" inputRef={(input) => this.getAddress = input} onChange={this.AddressChange} />
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Postal Code" inputRef={(input) => this.getPC = input} onChange={this.PCChange} />
                                    <br /><br />
                                </div>

                                <h3>Device</h3>
                                <hr /><br />
                                <div className="form">
                                    <select required ref={(input) => this.getProducType = input} onChange={this.PTChange} >
                                        <option value="" disabled selected>Select Product Type</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Product Trade Name" inputRef={(input) => this.getProductTradeName = input} onChange={this.PTNChange} />
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Product Generic Name" inputRef={(input) => this.getProductGenericName = input} onChange={this.PGNChange} />
                                    <br /><br />

                                    <TextField required fullwidth label="Enter Product Model Number" inputRef={(input) => this.getProductModelNumber = input} onChange={this.PMNChange} />
                                    <br /><br />

                                    <TextField required textarea outlined fullwidth label="Enter Product Description" inputRef={(input) => this.getProductDescription = input} onChange={this.PDChange} />
                                    <br /><br />

                                    <TextField required fullwidth label="Product Exipration Date" type="date" inputRef={(input) => this.getProductExiprationDate = input} onChange={this.PEDChange} />
                                    <br /><br />
                                </div>

                                <Button className='btn' label="Add Device" disabled={!this.state.name || !this.state.address || !this.state.PC || !this.state.PT ||
                                 !this.state.PTN || !this.state.PGN || !this.state.PMN || !this.state.PD || !this.state.PED } outlined onClick={() => this.setState({ open: false })} />
                                
                                <br /><br />

                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                <div className='btn-add'>
                <Button className='btn' raised onClick={() => {this.clearInputs()}}>
                    Add
                </Button>
                </div>
            </div >
        );
    }
}

export default connect()(MForm);