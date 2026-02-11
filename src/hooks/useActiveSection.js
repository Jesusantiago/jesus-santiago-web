import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            let nextActiveSection = '';

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        nextActiveSection = id;
                        break;
                    }
                }
            }

            setActiveSection(nextActiveSection);
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
};