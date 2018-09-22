import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TextStyle';

const CustomText = ({
    children,
    type,
    fontFamily,
    style,
    ...reset
}) => (
    <Text style={[
        styles[type],
        styles[`${fontFamily}Font`],
        style]}
    {...reset}
    >
        {children}
    </Text>

);
CustomText.propTypes = {
    type: PropTypes.oneOf(['normal', 'header', 'caption', 'description', 'title', 'subtitle']),
    children: PropTypes.objectOf(PropTypes.any).isRequired,
    style: PropTypes.objectOf(PropTypes.any),
    fontFamily: PropTypes.oneOf(['regular', 'light', 'bold', 'medium', 'ultraLight']),
};

CustomText.defaultProps = {
    type: 'normal',
    style: {},
    fontFamily: 'regular'
};


export default CustomText;
