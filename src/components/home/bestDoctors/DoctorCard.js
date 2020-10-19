import React from 'react';
import {
  AppImage,
  AppText,
  AppView,
  responsiveHeight,
  responsiveWidth,
} from '../../../common';
const doctorImg = require('../../../assets/imgs/doctorImg.png');
const SuggestedCard = ({backgroundColor, doctorName}) => {
  return (
    <AppView
      marginTop={20}
      overflow="visible"
      height={18}
      center
      paddingBottom={5}
      elevation={2}
      {...{backgroundColor}}
      width={65}
      margin={5}
      borderRadius={20}>
      <AppImage
        style={{bottom: 0, position: 'absolute', right: 0}}
        height={25}
        width={30}
        source={doctorImg}
      />
      <AppView marginRight={30}>
        <AppText color="white">دكتور</AppText>
        <AppText color="white" size={6} bold>
          {doctorName}
        </AppText>
      </AppView>
    </AppView>
  );
};

export default SuggestedCard;
