import {
    createContext,
    ReactNode,
    useContext,
    useState
} from "react";
import { ImageBackground } from "react-native";

const colors = {
    light : {
        background: '#F5F7FB',
        cardBg: '#FFFFFF',
        textMain: '#0F172A',
        textSub: '#475569',
        textMuted: '#94A3B8',
        iconDefault: '#475569',
        shadow: '#000000',
    },
    dark : {
        background: '#111827',
        cardBg: '#1F2937', // Màu thẻ sáng hơn nền dark một chút
        textMain: '#F8FAFC',
        textSub: '#CBD5E1',
        textMuted: '#64748B',
        iconDefault: '#F8FAFC',
        shadow: '#000000',
    }
};

type ThemeContextType = {
  theme: string;
  palette : typeof colors.light;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children } : {children : ReactNode}) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme(prev =>
            prev === "light"
                ? "dark"
                : "light"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                palette : colors[theme], // lấy  bảng màu theo theme  hiện tại
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}