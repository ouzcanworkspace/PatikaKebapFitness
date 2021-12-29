import React from 'react';

import {Text, TextInput, View} from 'react-native';
import styles from './Input.style';

const Input = ({label, placeholder, onChangeText}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChange={onChangeText}/>
            </View>
        </View>
    );
};

export default Input;
