import React, {useMemo} from 'react';
import HorizontalScrollableContent from '../HorizontalScrollableContent';
import FeaturedCard from './CategoriesCard';

const img1 = require('../../../assets/imgs/breakfast1.png');
const img2 = require('../../../assets/imgs/lunch.png');
const img3 = require('../../../assets/imgs/breakfast2.png');
const img4 = require('../../../assets/imgs/app.png');
const Categories = () => {
  const data = useMemo(
    () => [
      {
        title: 'إفطار',
        bgImg: img1,
        backgroundColor: '#FFEDBD',
      },
      {
        title: 'غداء',
        bgImg: img2,
        backgroundColor: '#FFD0D0',
      },
      {
        title: 'عشاء',
        bgImg: img3,
        backgroundColor: '#EFCEFF',
      },
      {
        title: 'مقبلات',
        bgImg: img4,
        backgroundColor: '#D1C4C4',
      },
    ],
    [],
  );
  return (
    <HorizontalScrollableContent title="الفئات">
      {data.map((item) => (
        <FeaturedCard key={item.title} {...item} />
      ))}
    </HorizontalScrollableContent>
  );
};

export default Categories;
