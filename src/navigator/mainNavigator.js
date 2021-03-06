import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings134236Navigator from '../features/Settings134236/navigator';
import UserProfile134159Navigator from '../features/UserProfile134159/navigator';
import Tutorial134158Navigator from '../features/Tutorial134158/navigator';
import NotificationList134130Navigator from '../features/NotificationList134130/navigator';
import Settings134129Navigator from '../features/Settings134129/navigator';
import Settings134121Navigator from '../features/Settings134121/navigator';
import UserProfile134119Navigator from '../features/UserProfile134119/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings134236: { screen: Settings134236Navigator },
UserProfile134159: { screen: UserProfile134159Navigator },
Tutorial134158: { screen: Tutorial134158Navigator },
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
