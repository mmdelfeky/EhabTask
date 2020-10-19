import React from 'react';
import {
  AppButton,
  AppIcon,
  AppImage,
  AppInput,
  AppText,
  AppView,
} from '../../common';
import Title from './Title';
const bcSource = require('../../assets/imgs/headerBg.png');

const Header = () => {
  return (
    <AppView stretch center>
      <AppImage width={100} height={30} resizeMode="stretch" source={bcSource}>
        <Title />

        <AppInput
          placeholderColor="#ABABBA"
          placeholder="ابحث عن وصفة"
          margin={8}
          borderRadius={30}
          height={7.5}
          rightItems={
            <AppIcon marginHorizontal={10} name="search1" type="ant" />
          }
        />
      </AppImage>
    </AppView>
  );
};

export default Header;
