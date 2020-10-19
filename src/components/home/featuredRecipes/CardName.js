import React from 'react';
import {AppText, AppView} from '../../../common';

const CardName = ({title}) => {
  return (
    <AppView width={52}>
      <AppText marginVertical={4} lineHeight={14} color="white" size={9}>
        {title}
      </AppText>
    </AppView>
  );
};

export default CardName;
