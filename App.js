import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {FileTree} from './src/components/FileTree';
import {data} from './src/components/data';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ScrollView contentInsetAdjustmentBehavior="automatic" horizontal>
            <View style={styles.container}>
              <FileTree data={data} />
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});

export default App;
