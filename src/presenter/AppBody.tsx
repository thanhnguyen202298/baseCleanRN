
import React from 'react';
import {
  ActivityIndicator,
  Text,
} from 'react-native';

import UseCaseHookDataStore from '../domain/usecase/DataHookUseCase';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './component/MainContainer';
import Section, { styles } from './component/Session';

export default function AppBody(): React.JSX.Element {

  const { dataState, isLoading } = UseCaseHookDataStore()

  return (
    <NavigationContainer>
      <MainContainer>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then Test ReactQuery
        </Section>
        <Section title='testing api'>
          {isLoading ? <ActivityIndicator /> :
            dataState?.data}
        </Section>
      </MainContainer>
    </NavigationContainer>
  );
}