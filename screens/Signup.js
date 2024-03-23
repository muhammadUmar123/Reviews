import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

// <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
export default function Signup({ navigation }) {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }} contentContainerStyle={{ alignItems: 'center' }} >
      <View style={{ height: 100 }} />
      <View style={{ width: '100%', paddingHorizontal: '4%' }}>
        <Text style={styles.welcomeTxt}> Register </Text>
      </View>
      <Text style={{ marginBottom: 20 }}> Create your account </Text>
            
      <TextInputComponent placeholder={'Username'} image={require('../assets/user.png')} />
      <TextInputComponent placeholder={'Email'} image={require('../assets/email.png')} />
      <TextInputComponent placeholder={'Password'} ispassword={true} image={require('../assets/lock.png')} />
      <TextInputComponent placeholder={'Confirm password'} ispassword={true} image={require('../assets/lock.png')} />
      
      <Text style={{ textAlign: 'center', padding: 15 }}>By registering you are agreeing to our Terms of use and Privacy Policy </Text>
      <ButtonComponent page='Home' action={(act) => navigation.replace(act)} btnstyle={''} btntext={'Sign up'} btntxtstyle={{ color: '#fff' }} />
      <Text style={{ marginTop: 30 }}>Already have an account? <Text style={{ color: '#02a1b6', textDecorationLine: 'underline', }} onPress={() => navigation.goBack(null)}>Login</Text> </Text>
    </ScrollView>
  );

}


const styles = StyleSheet.create({
  welcomeTxt: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20
  }
})