import React from 'react';
import {createStackNavigator} from "react-navigation";
import ShopDetilScreen from './home/ShopDetilScreen'
import HomeScreen from './home/HomeScreen'
const HomeNavigator = createStackNavigator({
    Shop: HomeScreen,
    Detils: ShopDetilScreen,
});

{/* 隐藏底部导航栏 */}
HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default HomeNavigator;