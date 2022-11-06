import React from "react";
import { ReactDOM } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Theme/layout.css";

export default function Layout() {
    return (
        <div id="layout">
            <header id="main-header">
                <nav id="main-menu" className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="active-l nav-item"><Link className="nav-link" to="/">Ідентифікація ризиків</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/analysis">Аналіз ризиків</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/planning">Планування ризиків</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/monitoring">Моніторинг ризиків</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="page-body" className="container-lg">
                <Outlet />
            </div>
        </div>
    );
}