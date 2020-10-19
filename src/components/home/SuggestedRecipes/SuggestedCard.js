import React from 'react';
import {AppImage, AppView} from '../../../common';
import CardName from './CardName';
import DoctorName from './DoctorName';
import Label from './Label';
import Tag from './Tag';
const timeImg = require('../../../assets/imgs/time.png');
const caloriesImg = require('../../../assets/imgs/calories.png');
const SuggestedCard = ({title, bgImg, doctorName, doctorImg}) => {
  return (
    <AppView
      paddingBottom={5}
      elevation={2}
      overflow="hidden"
      stretch
      margin={5}
      borderRadius={20}>
      <AppImage
        resizeMode="stretch"
        height={26}
        width={100}
        padding={8}
        source={bgImg}
      />
      <AppView marginHorizontal={10} stretch row spaceBetween height={10}>
        <CardName title={title} />
        <DoctorName {...{doctorName}} {...{doctorImg}} />
      </AppView>

      <AppView stretch row spaceBetween marginHorizontal={5}>
        <Label
          color="#52616B"
          value="10"
          equalSize={6}
          type="دقيقة"
          source={timeImg}
          backgroundColor="#E3F8FA"
        />
        <Label
          color="#52616B"
          backgroundColor="#FFE6E2"
          value="50"
          type="سعرة حرارية"
          source={caloriesImg}
        />
        <Tag title="مشروبات" />
      </AppView>
    </AppView>
  );
};

export default SuggestedCard;
