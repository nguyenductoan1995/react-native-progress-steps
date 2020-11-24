import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native'

class StepIcon extends Component {

  getStyleSheetDot = ()=> {
    if(this.props.isActiveStep){
      return [
        styles.circleStyleActive
      ]
    } else if(this.props.isCompletedStep) {
      return [
       styles.circleStyleActive,
      ]
     } else {
      return [
        styles.circleStyle,
      ]
     }
  }

  getStyleleftBar = ()=> {
    if(this.props.isActiveStep){
      return [
        styles.leftBarActive
      ]
    }
     if(this.props.isCompletedStep) {
      return [
        styles.leftBarActive
      ]
     } else {
      return [
        styles.leftBar,
      ]
     }
  }

  getStylerightBar = ()=> {
    if(this.props.isActiveStep){
      return [
        styles.rightBar,
      ]
    }
     if(this.props.isCompletedStep) {
      return [
        styles.rightBarActive
      ]
     } else {
      return [
        styles.rightBar,
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
       {!this.props.isFirstStep && <View style={this.getStyleleftBar()} />}
        <View style={this.getStyleSheetDot()}/>
        {!this.props.isLastStep && <View style={this.getStylerightBar()} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  circleStyle:{
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    marginVertical:2
  },
  circleStyleActive:{
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#8cd7aa'
  },
  leftBar:{
    backgroundColor: '#f2f2f2',
    width:57/2,
    height:4
  },
  leftBarActive:{
    backgroundColor: '#8cd7aa',
    width:57/2-2,
    height:4
  },
  rightBar:{
    backgroundColor: '#f2f2f2',
    width:57/2,
    height:4
  },
  rightBarActive:{
    backgroundColor: '#8cd7aa',
    width:57/2-2,
    height:4
  }
})

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  stepNum: PropTypes.number.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.number,
  activeLabelColor: PropTypes.string,
  activeLabelFontSize: PropTypes.number,
  completedLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  completedCheckColor: PropTypes.string,
};

StepIcon.defaultProps = {
  borderWidth: 3,
  borderStyle: 'solid',
  activeStepIconBorderColor: '#4BB543',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#4BB543',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  labelFontSize: 14,
  activeLabelColor: '#4BB543',
  completedLabelColor: 'lightgray',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'white',

  completedCheckColor: 'white',
};

export default StepIcon;