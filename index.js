/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Four} from './day1';

const AppBootstrapComponent = Four;

AppRegistry.registerComponent(appName, () => AppBootstrapComponent);
