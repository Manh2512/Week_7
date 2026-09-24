function Navigation({activePage}){
    const links = [
        {name: "Home", path: "/"},
        {name: "Menu", path: "/menu"},
        {name: "Music", path: "/music"},
        {name: "Jobs", path: "/jobs"}
    ];

    return (
        <nav className="float-left w-[160px] bg-[#ddc9a3] px-[15px] py-5">
            {links.map(link => (
                <a
                    key={link.name}
                    href={link.path}
                    className={`block font-bold no-underline mb-[10px] ${
                        activePage === link.name
                            ? "text-[#3a2a1a]"
                            : "text-[#8a7860] hover:text-[#3a2a1a]"
                    }`}
                >
                    {link.name}
                </a>
            ))}
        </nav>
    );
}

export default Navigation;