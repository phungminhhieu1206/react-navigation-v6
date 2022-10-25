import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import routes from '../../constants/routes';

const ForgotPassword = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <Text>Params: {route.params.userId}</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
