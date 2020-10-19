import React from 'react';
import {AppText, AppView} from '../../../common';

const Tag = ({title}) => {
  return (
    <AppView
      borderRadius={5}
      center
      width={20}
      height={4}
      backgroundColor="#FC6111">
      <AppText color="white">{title}</AppText>
    </AppView>
  );
};

export default Tag;
