import React, { Component } from 'react';
import { StatusBar, View, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, TextInput, Button } from '../../Components/Kit';
import styles from './ConfirmStyle';

const radio_props = [
    {label: '0 - 1.000', value: 0 },
    {label: '1.000 - 2.000', value: 1 },
    {label: '2.000 - 3.000', value: 2 },
    {label: '- 3.000 - 4.000', value: 3 },
    {label: '- Mehr als 4.000', value: 4 },
];

class Confirm extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        phone: PropTypes.number.isRequired,
        salaryType: PropTypes.number.isRequired,
        navigation: PropTypes.func.isRequired,
        submitConnect: PropTypes.func.isRequired,
    };

    search = ()=> {
        const {navigation} = this.props;
        navigation.navigate('Result')
    };

    render() {
        const {name, email, phone, salaryType, navigation} = this.props;

        return (
            <View style={styles.container}>
               <View style={styles.answerContainer}>
                   <Text style={styles.headerTxt}>
                       Full name :
                   </Text>
                   <Text style={styles.answer}>
                       {name}
                   </Text>
               </View>
                <View style={styles.answerContainer}>
                    <Text style={styles.headerTxt}>
                        email :
                    </Text>
                    <Text style={styles.answer}>
                        {email}
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                    <Text style={styles.headerTxt}>
                        Phone number :
                    </Text>
                    <Text style={styles.answer}>
                        {phone}
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                    <Text style={styles.headerTxt}>
                        Your Salary :
                    </Text>
                    <Text style={styles.answer}>
                        {radio_props.map((item) => {
                            if( item.value === salaryType) {
                                return item.label
                                }
                            })}
                    </Text>
                </View>
                <Button style={styles.button} onPress={()=>{navigation.pop()}}>
                    edit my Information
                </Button>
                <Button style={styles.successButton} onPress={this.search}>
                    ok! find me a house
                </Button>
            </View>
        );
    }
}
export default connect(
    state => ({
        name: state.user.name,
        email: state.user.email,
        phone: state.user.phone,
        salaryType: state.user.salaryType,
    }), {
    }
)(Confirm)