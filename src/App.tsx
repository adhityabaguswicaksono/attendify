import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { CheckIn } from './pages/CheckIn';
import { CheckOut } from './pages/CheckOut';
import { Permit } from './pages/Permit';
import { CreatePermit } from './pages/CreatePermit';
import { PermitState } from './pages/PermitState';
import { Summary } from './pages/Summary';
import { Profile } from './pages/Profile';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route
					exact
					path={'/login'}>
					<Login />
				</Route>
				<Route
					exact
					path={'/dashboard'}>
					<Dashboard />
				</Route>
				<Route
					exact
					path={'/checkin'}>
					<CheckIn />
				</Route>
				<Route
					exact
					path={'/checkout'}>
					<CheckOut />
				</Route>
				<Route
					exact
					path={'/permit'}>
					<Permit />
				</Route>
				<Route
					exact
					path={'/permit/create-permit'}>
					<CreatePermit />
				</Route>
				<Route
					exact
					path={'/permit/permit-state'}>
					<PermitState />
				</Route>
				<Route
					exact
					path={'/summary'}>
					<Summary />
				</Route>
				<Route
					exact
					path={'/profile'}>
					<Profile />
				</Route>
				<Route
					exact
					path="/home">
					<Home />
				</Route>
				<Route
					exact
					path="/">
					<Redirect to="/home" />
				</Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
