// Dữ liệu thống kê
interface Statistic {
    id : string;
    title : string;
    value : string;
    iconName : string ;
    iconColor : string;
    bgColor : string;
};
const statsData : Statistic[] = [
    {
      id: '1',
      title: 'Tổng môn học',
      value: '10',
      iconName: 'book',
      iconColor: '#2563EB',
      bgColor: '#E3F2FD',
    },
    {
      id: '2',
      title: 'Số bài tập',
      value: '25',
      iconName: 'clipboard',
      iconColor: '#EA580C',
      bgColor: '#FBE9E7',
    },
    {
      id: '3',
      title: 'Môn hoàn thành',
      value: '6',
      iconName: 'trophy',
      iconColor: '#D97706',
      bgColor: '#FFF8E1',
    },
];

export default statsData;