import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  logemail: (text) => {
    dispatch(actions.logEmail(text));
  },
  logpass: (text) => {
    dispatch(actions.logPass(text));
  },
  login: (event) => {
    dispatch(actions.logIn(event));
  }
});

const styles = StyleSheet.create({
  form: {
    height: 50,
    fontSize: 20,
    padding:30
  },
  formTitle: {
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  formBox: {
    flex:1,
    justifyContent: 'center',
    marginTop: 10,
    padding: 10
  },
  buttonLogin:{ 
    backgroundColor: "blue",
    borderWidth: 3,
    borderColor: "blue",
    borderRadius:10,
  },

});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);

  }
  submitLogin(){
  
  this.props.navigation.navigate('Home');
  }
  submitSignup(){
  
  this.props.navigation.navigate('SignUp');
  }

  render() {
  return (
    <View style={styles.formBox}>
            <TextInput onChangeText={this.props.logemail} placeholder="Email" style={styles.form} type="text" />
            <TextInput onChangeText={this.props.logpass} placeholder="Password" style={styles.form} type="text" secureTextEntry={true} />
            <Button onPress={()=> this.props.navigation.navigate('Home')} title="Log in!" color="blue" />
            <Button onPress={()=> this.props.navigation.navigate('Home')} title="Oauth" color="blue" />
            <Button onPress={this.props.submitSignup} title="Sign up!" color="blue" />


      
    </View>
  );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
