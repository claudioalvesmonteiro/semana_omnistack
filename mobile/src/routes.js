import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
      // , Timeline, ...  passando rotas (paginas)

    })
); 

export default Routes;