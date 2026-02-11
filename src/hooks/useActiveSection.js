
import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // offset para el header

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        console.log('Sección activa:', id); // Para debuggear
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        // Ejecutar al cargar
        handleScroll();

        // Ejecutar al hacer scroll
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
};



// import { useState, useEffect } from 'react';
//
// const useActiveSection = (sectionsIds) => {
//     const [activeSection, setActiveSection] = useState("");
//
//     useEffect(() => {
//         const observerOptions = {
//             root: null,
//             rootMargin: '-20% 0px -70% 0px',
//             threshold: 0,
//         }
//
//         const observerCallback = (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     setActiveSection(entry.target.id);
//                 }
//             });
//         };
//
//         const observer = new IntersectionObserver(observerCallback, observerOptions);
//
//         sectionsIds.forEach((sectionId) => {
//             const element = document.getElementById(sectionId);
//             if (element) {
//                 console.log("hola")
//                 observer.observe(element);
//             }
//         })
//
//         return () => observer.disconnect();
//
//     }, [sectionsIds]);
//
//     return activeSection;
// }
//
// export { useActiveSection };