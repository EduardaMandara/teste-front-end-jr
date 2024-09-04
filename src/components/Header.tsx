import React from 'react';
import './Header.scss';
import { NavItem } from '../types';

const navItems: NavItem[] = [
    { label: 'INSTITUCIONAL', link: '#' },
    { label: 'UNIFORMES', link: '#' },
    { label: 'MODA', link: '#' },
    { label: 'HOME', link: '#' },
    { label: 'ELETRONICOS', link: '#' },
];

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="logo.png" alt="VTEX" />
            </div>
            <nav className="header__nav">
                {navItems.map((item, index) => (
                    <a key={index} href={item.link} className="header__nav-item">
                        {item.label}
                    </a>
                ))}
            </nav>
            <div className="header__search">
                <input type="text" placeholder="Buscar..." />
                <button type="submit">
                    <img src="search-icon.png" alt="Buscar" />
                </button>
            </div>
            <div className="header__icons">
                <img src="user-icon.png" alt="Usuário" />
                <img src="favorites-icon.png" alt="Favoritos" />
                <img src="cart-icon.png" alt="Carrinho" />
                <img src="more-icon.png" alt="Mais" />
            </div>
        </header>
    );
};

export default Header;
