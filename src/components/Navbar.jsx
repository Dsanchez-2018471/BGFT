import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}

            <nav>
                <div>
                    <div>
                        <a href="#">Mi blog</a>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/add">Crear nueva publicacion</Link></li>
                            <li><a href="/about">Acerca del Blog</a></li>
                            <li><Link to="https://github.com/Areyes2019092" target='_blank'>Mas proyectos</Link></li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" onClick={toggleSidebar}>
                            <CgMenuRight size={24} color='#fff' />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};
