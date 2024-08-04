import { useState } from 'react';
import MenuHome from "../../assets/bannerApp/MenuHome.jfif";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import RowRight from './Item/RowRight';
import Close from './Item/Close';
import LogoSvg from './Item/LogoSvg';
import LogoRed from './Item/LogoRed';

const MenuBar = ({ closeMenu }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const menuItems = [
        { key: 'home', label: 'Home', link: '/' },
        { key: 'aboutUs', label: 'About Us', link: '#' },
        {
            key: 'tours', label: 'Tours', link: '#', hasDropdown: true, subMenu: [
                { key: 'bestBudget', label: 'Best Budget', link: '#' },
                { key: 'standard', label: 'Standard', link: '#' },
                { key: 'premium', label: 'Premium', link: '#' }
            ]
        },
        { key: 'activity', label: 'Activity', link: '#' },
        { key: 'destination', label: 'Destination', link: '#' },
        { key: 'blog', label: 'Blog', link: '#' },
        { key: 'faq', label: 'FAQ', link: '#' },
        { key: 'contact', label: 'Contact', link: '#' }
    ];

    return (
        <div className="MenuBar">
            <img src={MenuHome} alt="MenuHome" className="MenuHome-img-App" />
            <div className="MenuBar-menuHome">
                <div className="MenuBar-left">
                    <div className='MenuBar-left-LogoSvg'>
                        <LogoSvg /> <p><LogoRed /></p>
                    </div>
                    <div className="MenuBar-left-LinkText">
                        {menuItems.map((item) => (
                            <div key={item.key} className="MenuBar-left-A">
                                <a
                                    href={item.link}
                                    className={activeMenu === item.key ? 'transferMenu' : ''}
                                    onClick={(e) => {
                                        if (item.hasDropdown) {
                                            e.preventDefault();
                                            toggleMenu();
                                        } else {
                                            handleMenuClick(item.key);
                                        }
                                    }}
                                >
                                    {activeMenu === item.key && <RowRight />} {item.label}
                                    <p>{item.hasDropdown && (menuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />)}</p>
                                </a>
                                {item.hasDropdown && menuOpen && (
                                    <ul>
                                        {item.subMenu.map((subItem) => (
                                            <li className='MenuBar-li-Item' key={subItem.key}>
                                                <a className={activeMenu === subItem.key ? 'transferMenu' : ''} href={subItem.link}>
                                                    {activeMenu === subItem.key && <RowRight />} {subItem.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="MenuBar-right">
                    <button className='button-home-Close' onClick={() => { closeMenu() }}><Close /></button>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
