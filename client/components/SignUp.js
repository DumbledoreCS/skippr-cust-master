import React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
    user: store.user,
  });
  
  const mapDispatchToProps = dispatch => ({

    submitOrder: (state) => {
      dispatch(actions.submitOrder(state));
    }
  });


  class SignUp extends React.Component {
    constructor(props) {
      super(props);
    };
    render() {
        return (
            <View>
                <Text>Signup</Text>
            </View>
        )
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
