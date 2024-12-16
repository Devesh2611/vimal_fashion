import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleMenuClick = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [menu, setMenu] = useState("shop");

    const handleSelectMenu = (selectedMenu) => {
        setMenu(selectedMenu);
        setActiveDropdown(null);
        if (isNavbarOpen) {
            setIsNavbarOpen(false);
        }
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <a href="Vimal_Fashion"><img src={logo} alt="Logo" /></a>
                <div>
                    <p>Vimal</p>
                    <p>Fashions</p>
                </div>
            </div>
            <div className="navbar-toggle" onClick={toggleNavbar} style={{ backgroundColor: isNavbarOpen ? '#1d1d1d' : 'transparent' }}>
                <span style={{ transform: isNavbarOpen ? 'rotateY(90deg)' : 'rotateY(0deg)' }}></span>
                <span style={{ transform: isNavbarOpen ? 'rotateZ(45deg)' : 'rotateZ(0deg)' }}></span>
                <span style={{ transform: isNavbarOpen ? 'rotateZ(-45deg)' : 'rotateZ(0deg)' }}></span>
                <span style={{ transform: isNavbarOpen ? 'rotateY(90deg)' : 'rotateY(0deg)' }}></span>
            </div>
            <div className="navbar-links" ref={dropdownRef}>
                <ul className={`navbar-links-list ${isNavbarOpen ? 'show' : ''}`}>
                    <li onClick={() => handleSelectMenu("New")}>
                        <Link to='/New'>NEW</Link>
                        {menu === "New" ? <hr /> : null}
                    </li>
                    <li onClick={() => handleMenuClick('saree')}>Saree</li>
                    <div className={`more ${activeDropdown === 'saree' ? 'show' : ''}`}>
                        <ul>
                            <li onClick={() => handleSelectMenu("Banarasi")}>
                                <Link to='/Banarasi'>Banarasi</Link>
                                {menu === "Banarasi" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Patola")}>
                                <Link to='/Patola'>Patola</Link>
                                {menu === "Patola" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Kanjivaram")}>
                                <Link to='/Kanjivaram'>Kanjivaram</Link>
                                {menu === "Kanjivaram" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Chanderi")}>
                                <Link to='/Chanderi'>Chanderi</Link>
                                {menu === "Chanderi" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Sambalpuri")}>
                                <Link to='/Sambalpuri'>Sambalpuri</Link>
                                {menu === "Sambalpuri" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Mysore Silk")}>
                                <Link to='/Mysore_Silk'>Mysore Silk</Link>
                                {menu === "Mysore Silk" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Bhujodi")}>
                                <Link to='/Bhujodi'>Bhujodi</Link>
                                {menu === "Bhujodi" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Nauvari")}>
                                <Link to='/Nauvari'>Nauvari</Link>
                                {menu === "Nauvari" ? <hr /> : null}
                            </li>
                        </ul>
                    </div>
                    <li onClick={() => handleMenuClick('fabric')}>Fabric</li>
                    <div className={`more ${activeDropdown === 'fabric' ? 'show' : ''}`}>
                        <ul>
                            <li onClick={() => handleSelectMenu("Silk")}>
                                <Link to='/Silk'>Silk</Link>
                                {menu === "Silk" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Cotton")}>
                                <Link to='/Cotton'>Cotton</Link>
                                {menu === "Cotton" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Georgette")}>
                                <Link to='/Georgette'>Georgette</Link>
                                {menu === "Georgette" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Chiffon")}>
                                <Link to='/Chiffon'>Chiffon</Link>
                                {menu === "Chiffon" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Net")}>
                                <Link to='/Net'>Net</Link>
                                {menu === "Net" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Wool")}>
                                <Link to='/Wool'>Wool</Link>
                                {menu === "Wool" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Jute")}>
                                <Link to='/Jute'>Jute</Link>
                                {menu === "Jute" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Satin")}>
                                <Link to='/Satin'>Satin</Link>
                                {menu === "Satin" ? <hr /> : null}
                            </li>
                        </ul>
                    </div>
                    <li onClick={() => handleMenuClick('pattern')}>Pattern</li>
                    <div className={`more ${activeDropdown === 'pattern' ? 'show' : ''}`}>
                        <ul>
                            <li onClick={() => handleSelectMenu("Black Print")}>
                                <Link to='/Black_Print'>Black Print</Link>
                                {menu === "Black Print" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Zari Work")}>
                                <Link to='/Zari_Work'>Zari Work</Link>
                                {menu === "Zari Work" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Floral")}>
                                <Link to='/Floral'>Floral</Link>
                                {menu === "Floral" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Leheriya")}>
                                <Link to='/Leheriya'>Leheriya</Link>
                                {menu === "Leheriya" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Bandhani")}>
                                <Link to='/Bandhani'>Bandhani</Link>
                                {menu === "Bandhani" ? <hr /> : null}
                            </li>
                            <li onClick={() => handleSelectMenu("Embroidery")}>
                                <Link to='/Embroidery'>Embroidery</Link>
                                {menu === "Embroidery" ? <hr /> : null}
                            </li>
                        </ul>
                    </div>
                    <li onClick={() => handleSelectMenu("Contacts")}>
                        <Link to='/Contacts'>Contacts</Link>
                        {menu === "Contacts" ? <hr /> : null}
                    </li>
                    <div className='contacts-icons'>
                        <a href="https://wa.me/9811861670" target="_blank"><i className="fa-brands fa-whatsapp fa-2x"/></a>
                        <a href="tel:+919811861670" target="_blank"><i className="fa-solid fa-phone fa-2x"/></a>
                        <a href="https://www.facebook.com/vimalfashion" target="_blank"><i className="fa-brands fa-square-facebook fa-2x"/></a>
                        <a href="https://www.google.com/maps/place/Vimal+Fashion/@28.6538265,77.2276454,21z/data=!4m6!3m5!1s0x390cfd002f679c65:0x25cc47ffa126ed61!8m2!3d28.6538265!4d77.2277822!16s%2Fg%2F11w323cs15?entry=ttu" target="_blank"><i className="fa-solid fa-location-dot fa-2x"/></a>
                        <a href='https://www.instagram.com/vimalfashion4187' target='blank'><i className='fa-brands fa-square-instagram fa-2x'/></a>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
