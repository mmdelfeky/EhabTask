import React from 'react';
import {StatusBar} from 'react-native';
import {AppImage, AppScrollView, AppText, AppView} from '../common';
import Categories from '../components/home/categories/Categories';
import FeaturedRecipes from '../components/home/featuredRecipes/FeaturedRecipes';
import BestDoctors from '../components/home/bestDoctors/BestDoctors';
import Header from '../components/home/Header';

import SuggestedRecipes from '../components/home/SuggestedRecipes/SuggestedRecipes';

const Home = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <AppScrollView flex stretch>
        <AppView stretch>
          <FeaturedRecipes />
          <Categories />
          <SuggestedRecipes />
          <BestDoctors />
        </AppView>
      </AppScrollView>
    </>
  );
};

export default Home;
