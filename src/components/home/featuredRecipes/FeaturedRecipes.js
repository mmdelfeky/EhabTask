import React, {useMemo} from 'react';
import HorizontalScrollableContent from '../HorizontalScrollableContent';
import FeaturedCard from './FeaturedCard';

const img1 = require('../../../assets/imgs/FeaturedBg.png');
const img2 = require('../../../assets/imgs/FeaturedBg2.png');
const FeaturedRecipes = () => {
  const data = useMemo(
    () => [
      {
        title: 'تبولة بالسلطة الخضراء',
        bgImg: img1,
      },
      {
        title: 'وجبة عشاء خفيفةبولة بالسلطة الخضراء',
        bgImg: img2,
      },
    ],
    [],
  );
  return (
    <HorizontalScrollableContent title="وصفات مميزة">
      {data.map((item) => (
        <FeaturedCard {...item} />
      ))}
    </HorizontalScrollableContent>
  );
};

export default FeaturedRecipes;
