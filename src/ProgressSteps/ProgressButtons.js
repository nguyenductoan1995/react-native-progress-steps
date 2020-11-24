import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row' }}>
    <View style={{}}>{props.renderPreviousButton()}</View>
    <View style={{ }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
