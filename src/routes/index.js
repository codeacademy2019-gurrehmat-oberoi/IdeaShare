import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home.component';
import CreateIdeaPage from '../containers/CreateIdeaPage/CreateIdeaPage.container';
import ExplorePage from '../containers/ExplorePage/ExplorePage.container';

const AppNavigator = createStackNavigator({
  Home,
  CreateIdeaPage,
  ExplorePage,
},
{
  initialRouteName: 'Home',
});

const Routes = createAppContainer(AppNavigator);
export default Routes;
