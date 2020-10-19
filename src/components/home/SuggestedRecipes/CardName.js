import React from 'react';
import {AppStarRating, AppText, AppView} from '../../../common';

const CardName = ({title}) => {
  return (
    <AppView width={52}>
      <AppText lineHeight={9} color="secondary" size={6} bold>
        {title}
      </AppText>
      <AppStarRating rate={4} />
    </AppView>
  );
};

export default CardName;
