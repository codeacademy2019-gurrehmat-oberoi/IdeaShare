import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home.component';
import CreateIdea from '../components/CreateIdea/CreateIdea.component';
import Explore from '../components/Explore/Explore.component';

const AppNavigator = createStackNavigator({
  Home,
  CreateIdea,
  Explore,
},
{
  initialRouteName: 'Home',
});

const Routes = createAppContainer(AppNavigator);
export default Routes;
