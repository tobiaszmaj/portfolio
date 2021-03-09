import React, {
    Dispatch,
    SetStateAction,
    useState,
    useEffect,
    createContext,
    ReactNode,
} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Props {
    children: ReactNode;
}

interface ContextProps {
    activeLink: string;
    isTransparent: boolean;
    isFullNavVisible: boolean;
    setIsFullNavVisible: Dispatch<SetStateAction<boolean>>;
}

export const NavigationContext = createContext<ContextProps>({
    activeLink: 'home',
    isTransparent: true,
    isFullNavVisible: false,
    setIsFullNavVisible: () => null,
});

gsap.registerPlugin(ScrollTrigger);

const NavigationProvider = ({ children }: Props) => {
    const [activeLink, setActiveLink] = useState('home');
    const [isTransparent, setIsTransparent] = useState(true);
    const [isFullNavVisible, setIsFullNavVisible] = useState(false);

    useEffect(() => {
        ScrollTrigger.create({
            start: '50',
            onToggle: ({ isActive }) => setIsTransparent(!isActive),
        });

        ScrollTrigger.create({
            trigger: '#home',
            start: 'top center',
            end: '+=500',
            onToggle: ({ isActive }) => isActive && setActiveLink('home'),
        });

        ScrollTrigger.create({
            trigger: '#technologies',
            start: 'top center',
            end: '+=500',
            onToggle: ({ isActive }) => isActive && setActiveLink('technologies'),
        });
    }, []);

    const context = {
        activeLink,
        isTransparent,
        isFullNavVisible,
        setIsFullNavVisible,
    };

    return (
        <NavigationContext.Provider value={context}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationProvider;