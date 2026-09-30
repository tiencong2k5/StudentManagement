
interface Course {
  id: string;
  name: string;
  lessons: number;
  completed: number;
  color : string;
  iconBg : string;
  iconName: string;
  iconColor : string;
}

const courses: Course[] = [
  {
      id: '1',
      name: 'Lập trình React Native',
      lessons: 12,
      completed: 100,
      color: '#2B78E4',
      iconBg: '#1E293B',
      iconName: 'react',
      iconColor: '#38BDF8',
    },
    {
      id: '2',
      name: 'Cơ sở dữ liệu SQL',
      lessons: 15,
      completed: 40,
      color: '#F97316',
      iconBg: '#FB923C',
      iconName: 'database',
      iconColor: '#1E293B',
    },
    {
      id: '3',
      name: 'Thiết kế UI/UX',
      lessons: 10,
      completed: 90,
      color: '#22C55E',
      iconBg: '#334155',
      iconName: 'palette-swatch',
      iconColor: '#F43F5E',
    },
    {
      id: '4',
      name: 'Lập trình Web (HTML, CSS)',
      lessons: 14,
      completed: 60,
      color: '#EAB308',
      iconBg: '#FACC15',
      iconName: 'xml',
      iconColor: '#1E293B',
    },
];

export default courses;