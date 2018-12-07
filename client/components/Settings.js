import React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';



const mapStateToProps = store => ({
    user: store.user
  });
  
const mapDispatchToProps = dispatch => ({
    
});

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Settings extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
          return (
              <View style={styles.container} >
                  <Text>{this.props.user.test}</Text>
                  <Text>Profile</Text>
              </View>
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
