import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('test.jpg')}/>
        {/* <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Click here
        </Text> */}
         <NestedMessage message={"Hello Nested Message"}/>
      </View>
    );
  }
};

class NestedMessage extends React.Component {
render() {
    return (
      <Text
        style={{
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -3]}],
        }}>
        {this.props.message}
      </Text>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
