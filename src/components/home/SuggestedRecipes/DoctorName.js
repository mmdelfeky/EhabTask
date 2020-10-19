import React from 'react';
import {AppImage, AppText, AppView} from '../../../common';

const DoctorName = ({doctorName, doctorImg}) => {
  return (
    <AppView row>
      <AppImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        }}
        circleRadius={10}
      />
      <AppView marginHorizontal={2}>
        <AppText size={4.5}>بواسطة دكتور</AppText>
        <AppText size={6} color="secondary">
          {doctorName}
        </AppText>
      </AppView>
    </AppView>
  );
};

export default DoctorName;
