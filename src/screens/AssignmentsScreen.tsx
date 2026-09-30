import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AssignmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài tập</Text>
      <Text>Danh sách bài tập cần hoàn thành</Text>
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

export default AssignmentsScreen;