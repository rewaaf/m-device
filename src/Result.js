import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@rmwc/button';
import { Card, CardPrimaryAction } from '@rmwc/card';
// import EditComponent from './EditComponent';

class Result extends Component {
    render() {
        return (
            <Card style={{ width: '25rem', padding: '50px', display: 'inline-block' }}>
                <CardPrimaryAction>
            <div>
                <h3>Device Information</h3>
                <p>Name: {this.props.result.name}</p>
                <p>Country: {this.props.result.Country}</p>
                <p>City: {this.props.result.City}</p>
                <p>Address: {this.props.result.address}</p>
                <p>Postal Code: {this.props.result.PC}</p>
                <p>Product Type: {this.props.result.productType}</p>
                <p>Trade Name: {this.props.result.productTradeName}</p>
                <p>Generic Name: {this.props.result.ProductGenericName}</p>
                <p>Model Number: {this.props.result.ProductModelNumber}</p>
                <p>Description: {this.props.result.ProductDescription}</p>
                <p>Exipration Date: {this.props.result.ProductExiprationDate}</p>
                <Button className='btn' label="Edit" outlined
                    onClick={() => this.props.dispatch({ type: 'EDIT_DATA', id: this.props.result.id })}
                />
                &nbsp;
                <Button className='btn' label="Delete" outlined
                    onClick={() => this.props.dispatch({ type: 'DELETE_DATA', id: this.props.result.id })}
                />
            </div>
            </CardPrimaryAction>
            </Card>
        );
    }
}
export default connect()(Result);