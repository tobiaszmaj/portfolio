import React, { useState, useEffect, createContext, ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
    children: ReactNode;
}

interface ContextProps {
    activeLink: string;
    isTransparent: boolean;
    isFullNavVisible: boolean;
    handleFullNav: (isVisible: boolean) => void;
}

export const NavigationContext = createContext<ContextProps>({
    activeLink: 'home',
    isTransparent: true,
    isFullNavVisible: false,
    handleFullNav: () => null,
});

const NavigationProvider = ({ children }: Props) => {
    const [activeLink, setActiveLink] = useState('home');
    const [isTransparent, setIsTransparent] = useState(true);
    const [isFullNavVisible, setIsFullNavVisible] = useState(false);

    const handleFullNav = (isVisible: boolean) => {
        setIsFullNavVisible(isVisible);

        if (isVisible) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        ScrollTrigger.create({
            start: '50',
            endTrigger: 'footer',
            end: 'bottom top',
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
        handleFullNav,
    };

    return (
        <NavigationContext.Provider value={context}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationProvider;