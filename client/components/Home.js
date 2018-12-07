import React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Restaurant_List from './Restaurants'
const mapStateToProps = store => ({
    user: store.user,
    restaurant: store.restaurant.list,
    menu: store.menu.menu,
    order: store.order,
  });
  
  const mapDispatchToProps = dispatch => ({
    onLoad: () => {
      dispatch(actions.getRestaurants());
      dispatch(actions.getMenu());
    },
    setOrder: (key) => {
      console.log('setting order');
      dispatch(actions.setOrder(key));
    },
    submitOrder: (state) => {
      dispatch(actions.submitOrder(state));
    }
  });


  
  class Search extends React.Component {
    render() {
        return (
            <View>
                <Text>Search</Text>
            </View>
        )
    }
}

class CheckOut extends React.Component {
    render() {
        return (
            <View>
                <Text>CheckOut</Text>
            </View>
        )
    }
}

  const TabNavigator = createBottomTabNavigator({
    Restaurant_List : Restaurant_List,
    Search : Search,
    CheckOut : CheckOut,
  })





  class Home extends React.Component {
    constructor(props) {
      super(props);
    };

    render() {
        return (
            <View>

            <Text>hihi</Text>
            </View>
        )
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Home);
