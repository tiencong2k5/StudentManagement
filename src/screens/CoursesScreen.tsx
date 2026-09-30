import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CoursesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Môn học</Text>
      <Text>Danh sách các môn học của sinh viên</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CoursesScreen;