import React, { Component } from 'react';
import { StatusBar, View, ScrollView , Image} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, TextInput, Button } from '../../Components/Kit';
import styles from './ResultStyle';

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
                <ScrollView>
                    <Image source={{url:'https://www.in-berlinhomes.com/wp-content/uploads/2018/09/Hauptstr_101_H101U22_006-500x334.jpg' }} style={styles.image}/>
                    <View>
                        <Text style={styles.title}>
                            About the apartment:
                        </Text>
                        <Text style={styles.data}>
                            This modern one bedroom apartment is newly renovated and furnished.
                            The apartment will accommodate 2 in total, with a double bedroom and a sofa bed for 2 in the living room. It is fully furnished with a new TV, fully equipped kitchen for entertaining and an inviting dining area. We will provide everything you need like linens, towels and shower amenities.
                            It has also a sunny balcony and/or a garden access, perfect for the morning coffee or the evening drink!
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Bedrooms
                        </Text>
                        <Text style={styles.data}>1
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Size (m2)
                        </Text>
                        <Text style={styles.data}>56
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Floor
                        </Text>
                        <Text style={styles.data}>1
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Tenants
                        </Text>
                        <Text style={styles.data}>1-2
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Min. rental
                        </Text>
                        <Text style={styles.data}>2 months
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Neighborhood
                        </Text>
                        <Text style={styles.data}>Schöneberg
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Monthly rent :
                        </Text>
                        <Text style={styles.data}>€865
                        </Text>
                    </View>

                </ScrollView>
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