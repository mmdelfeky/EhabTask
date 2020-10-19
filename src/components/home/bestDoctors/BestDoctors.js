import React, {useMemo} from 'react';
import {AppView} from '../../../common';
import HorizontalScrollableContent from '../HorizontalScrollableContent';
import DoctorCard from './DoctorCard';

const img1 = require('../../../assets/imgs/sugg1.png');
const img2 = require('../../../assets/imgs/sugg2.png');
const FeaturedRecipes = () => {
  const data = useMemo(
    () => [
      {
        backgroundColor: '#12273D',
        doctorName: 'محمود أحمد',
      },
      {
        doctorName: 'إيهاب مصطفى',
        backgroundColor: '#F7671C',
      },
    ],
    [],
  );
  return (
    <AppView stretch>
      <HorizontalScrollableContent title="أفضل الأطباء">
        {data.map((item) => (
          <DoctorCard key={item.title} {...item} />
        ))}
      </HorizontalScrollableContent>
    </AppView>
  );
};

export default FeaturedRecipes;
