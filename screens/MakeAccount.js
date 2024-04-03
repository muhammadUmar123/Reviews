<Text style={{ textAlign: 'center', margin: 20, marginBottom: 40 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a rhoncus arcu. Cras ante lectus, sagittis sit amet tortor eu, vestibulum consequat sem. Vivamus porttitor magna nec augue varius sodales.</Text>
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

export default function MakeAccount ({navigation}){
    
        return (
            <ScrollView style={{backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
                <Image source={require('../assets/createaccount.png')} style={{ width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center' }} />
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '700' }}>Reviews</Text>
                <Text style={{ textAlign: 'center', margin: 20, marginBottom: 40 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a rhoncus arcu. Cras ante lectus, sagittis sit amet tortor eu, vestibulum consequat sem. Vivamus porttitor magna nec augue varius sodales.</Text>
                {/*sdsds  */}
                <ButtonComponent page='Login' action={(act)=>navigation.navigate(act)} btnstyle={''} btntext={'Login'} btntxtstyle={{ color: '#fff' }} />
                <ButtonComponent page='Signup' action={(act)=>navigation.navigate(act)} btnstyle={{ backgroundColor: '#fff' }}  btntext={'Signup'} />
            </ScrollView>
        );
    
}

