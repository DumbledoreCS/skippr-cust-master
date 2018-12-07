import React from 'react';
import { Alert, ActivityIndicator, AsyncStorage, Button, StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import store from './store';
import MainContainer from './containers/MainContainer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Restaurant_List from './components/Restaurants';
import Search from './components/Search';
import { Provider } from 'react-redux';
import Settings from './components/Settings';
import { Ionicons, Feather} from '@expo/vector-icons'


const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Restaurant_item:{
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
      
    },
    counter_container:{
      paddingLeft:80,
      flex:1,
      flexDirection:'row'
    },
    item_name: {
      fontSize: 20,
    },
    plus: {
      paddingLeft:10,
      paddingRight:10,
    }
})

class Items1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return(
    <View>
      <View style={styles.Restaurant_item} >
        <Text style={styles.item_name}>Spanish Coffee</Text>
        <View style={styles.counter_container}>
          <Feather style={styles.plus} onPress={Alert.alert('You tapped the button!')} name="minus" size={22}/>
        <Text style={styles.item_name}>0</Text>
        <Feather style={styles.plus} onPress={Alert.alert('You tapped the button!')} name="plus" size={22}/>
        </View>
      </View>
      
    </View>
  )

}
}
class Check extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return(
    <View>
        <Text>Check</Text>
    </View>
  )

}
}
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return(
    <View>
      <View style={styles.Restaurant_item} >
      <Button onPress={() => this.props.navigation.navigate('Restaurant1')} title="Ronnie's Coffee" color="blue" />
        <Text> 0.2 miles </Text>
      </View>
      <View style={styles.Restaurant_item} >
      <Button onPress={() => this.props.navigation.navigate('Restaurant2')} title="TJ's Coffee" color="blue" />
        <Text> 0.4 miles </Text>
      </View>
      <View style={styles.Restaurant_item} >
      <Button onPress={() => this.props.navigation.navigate('Restaurant3')} title="Blake's Coffee" color="blue" />
        <Text> 0.5 miles </Text>
      </View>
    </View>
  )

}
}

const Restaurant1Stack = createMaterialTopTabNavigator(
  {
    Menu: Items1,
    Checkout: Check
  }
)

const Restaurant2Stack = createMaterialTopTabNavigator(
  {
    Menu: Items1,
    Checkout: Check
  }
)

const Restaurant3Stack = createMaterialTopTabNavigator(
  {
    Menu: Items1,
    Checkout: Check
  }


)

const RestaurantStack = createStackNavigator(
  {
    List: {
      screen: List,
    },
    Restaurant1: Restaurant1Stack,
    Restaurant2: Restaurant2Stack,
    Restaurant3: Restaurant3Stack,
  },
  {
    initialRouteName: "List"
  }
)

const HomeStack = createBottomTabNavigator({
  Restaurants: RestaurantStack,
  Map: Search,
  Settings: Settings,
},{

  tabBarOptions: {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  }
 } );

const MainNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: HomeStack,
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppNavigator = createAppContainer(MainNavigator);


export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    ) 
  }
}





