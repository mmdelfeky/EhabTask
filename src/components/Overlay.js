import React from 'react';
import {StyleSheet} from 'react-native';
import {AppView} from '../common';

const Overlay = () => {
  return (
    <AppView
      flex
      stretch
      style={{
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,.2)',
      }}
    />
  );
};

export default Overlay;
