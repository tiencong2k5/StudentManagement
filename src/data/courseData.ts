
interface Course {
  id: number;
  name: string;
  lessons: number;
  completed: number;
  color : string;
  iconBg : string;
  icon: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: 'Lập trình hướng đối tượng',
    lessons: 32,
    completed: 85,
    color: '#2B78E4',
    iconBg: '#1E293B',
    icon: '💻',
  },
  {
    id: 2,
    name: 'Cơ sở dữ liệu',
    lessons: 28,
    completed: 70,
    color: '#F97316',
    iconBg: '#FB923C',
    icon: '🗄️',
  },
  {
    id: 3,
    name: 'Mạng máy tính',
    lessons: 24,
    completed: 55,
    color: '#22C55E',
    iconBg: '#334155',
    icon: '🌐',
  },
  {
    id: 4,
    name: 'Phát triển ứng dụng di động',
    lessons: 36,
    completed: 40,
    color: '#EAB308',
    iconBg: '#FACC15',
    icon: '📱',
  },
];

export default courses;