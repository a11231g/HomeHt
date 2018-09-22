import React, { Component } from 'react';
import { StatusBar, View, Keyboard } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, TextInput, Button } from '../../Components/Kit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './Registerstyle';
import { submitUser as submit } from "../../Redux/Modules/user";
import { notBeEmpty, emailValidate } from '../../Utils/Validate';

const radio_props = [
    {label: '0 - 1.000', value: 0 },
    {label: '1.000 - 2.000', value: 1 },
    {label: '2.000 - 3.000', value: 2 },
    {label: '- 3.000 - 4.000', value: 3 },
    {label: '- Mehr als 4.000', value: 4 },
];
class Register extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        phone: PropTypes.number.isRequired,
        salaryType: PropTypes.number.isRequired,
        navigation: PropTypes.func.isRequired,
        submitConnect: PropTypes.func.isRequired,
    };

    componentWillMount() {
        const {name, email, phone, salaryType} = this.props;
        console.log(name);
        StatusBar.setBarStyle('dark-content', false);
        this.setState({
            unsavedName: name,
            unsavedEmail: email,
            unsavedSalaryType: salaryType,
            unsavedPhone: phone
        })
    }

    state = {
        unsavedName: '',
        unsavedEmail: '',
        unsavedSalaryType: 0,
        unsavedPhone: ''

    };

    submit = () => {
        const {
            unsavedName,
            unsavedEmail,
            unsavedPhone,
            unsavedSalaryType
        } = this.state;
        this.props.submitConnect(
            unsavedName,
            unsavedEmail,
            unsavedPhone,
            unsavedSalaryType
        )
    };

    render() {
        const {loading} = this.props;
        const {
            unsavedName,
            unsavedEmail,
            unsavedPhone,
            unsavedSalaryType
        } = this.state;


        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <TextInput
                        placeholder={'Full name'}
                        value={unsavedName}
                        themeColor={'#777'}
                        returnKeyType={'next'}
                        onChangeText={unsavedName => this.setState({ unsavedName })}
                        onSubmitEditing={() => {
                            this._mail.focus();
                            notBeEmpty(this.state.unsavedName, 'First Name');
                        }}
                    />
                    <TextInput
                        placeholder={'Email Address'}
                        refName={ref => this._mail = ref}
                        value={unsavedEmail}
                        keyboardType={'email-address'}
                        onChangeText={unsavedEmail => this.setState({ unsavedEmail })}
                        themeColor={'#777'}
                        onSubmitEditing={() => {
                            this._phone.focus();
                            emailValidate(this.state.unsavedEmail);
                        }}
                    />
                    <TextInput
                        placeholder={'phone number'}
                        value={unsavedPhone}
                        refName={ref => this._phone = ref}
                        keyboardType={'phone-pad'}
                        onChangeText={unsavedPhone => this.setState({ unsavedPhone })}
                        themeColor={'#777'}
                        onSubmitEditing={() => {
                            notBeEmpty(this.state.unsavedPhone, 'Phone number');
                        }}
                    />
                    <View style={styles.radioContainer}>
                        <Text style={styles.caption}>Choose your salary range</Text>
                        <RadioForm
                            radio_props={radio_props}
                            animation={false}
                            initial={unsavedSalaryType}
                            onPress={(unsavedSalaryType) => {
                                Keyboard.dismiss();
                                this.setState({unsavedSalaryType})
                            }}
                        />
                    </View>
                    <Button style={styles.button} onPress={this.submit} disabled={!(unsavedEmail && unsavedName && unsavedPhone)} loading={loading}>
                        submit
                    </Button>
                </KeyboardAwareScrollView>
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
        loading: state.user.loading
    }), {
        submitConnect: submit
    }
)(Register)