import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@rmwc/button'

class Result extends Component {
    render() {
        return (
            <div>
                <h3 style={{ textAlign: 'center', color: 'blueviolet' }}>Device Information</h3>
                <p><span>Name:</span> {this.props.result.name}</p>
                <p><span>Country:</span> {this.props.result.Country}</p>
                <p><span>City:</span> {this.props.result.City}</p>
                <p><span>Address:</span> {this.props.result.address}</p>
                <p><span>Postal Code:</span> {this.props.result.PC}</p>
                <p><span>Product Type:</span> {this.props.result.productType}</p>
                <p><span>Trade Name:</span> {this.props.result.productTradeName}</p>
                <p><span>Generic Name:</span> {this.props.result.ProductGenericName}</p>
                <p><span>Model Number:</span> {this.props.result.ProductModelNumber}</p>
                <p><span>Description:</span> {this.props.result.ProductDescription}</p>
                <p><span>Exipration Date:</span> {this.props.result.ProductExiprationDate}</p>
                <Button label="Edit" outlined
                    onClick={() => this.props.dispatch({ type: 'EDIT_DATA', id: this.props.result.id })}
                />
                &nbsp;
                <Button label="Delete" outlined
                    onClick={() => this.props.dispatch({ type: 'DELETE_DATA', id: this.props.result.id })}
                />
                <br/><hr />
            </div>
        );
    }
}
export default connect()(Result);