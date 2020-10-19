import React, {useMemo} from 'react';
import {AppView} from '../../../common';
import SeeMore from '../SeeMore';
import SuggestedCard from './SuggestedCard';

const img1 = require('../../../assets/imgs/sugg1.png');
const img2 = require('../../../assets/imgs/sugg2.png');
const FeaturedRecipes = () => {
  const data = useMemo(
    () => [
      {
        title: 'سلطة فواكه باللبن',
        bgImg: img1,
        doctorName: 'محمد عبدالله',
        // doctorImg:
      },
      {
        title: 'عصير البرتقال الطازج',
        bgImg: img2,
        doctorName: 'أحمد الشريف',
      },
    ],
    [],
  );
  return (
    <AppView stretch>
      <SeeMore title="وصفات مقترحة" />

      {data.map((item) => (
        <SuggestedCard key={item.title} {...item} />
      ))}
    </AppView>
  );
};

export default FeaturedRecipes;
