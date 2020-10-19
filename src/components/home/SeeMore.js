import React from 'react';
import {AppIcon, AppText, AppView, TouchableView} from '../../common';

const SeeMore = ({title}) => {
  return (
    <AppView stretch row spaceBetween margin={8}>
      <AppText size={7} color="primary">
        {title}
      </AppText>

      <TouchableView row>
        <AppText>شاهد الكل</AppText>
        <AppIcon marginHorizontal={3} name="arrow-back-ios" type="material" />
      </TouchableView>
    </AppView>
  );
};

export default SeeMore;
