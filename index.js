/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {One} from './day1';

const AppBootstrapComponent = One;

AppRegistry.registerComponent(appName, () => AppBootstrapComponent);
