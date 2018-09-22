import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, ActivityIndicator,StatusBar } from 'react-native';
import { Text } from '../index';
import styles from './ButtonStyle';

export default class Button extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'secondary', 'success']),
        children: PropTypes.objectOf(PropTypes.any).isRequired,
        onPress: PropTypes.func,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        style: PropTypes.objectOf(PropTypes.any),
        size: PropTypes.oneOf(['small', 'medium']),
        textStyle:  PropTypes.objectOf(PropTypes.any)
    };

    static defaultProps = {
        loading: false,
        disabled: false,
        type: 'primary',
        style: {},
        textStyle: {},
        size: 'medium',
    };

    handlePress = () => {
        const { loading, onPress, disabled } = this.props;
        if (!loading && !disabled && onPress) {
            onPress();
        }
    };

    renderButton = () => {
        const {
            type,
            disabled,
            loading,
            children,
            style,
            size,
            textStyle
        } = this.props;
        if (disabled) {
            return (<View
                style={[styles.default, styles[type], style, { opacity: 0.4 }]}
            >
                <View >
                    {
                        loading ? <ActivityIndicator size="small" color="#fff" />
                            : <View style={styles.contentWrapper}>
                                <Text style={[styles.text, textStyle]}>{children}</Text>
                            </View>
                    }
                </View>
            </View>);
        }
        return (<TouchableOpacity
            style={[styles.default, styles[type], style]}
            onPress={this.handlePress}
        >
            {
                loading
                    ? <ActivityIndicator size="small" color="#fff" />
                    : <View >
                        <Text style={[styles.text, textStyle]}>{children}</Text>
                    </View>
            }
        </TouchableOpacity>);
    };

    render() {
        return (
            this.renderButton()
        );
    }
}
