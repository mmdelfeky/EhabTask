import React from 'react';
import {StyleSheet} from 'react-native';
import {AppView, AppScrollView, responsiveWidth} from '../../common';
import SeeMore from './SeeMore';
const styles = StyleSheet.create({
  nodesContaoner: {minWidth: responsiveWidth(100)},
});
const HorizontalScrollableContent = ({title, data, children, ...rest}) => {
  return (
    <AppView stretch {...rest}>
      <SeeMore {...{title}} />
      <AppScrollView horizontal>
        <AppView stretch row style={styles.nodesContaoner}>
          {children}
        </AppView>
      </AppScrollView>
    </AppView>
  );
};

export default HorizontalScrollableContent;
