import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ButtonComponent({action,btnstyle,btntxtstyle ,btntext,page}) {



    return (
        <TouchableOpacity onPress={()=>action(page)} style={[styles.Buttons,btnstyle]}>
            <Text style={[styles.Buttontxt,btntxtstyle]}> {btntext} </Text>
        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    Buttons: {

        backgroundColor: '#02a1b6',
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#02a1b6'
    },
    Buttontxt: {
        textAlign: 'center',
        fontWeight: '600'
    }
})



