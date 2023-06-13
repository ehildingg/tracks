import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer />
      <Button title="Sign Out" onPress={signOut} />
      <Spacer />
    </View>
  );
};

AccountScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default AccountScreen;
