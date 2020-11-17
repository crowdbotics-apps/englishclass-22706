import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen71174982Navigator from '../features/BlankScreen71174982/navigator';
import UserProfile174972Navigator from '../features/UserProfile174972/navigator';
import Tutorial174971Navigator from '../features/Tutorial174971/navigator';
import NotificationList174943Navigator from '../features/NotificationList174943/navigator';
import Settings174942Navigator from '../features/Settings174942/navigator';
import Settings174934Navigator from '../features/Settings174934/navigator';
import UserProfile174932Navigator from '../features/UserProfile174932/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen71174982: { screen: BlankScreen71174982Navigator },
UserProfile174972: { screen: UserProfile174972Navigator },
Tutorial174971: { screen: Tutorial174971Navigator },
NotificationList174943: { screen: NotificationList174943Navigator },
Settings174942: { screen: Settings174942Navigator },
Settings174934: { screen: Settings174934Navigator },
UserProfile174932: { screen: UserProfile174932Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
