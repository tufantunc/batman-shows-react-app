import React, { Component } from 'react';
import Link from 'next/link';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';

class Header extends Component {
    render() {
        return (
            <nav className={`${Bootstrap.navbar} ${Bootstrap['fixed-top']} ${Bootstrap['navbar-expand']} ${Bootstrap['navbar-dark']} ${Bootstrap['bg-primary']}`}>
                <div className={`${Bootstrap.container} ${Bootstrap.collapse} ${Bootstrap['navbar-collapse']}`} id="mainmenu">
                    <ul className={`${Bootstrap['navbar-nav']} ${Bootstrap['mr-auto']} ${Bootstrap['mt-2']} ${Bootstrap['mt-lg-0']}`}>
                        <li className={Bootstrap['nav-item']}>
                            <Link href="/">
                                <a className={Bootstrap['nav-link']}>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className={Bootstrap['nav-link']}>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;