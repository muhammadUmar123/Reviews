import React, { Component, useState } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function TextInputComponent({ image, placeholder, ispassword }) {
    const [password, showpassword] = useState(false)
    return (
        <View style={styles.inputContainer}>
            <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 10 }} source={image} />
            <TextInput secureTextEntry={password} placeholder={placeholder} placeholderTextColor={'gray'} style={styles.inputStyle} />
            {ispassword &&
                <TouchableOpacity onPress={()=>showpassword(!password)} style={{ right: '80%' }}>
                    {password ?
                        <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} source={require('../assets/showpassword.png')} />
                        :
                        <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} source={require('../assets/hidepassword.png')} />

                    }
                </TouchableOpacity>}
        </View>
    );

}


const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10,

        borderWidth: 3,
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        borderColor: '#02a1b6',
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    inputStyle: {

        paddingHorizontal: 10,
        width: '90%',
        height: 50
    }
})