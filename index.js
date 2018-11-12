/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Two} from './day1';

const AppBootstrapComponent = Two;

AppRegistry.registerComponent(appName, () => AppBootstrapComponent);
