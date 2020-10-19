import React from 'react';
import {AppImage, AppText, AppView} from '../../../common';

const Label = ({value, source, equalSize, color, type, backgroundColor}) => {
  return (
    <AppView marginHorizontal={2} row>
      <AppView
        overflow="hidden"
        borderRadius={4}
        equalSize={5}
        {...{backgroundColor}}
        center>
        <AppImage equalSize={equalSize || 3} source={source} />
      </AppView>

      <AppText marginHorizontal={2} {...{color}}>
        {value}
      </AppText>

      <AppText {...{color}}>{type}</AppText>
    </AppView>
  );
};

Label.defaultProps = {
  color: 'white',
};
export default Label;
