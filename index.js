/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Three} from './day1';

const AppBootstrapComponent = Three;

AppRegistry.registerComponent(appName, () => AppBootstrapComponent);
