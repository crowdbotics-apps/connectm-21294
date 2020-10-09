import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList134130Navigator from '../features/NotificationList134130/navigator';
import Settings134129Navigator from '../features/Settings134129/navigator';
import Settings134121Navigator from '../features/Settings134121/navigator';
import UserProfile134119Navigator from '../features/UserProfile134119/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList134130: { screen: NotificationList134130Navigator },
Settings134129: { screen: Settings134129Navigator },
Settings134121: { screen: Settings134121Navigator },
UserProfile134119: { screen: UserProfile134119Navigator },

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
