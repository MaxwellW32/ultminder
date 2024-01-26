import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import RandColorView from './components/RandColorView';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


export default function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{ backgroundColor: "green", flex: 1 }}><StatusBar />
      <RandColorView style={{ flex: 2 }} />

      <RandColorView style={{ flex: 1 }} />

      <RandColorView style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
