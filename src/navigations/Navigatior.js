import {createStackNavigator} from 'react-navigation-stack'
import {creatAppContainer, createAppContainer} from 'react-navigation'
import Login from '../screens/Login'
import Register from '../screens/Register'
import ScreenConfirm from '../screens/ScreenConfirm'
import Home from '../screens/Home'

const stackNavigatorOptions ={
    headerShown:false
}

const AppNavigator= createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    ScreenConfirm:{screen:ScreenConfirm},
    Home:{screen:Home}

},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);