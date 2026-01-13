

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full grid-layout grid-container py-4 z-999">
            <div className="col-span-2">
                <img src="logo-blondie.png" alt="" className="max-w-[150px] w-full" />
            </div>
            <div className="col-span-1 md:col-span-4 col-start-6 md:col-start-9 flex justify-end md:justify-between md:items-center">
                <button className="hidden md:block font-sans font-medium text-xl cursor-pointer">About</button>
                <button className="hidden md:block font-sans font-medium text-xl cursor-pointer">Menu</button>
                <button className="hidden md:block font-sans font-medium text-xl cursor-pointer">Find us</button>
                <button className="button text-base md:text-xl">EN</button>
            </div>
        </header>
    );
}

export default Header;