// Dữ liệu thống kê
interface Statistic {
    id : string;
    title : string;
    value : string;
    icon : string ;
    bgColor : string;
};
const statsData : Statistic[] = [
    {
      id: '1',
      title: 'Tổng môn học',
      value: '10',
      icon: '📘',
      bgColor: '#E3F2FD',
    },
    {
      id: '2',
      title: 'Số bài tập',
      value: '25',
      icon: '📋',
      bgColor: '#FBE9E7',
    },
    {
      id: '3',
      title: 'Môn hoàn thành',
      value: '6',
      icon: '🏆',
      bgColor: '#FFF8E1',
    },
];

export default statsData;