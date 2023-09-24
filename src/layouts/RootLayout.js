import React from 'react';
// import logo from '../images/logo.svg';
import '../styles/App.css';

//ReactRouter Imports
import {Outlet} from 'react-router-dom';

const RootLayout = () => {

    const Footer = () => {

        return (
            <footer className='footer navbar navbar-dark bg-dark variant-dark fixed-bottom'>
                <div className="container flex-nowrap">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Über mich</a>
                        </li>
                    </ul><ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/knowledge">Kenntnisse</a>
                        </li>
                    </ul><ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                    </ul><ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="/download">Download</a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }

    const MainContent = () => {
        return (
            <main className="mt-5 mb-5 pt-2">
                <Outlet />
            </main>
        );
    }

    return (
        <div className="App">
            <MainContent />
            <Footer />
        </div>
    );

}

export default RootLayout;