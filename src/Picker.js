import React, {Component} from 'react';
import moment from 'moment';
import {DatetimePickerTrigger} from 'rc-datetime-picker';

class Picker extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleChange = (value) => {
    this.setState({
      dateValue: value
    });
  }

  render() {
    const shortcuts = {
      'Today': moment(),
      'Yesterday': moment().subtract(1, 'days'),
      'Clear': ''
    };

    return (
      <DatetimePickerTrigger
        shortcuts={shortcuts} 
        moment={this.state.moment}
        onChange={this.handleChange}>
        <input type="text" value={this.state.dateValue.format('YYYY-MM-DD HH:mm')} readOnly />
      </DatetimePickerTrigger>
    );
  }
}

export default Picker;
