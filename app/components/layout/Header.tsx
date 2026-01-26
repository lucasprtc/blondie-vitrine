"use client";

interface MenuItem {
    label: string;
    image: string;
    sectionId: string;
}

const Header = () => {
    const menuItems: MenuItem[] = [
        { label: 'About', image: '/food/pepper.png', sectionId: 'about' },
        { label: 'Menu', image: '/food/origano.png', sectionId: 'menu' },
        { label: 'Contact', image: '/food/mushroom.png', sectionId: 'contact' }
    ];

    const handleMenuItemClick = (sectionId: string): void => {        
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full grid-layout grid-container py-3 z-998">
            <button className="col-span-2 cursor-pointer" onClick={() => handleMenuItemClick('home')}>
                <img src="logo-blondie.png" alt="" className="max-w-[150px] w-full" />
            </button>
            <div className="col-span-1 md:col-span-4 col-start-6 md:col-start-9 flex justify-end md:justify-between md:items-center">
                {menuItems.map((item, index) => (
                    <button onClick={() => handleMenuItemClick(item.sectionId)} key={index} className="hidden lg:block font-medium text-lg cursor-pointer relative group leading-6">
                        <span className="z-10 relative">{item.label}</span>
                        <img src={item.image} alt="" className="absolute -top-1.5 max-w-[35px] z-0 duration-200 transition-all opacity-0 -right-8 group-hover:-right-5 group-hover:opacity-60" />
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-200 ease-out group-hover:w-full"></span>
                    </button>
                ))}
                <button className="button font-primary text-base lg:text-lg">EN</button>
            </div>
        </header>
    );
}

export default Header;