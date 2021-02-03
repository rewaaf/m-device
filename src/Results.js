import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import EditComponent from './EditComponent';

class Results extends Component {
    render() {
        return (
            <div className="main-form" style={{ width: '500px' }}>
                <hr /><br/>
                <div className="form">
                    {/* {this.props.results.map((result) => <Result key={result.id} result={result} />)} */}
                    {this.props.results.map((result) => (
                    <div key={result.id}>
                        {result.editing ? <EditComponent result={result} key={result.id} /> :
                            <Result key={result.id} result={result} />}
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state
    }
}

export default connect(mapStateToProps)(Results);