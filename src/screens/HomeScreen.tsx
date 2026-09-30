import React , {useMemo , useState} from 'react';
import {View, Text, StyleSheet, Image,ScrollView, TextInput, TouchableOpacity,Pressable} from 'react-native';
import courses from '../data/courseData';
import statsData from '../data/statsData';
import { SearchBar } from 'react-native-screens';


const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <ScrollView style = {styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator = {false}>
        {/* header */}
        <View style = {styles.header}>
            <View>
                <Text style = {styles.greetingText} > Xin chào,</Text>
                <Text style = {styles.userName}>Phạm Tiến Công</Text>
            </View>
            <View style = {styles.headerRight}>
                <TouchableOpacity style ={ styles.noticationBtn}>
                    <Text style = {styles.bellIcon}>🔔</Text>
                    <View style={styles.notificationBadge}> <Text style={styles.notificationBadgeText}>3</Text> </View>
                </TouchableOpacity>
                <Image source={require('../assets/image/user.jpg')} style={styles.avatar} />
            </View>
            
        </View>
        {/* ================= STATISTICS ================= */}
        <View style = {styles.section} >
            <Text style={styles.sectionTitle}>THỐNG KÊ</Text>
            <View style={styles.statisticsContainer}>
                {statsData.map((item) => (
                    <View key={item.id} style={styles.statCard}>
                        <View style={[styles.statIconBox, { backgroundColor: item.bgColor }]}>
                            <Text style={styles.statIcon}>{item.icon}</Text>
                        </View>
                        <Text style={styles.statValue}>{item.value}</Text>
                        <Text style={styles.statLabel}>{item.title}</Text>
                    </View>
                ))}
            </View>
           
        </View>

        {/* ================= SEARCH ================= */}
        <View style={styles.searchSection}>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Tìm kiếm môn học, bài tập..."
                placeholderTextColor="#94A3B8"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
            <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
              <Text style={styles.filterIcon}>⚙️</Text>
            </TouchableOpacity>
          </View>

        {/*  DANH SÁCH MÔN HỌC */}
        <Text style={styles.sectionTitle}>DANH SÁCH MÔN HỌC</Text>
        <View style = {styles.courseList}>
            {courses.map((course) => (
                    <Pressable 
                        key = {course.id} 
                        style={({ pressed }) => [
                            styles.courseCard,
                            pressed && { opacity: 0.85 },
                        ]}
                    >
                        {/* Icon môn học */}
                        <View style={[styles.courseIconBox, { backgroundColor: course.iconBg }]}>
                            <Text style={styles.courseIcon}>{course.icon}</Text>
                        </View>
                        {/* Thông tin môn học & Thanh tiến độ */}
                        <View style = {styles.courseInfo}>
                            <Text style = {styles.courseName} numberOfLines={1}>
                                {course.name}
                            </Text>
                            <View style = {styles.courseMetaRow}>
                                <Text style = {styles.courseMetaText}>{course.lessons} bài học </Text>
                                <Text style = {styles.courseMetaText}>{course.completed}% hoàn thành</Text>
                            </View>
                            {/* Thanh tiến độ */}
                            <View style={styles.progressBarBackground}>
                                <View
                                style={[
                                    styles.progressBarFill,
                                    {
                                    width: `${course.completed}%`,
                                    backgroundColor: course.color,
                                    },
                                ]}
                                />
                            </View>
                        </View>
                    </Pressable>
                )

            )}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   backgroundColor: '#F5F7FB',
  },
  contentContainer : {
    paddingHorizontal: 20, 
    paddingTop: 20, 
    paddingBottom: 30,
  },
    // header   
  header:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginBottom: 28,
  },
  greetingText : {
    fontSize: 16,
    color: '#475569',
    marginBottom: 4,
  },
  userName : {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  headerRight:{
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12,
  },
  noticationBtn : {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  bellIcon :  {
    fontSize: 18,
  },
  notificationBadge : {
    position: 'absolute', 
    right: -2, 
    top: -2, 
    width: 18, 
    height: 18, 
    borderRadius: 9, 
    backgroundColor: '#EF4444', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  notificationBadgeText : {
    color: '#FFFFFF', fontSize: 10, fontWeight: '700',
  },
  avatar: {
    width: 48, 
    height: 48, 
    borderRadius: 24,
  },

  // SECTION
  section : {
    marginBottom: 24,
  },
  sectionTitle : {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 12,
    letterSpacing: 0.5,
  },

  // Statistic
  statisticsContainer: { 
    flexDirection: 'row', 
    justifyContent : 'space-between'
  },
  statCard : {
    flex : 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  statIconBox : {
    width : 44,
    height : 44,
    borderRadius : 22,
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom: 8,
  },
  statIcon :{
    fontSize : 22,
  },
  statValue : {
    fontSize : 20,
    fontWeight : 'bold',
    color: "0F172A",
    marginBottom : 2,
  },
  statLabel : {
    fontSize : 12,
    color: '#64748B',
    textAlign: 'center',
  },

  // SEARCH
  searchSection : {
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 22,
  },
  searchBar:{
    flex : 1 ,
    flexDirection : 'row',
    alignItems : 'center',
    backgroundColor: '#FFFFFF',
    borderRadius : 24,
    paddingHorizontal : 16,
    shadowColor: '#000',
    height : 48,
    shadowOffset : {width : 0 , height : 2},
    shadowOpacity : 0.04,
    shadowRadius: 5,
    elevation : 2,
  },
  searchIcon : {
    fontSize : 16 ,
    marginRight : 10,
  },
  searchInput : {
    flex : 1 , 
    fontSize : 14,
    color: '#1E293B',
  },
  filterButton : {
    width : 48, 
    height : 48 ,
    borderRadius : 24,
    backgroundColor: '#FFFFFF',
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 12,
    shadowColor: '#000',
    shadowOffset : {width : 0 , height : 2},
    shadowOpacity : 0.04,
    shadowRadius: 5,
    elevation : 2,
  },
  filterIcon : {
    fontSize : 18,
  },
//   Danh sách môn  học 

  courseList : {
    gap : 14,
  },
  courseCard : {
    flexDirection : 'row',
    alignItems : 'center',
    backgroundColor: '#FFFFFF',
    borderRadius : 18,
    padding : 14,
    marginBottom : 14,
    shadowColor: '#000',
    shadowOffset : {width : 0 , height : 3},
    shadowOpacity : 0.06,
    shadowRadius: 6,
    elevation : 3,
  },
  courseIconBox : {
    width : 54, 
    height : 54,
    borderRadius : 14,
    justifyContent : 'center',
    alignItems : 'center',
    marginRight : 14,
  },
  courseIcon : {
    fontSize : 26,
  }, 
  courseInfo : {
    flex : 1,
  }, 
  courseName : {
    fontSize : 16,
    fontWeight : '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  courseMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  courseMetaText: {
    fontSize: 13,
    color: '#475569',
  },
  progressBarBackground: {
    height: 7,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },






 
});

export default HomeScreen;