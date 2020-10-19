import React from 'react';
import {AppImage, AppText, AppView} from '../../../common';
const CategoriesCard = ({title, backgroundColor, bgImg}) => {
  return (
    <AppView center>
      <AppView
        overflow="hidden"
        {...{backgroundColor}}
        equalSize={22}
        margin={5}
        center
        borderRadius={20}>
        <AppImage
          resizeMode="stretch"
          equalSize={18}
          padding={8}
          source={bgImg}
        />
      </AppView>
      <AppText bold color="secondary">
        {title}
      </AppText>
    </AppView>
  );
};

export default CategoriesCard;
