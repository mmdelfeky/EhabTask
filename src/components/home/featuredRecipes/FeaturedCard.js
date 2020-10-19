import React from 'react';
import {AppImage, AppView} from '../../../common';
import Overlay from '../../Overlay';
import CardName from './CardName';
import Label from './Label';
import Tag from './Tag';
const timeImg = require('../../../assets/imgs/time.png');
const caloriesImg = require('../../../assets/imgs/calories.png');
const FeaturedCard = ({title, bgImg}) => {
  return (
    <AppView
      overflow="hidden"
      width={60}
      backgroundColor="red"
      height={26}
      margin={5}
      borderRadius={20}>
      <AppImage
        resizeMode="stretch"
        height={30}
        width={65}
        padding={8}
        source={bgImg}>
        <Overlay />
        <Tag title="سلطات" />
        <CardName {...{title}} />
        <AppView stretch row>
          <Label
            value="50"
            type="س.ع"
            source={caloriesImg}
            backgroundColor="#FFE6E2"
          />
          <Label
            equalSize={6}
            backgroundColor="#E3F8FA"
            value="20"
            type="د"
            source={timeImg}
          />
        </AppView>
      </AppImage>
    </AppView>
  );
};

export default FeaturedCard;
