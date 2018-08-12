import React, { Component } from 'react';
import {
    Picker
} from 'native-base';
import {
    View
} from 'react-native';
import PropTypes from 'prop-types';

let NBPicker = class NBPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: this.props.selectedValue
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        })
    }

    render() {
        return (
            <View>
                <Picker
                    {...this.props}
                    mode={this.props.mode}
                    selectedValue={this.state.selected}
                    onValueChange={(value)=> this.onValueChange(value)}
                >
                    {this.props.children}
                </Picker>
            </View>
        );
    }
}

NBPicker.Item = class Item extends Component {
    render() {
        return(
            <Picker.Item label={this.props.label} value={this.props.value}/>
        )
    }
}

NBPicker.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,
};

NBPicker.defaultProps = {
    label: '',
    mode: 'dropdown'
};

export default NBPicker