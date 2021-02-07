import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import EditComponent from './EditComponent';
import { Grid, GridCell, GridRow } from '@rmwc/grid';

class Results extends Component {
    render() {
        return (
            <div className="main-form">
                <hr /><br />
                <div className="form">
                    <Grid>
                    {/* {this.props.results.map((result) => <Result key={result.id} result={result} />)} */}
                    {this.props.results.map((result) => (
                        <GridCell phone={12} tablet={12} desktop={4} span={4}>
                        <div key={result.id}>
                            {result.editing ? <EditComponent result={result} key={result.id} /> :
                                <Result key={result.id} result={result} />}
                        </div>
                        </GridCell>
                    ))}
                    </Grid>
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