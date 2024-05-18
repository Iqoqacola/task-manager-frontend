const hideNavbar = () => {
    const pathname = window.location.pathname;
    return pathname === "/login" || pathname === "/signup";
};

export default hideNavbar;