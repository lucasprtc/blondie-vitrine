"use client";
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MenuItem {
    label: string;
    borderWidth: string;
    sectionId: string;
}

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const bordersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (panelRef.current) {
            gsap.set(panelRef.current, { y: '100%', opacity: 0 });
        }
        
        if (overlayRef.current) {
            gsap.set(overlayRef.current, { opacity: 0 });
        }
        
        menuItemsRef.current.forEach((item) => {
            if (item) {
                gsap.set(item, { opacity: 0, y: 20 });
            }
        });

        bordersRef.current.forEach((border) => {
            if (border) {
                gsap.set(border, { scaleX: 0, transformOrigin: 'left center' });
            }
        });
    }, []);

    const openMenu = (): void => {
        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        });
        
        gsap.to(menuButtonRef.current, {
            opacity: 0,
            autoAlpha: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setIsOpen(true);
                gsap.set(menuButtonRef.current, { display: "none" });
            }
        });
        
        gsap.to(panelRef.current, {
            y: '0%',
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            delay: 0.2
        });

        menuItemsRef.current.forEach((item, index) => {
            if (item) {
                gsap.to(item, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: 0.4 + (index * 0.1),
                    ease: 'power2.out'
                });
            }
        });

        bordersRef.current.forEach((border, index) => {
            if (border) {
                gsap.to(border, {
                    scaleX: 1,
                    duration: 0.6,
                    delay: 0.5 + (index * 0.1),
                    ease: 'power2.out'
                });
            }
        });
    };

    const closeMenu = (): void => {
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.3,
            ease: 'power2.in'
        });

        gsap.to(bordersRef.current, {
            scaleX: 0,
            duration: 0.3,
            ease: 'power2.in'
        });

        gsap.to(menuItemsRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: 'power2.in'
        });

        gsap.to(panelRef.current, {
            y: "100%",
            opacity: 0,
            duration: 0.4,
            delay: 0.2,
            ease: "power3.in",
            onComplete: () => {
                setIsOpen(false);
                gsap.set(menuButtonRef.current, {
                    display: "flex",
                    autoAlpha: 0,
                    y: 20
                });
                
                gsap.to(menuButtonRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });
    };

    const handleMenuItemClick = (sectionId: string): void => {
        closeMenu();
        
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 800);
    };

    const menuItems: MenuItem[] = [
        { label: 'Home', borderWidth: 'w-1/3', sectionId: 'home' },
        { label: 'About', borderWidth: 'w-1/3', sectionId: 'about' },
        { label: 'Menu', borderWidth: 'w-1/3', sectionId: 'menu' },
        { label: 'Contact', borderWidth: 'w-[80%]', sectionId: 'contact' }
    ];

    return (
        <>
            <div
                ref={overlayRef}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/50 z-998 pointer-events-none opacity-0"
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            />
            
            <div className="fixed w-full bottom-0 z-999 lg:hidden pointer-events-none">
                <div
                    ref={panelRef}
                    className={`w-full ${isOpen ? 'flex' : 'hidden'} flex-col gap-4 bg-white rounded-[10px] px-4 py-5 pointer-events-auto relative overflow-hidden`}
                >
                    {menuItems.map((item, index) => (
                        <button
                            key={item.label}
                            ref={(el) => { menuItemsRef.current[index] = el; }}
                            onClick={() => handleMenuItemClick(item.sectionId)}
                            className="text-2xl w-full justify-start flex flex-col gap-1"
                        >
                            <span className='text-left'>{item.label}</span>   
                            <div
                                ref={(el) => { bordersRef.current[index] = el; }}
                                className={`${item.borderWidth} h-px bg-black`}
                            ></div>
                        </button>
                    ))}

                    <button
                        ref={(el) => { menuItemsRef.current[4] = el; }}
                        onClick={closeMenu}
                        className="text-2xl text-left w-full flex flex-col gap-1"
                    >
                        <span>Close</span>
                    </button>
                    <div className="flex w-fit flex-col absolute right-0 top-2 gap-1">
                        <img src="/food/pepperoni.png" alt="pepperoni" className="opacity-60 max-w-14 translate-x-[40%]" />
                        <img src="/food/mushroom.png" alt="pepperoni" className="opacity-60 max-w-14 translate-x-[40%]" />
                        <img src="/food/origano.png" alt="pepperoni" className="opacity-60 max-w-14 translate-x-[40%]" />
                        <img src="/food/pepper.png" alt="pepperoni" className="opacity-60 max-w-14 translate-x-[40%]" />
                        <img src="/food/basil.png" alt="pepperoni" className="opacity-60 max-w-14 translate-x-[40%]" />
                    </div>
                </div>
                
                <button
                    ref={menuButtonRef}
                    onClick={openMenu}
                    className="pl-5 font-primary text-2xl underline underline-offset-4 mb-5 pointer-events-auto"
                >
                    Menu
                </button>
            </div>
        </>
    );
};

export default Menu;