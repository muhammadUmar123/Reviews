import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

// <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
export default function Login({ navigation }) {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff', }} contentContainerStyle={{ alignItems: 'center' }} >
      <View style={{ height: 50 }} />
      <Text style={styles.welcomeTxt}> Forgot Password </Text>
      <Text style={{ marginBottom: 20 }}> Having trouble in login! </Text>
      <TextInputComponent placeholder={'Email'} image={require('../assets/email.png')} />
      <ButtonComponent btntxtstyle={{ color: '#fff' }} page='Home' action={(act) => { }} btnstyle={''} btntext={'Send Request'} />
    </ScrollView>
  );

}


const styles = StyleSheet.create({
  welcomeTxt: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20
  },
  forgottxt: {
    textAlign: 'right',
    right: '5%',
    color: '#02a1b6',
    fontWeight: '600'
  }
})