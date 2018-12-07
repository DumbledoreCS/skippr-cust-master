import React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import * as actions from '../actions/actions';



const mapStateToProps = store => ({
    user: store.user
  });
  
const mapDispatchToProps = dispatch => ({
    
});


let region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
// add this to render


const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Search extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
          return (
                    <MapView initialRegion={region}/>  
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
