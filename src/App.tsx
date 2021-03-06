/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { enableScreens } from 'react-native-screens';

import AppNavigator from './navigation/AppNavigator'


enableScreens();

const App = () => {
    return (
        <>
            <AppNavigator />
        </>
    );
};

export default App;
