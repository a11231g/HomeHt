import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './InputStyle';
import { Text } from '../index';

export default class InputText extends Component {
    static propTypes = {
        keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad']),
        placeholderTextColor: PropTypes.string,
        autoCorrect: PropTypes.bool,
        input: PropTypes.objectOf(PropTypes.any).isRequired,
        meta: PropTypes.objectOf(PropTypes.any),
        style: PropTypes.objectOf(PropTypes.any),
        secureTextEntry: PropTypes.bool,
        autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
        theme: PropTypes.oneOf(['dark', 'light']),
        themeColor: PropTypes.string,
        placeholder: PropTypes.string,
        multiline: PropTypes.bool,
        numberOfLines: PropTypes.number,
        refName: PropTypes.func,
        underlineColorAndroid: PropTypes.string,
        onFocus: PropTypes.func,
        onChangeText: PropTypes.func,
        returnKeyType: PropTypes.string,
        onSubmitEditing: PropTypes.func,
        onTouchStart: PropTypes.func,
        editable: PropTypes.bool,
        enableDesecure: PropTypes.bool,
        select: PropTypes.bool,
        inputStyle: PropTypes.objectOf(PropTypes.any),
    };

    static defaultProps = {
        keyboardType: 'default',
        editable: true,
        enableDesecure: false,
        theme: 'light',
        select: false,
        autoCorrect: false,
        secureTextEntry: false,
        autoCapitalize: 'none',
        themeColor: 'rgba(255, 255, 255, 0.5)',
        placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
        placeholder: '',
        style: {},
        inputStyle: {},
        multiline: false,
        numberOfLines: 1,
        underlineColorAndroid: 'rgba(255, 255, 255, 0.5)',
        returnKeyType: 'next',
        refName: () => {},
        onSubmitEditing: () => {},
        onTouchStart: () => {}
    };

    state = {
        secureTextEntry: false
    };

    componentDidMount() {
        if (this.props.secureTextEntry) {
            this.setState({ secureTextEntry: true });
        }
    }

    changeSecurity = () => {
        this.setState({ secureTextEntry: !this.state.secureTextEntry });
    };

    render() {
        const {
            keyboardType,
            inputStyle,
            placeholder,
            autoCorrect,
            autoCapitalize,
            placeholderTextColor,
            style,
            multiline,
            enableDesecure,
            numberOfLines,
            underlineColorAndroid,
            onFocus,
            onChangeText,
            editable,
            value,
            meta,
            onTouchStart,
            returnKeyType,
            refName,
            onSubmitEditing,
            select,
            themeColor,
        } = this.props;
        const { secureTextEntry } = this.state;
        const inputStyles = [
            styles.input,
            themeColor !== 'rgba(255, 255, 255, 0.5)' ? { color: '#555' } : {},
            inputStyle,
        ];

        return (
            <View style={[styles.container, style]}>
                {enableDesecure
                    ? <TouchableOpacity
                        style={styles.desecure}
                        onPress={() => {
                            this.changeSecurity();
                        }}>
                        {secureTextEntry
                            ? <Text style={styles.whiteColor}>show</Text>
                            : <Text style={styles.whiteColor}>Hide</Text>
                        }
                    </TouchableOpacity>
                    : null
                }
                <TextInput
                    ref={refName}
                    onSubmitEditing={onSubmitEditing}
                    style={[inputStyles, { borderColor: themeColor }]}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    value={value}
                    editable={editable}
                    onTouchStart={onTouchStart}
                    placeholder={placeholder}
                    autoCorrect={autoCorrect}
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={themeColor}
                    underlineColorAndroid={'transparent'}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onFocus={onFocus}
                    returnKeyType={returnKeyType}
                />
        </View>
        );
    }
}
