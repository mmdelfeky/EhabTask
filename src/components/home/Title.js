import React from 'react';
import {AppIcon, AppText, AppView} from '../../common';

const Title = () => {
  return (
    <AppView marginTop={15} stretch row>
      <AppView stretch>
        <AppIcon
          marginHorizontal={13}
          name="menu"
          type="feather"
          color="white"
          size={15}
        />
      </AppView>
      <AppView centerX marginHorizontal={10}>
        <AppText lineHeight={14} color="white" size={10}>
          وصفات وطبخات
        </AppText>

        <AppText lineHeight={14} bold color="white" size={10}>
          مذهلة
        </AppText>
      </AppView>
    </AppView>
  );
};

export default Title;
