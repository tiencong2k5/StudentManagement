import React , {useMemo , useState} from 'react';
import {View, Text, StyleSheet, Image,ScrollView, TextInput, TouchableOpacity,Pressable , FlatList, Button} from 'react-native';
import courses from '../data/courseData';
import statsData from '../data/statsData';
import { SearchBar } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../context/ThemeContext';
const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');
    const {theme,palette,toggleTheme} = useTheme();

    // LẤY MÀU HIỆN TẠI VÀ TẠO STYLE BẰNG USEMEMO
    const styles = useMemo(() => getStyles(palette) , [palette]);
    return (
        <ScrollView style = {styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator = {false}>
            {/* HEADER */}
            <View style = {styles.header}>
                <View>
                    <Text style = {styles.greetingText} > Xin chào,</Text>
                    <Text style = {styles.userName}>Phạm Tiến Công</Text>
                </View>
                <View style = {styles.headerRight}>
                    <TouchableOpacity onPress={toggleTheme} style = {styles.themeBtn}>
                        <Ionicons
                            name={theme === "light" ? "moon-outline" : "sunny-outline"} // đổi icon theo theme
                            size={28}
                            color={theme === "light" ? "#111827" : "#FFD700"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style ={ styles.noticationBtn}>
                        <Ionicons
                            name="notifications"
                            size={26}
                            color="#e4de1b"
                        />
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
                                <Ionicons name={item.iconName} size={22} color={item.iconColor} />
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
                <Ionicons name="search-outline" size={20} color="#94A3B8" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Tìm kiếm môn học, bài tập..."
                    placeholderTextColor="#94A3B8"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                </View>
                <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
                <Ionicons name="options-outline" size={22} color="#475569" />
                </TouchableOpacity>
            </View>

            {/*  DANH SÁCH MÔN HỌC */}
            <Text style={styles.sectionTitle}>DANH SÁCH MÔN HỌC</Text>
            <FlatList data = {courses} keyExtractor={item => item.id} renderItem={({item}) =>(
                        <Pressable 
                            key = {item.id} 
                            style={({ pressed }) => [
                                styles.courseCard,
                                pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] },
                            ]}
                        >
                            {/* Icon môn học */}
                            <View style={[styles.courseIconBox, { backgroundColor: item.iconBg }]}>
                                <MaterialCommunityIcons
                                    name={item.iconName}
                                    size={28}
                                    color={item.iconColor}
                                />
                            </View>
                            {/* Thông tin môn học & Thanh tiến độ */}
                            <View style = {styles.courseInfo}>
                                <Text style = {styles.courseName} numberOfLines={1}>
                                    {item.name}
                                </Text>
                                <View style = {styles.courseMetaRow}>
                                    <Text style = {styles.courseMetaText}>{item.lessons} bài học </Text>
                                    <Text style = {styles.courseMetaText}>
                                        {item.completed === 100 ? 'Đã hoàn thành' : `${item.completed}% hoàn thành`}
                                    </Text>
                                </View>
                                {/* Thanh tiến độ */}
                                <View style={styles.progressBarBackground}>
                                    <View
                                    style={[
                                        styles.progressBarFill,
                                        {
                                        width: `${item.completed}%`,
                                        backgroundColor: item.color,
                                        },
                                    ]}
                                    />
                                </View>
                            </View>
                        </Pressable>
            )}/>
        </ScrollView>
    );
};

const getStyles = (colors : any) => StyleSheet.create({
  container : {
    flex : 1 ,
    backgroundColor : colors.background,
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
    color: colors.textSub,
    marginBottom: 4,
  },
  userName : {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textMain,
  },
  headerRight:{
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12,
  },
  themeBtn : {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  noticationBtn : {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
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
    color: colors.textMain,
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
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: colors.shadow,
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
    color: colors.textMain,
    marginBottom : 2,
  },
  statLabel : {
    fontSize : 12,
    color: colors.textSub,
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
    backgroundColor: colors.cardBg,
    borderRadius : 24,
    paddingHorizontal : 16,
    shadowColor: colors.shadow,
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
    color: colors.shadow,
  },
  filterButton : {
    width : 48, 
    height : 48 ,
    borderRadius : 24,
    backgroundColor: colors.cardBg,
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 12,
    shadowColor: colors.shadow,
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
    backgroundColor: colors.cardBg,
    borderRadius : 18,
    padding : 14,
    marginBottom : 14,
    shadowColor: colors.shadow,
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
    color: colors.textMain,
    marginBottom: 6,
  },
  courseMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  courseMetaText: {
    fontSize: 13,
    color: colors.textSub,
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