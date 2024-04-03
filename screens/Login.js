import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

// <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
export default function Login({navigation }) {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }} contentContainerStyle={{ alignItems: 'center' }} >
      <View style={{height:100}}/>
      <View style={{width:'100%',paddingHorizontal:'4%'}}>
      <Text style={styles.welcomeTxt}> Welcome Back </Text>
      </View>
      <Text style={{ marginBottom: 20 }}> Login to your account </Text>
      <TextInputComponent placeholder={'Username'} image={require('../assets/user.png')} />
      <TextInputComponent placeholder={'Password'} ispassword={true} image={require('../assets/lock.png')} />
      <View style={{ width: '100%', marginVertical: 10 }}>
        <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgottxt}>Forgot Password!</Text>
      </View>
      {/* <ButtonComponent page='Home' action={(act) => navigation.replace(act)} btnstyle={''} btntext={'Login'}  btntxtstyle={{ color: '#fff' }}/> */}
      <Text style={{ marginTop: 30 }}>Don't have an account <Text style={{ color: '#02a1b6', textDecorationLine: 'underline', }} onPress={() => navigation.navigate('Signup')}>Signup</Text> </Text>
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
    // color: '#02a1b6',
    color: '#3badfb',
    
    fontWeight: '600'
  }
})