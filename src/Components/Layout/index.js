import React from 'react';
import {Link} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div className="hero">
            <div className="leftbar">
                <ul className="links mt-14 ml-8">
                    <li className="mb-6 text-white links__custom"><Link to="/tasks">Задачи и работы</Link></li>
                    <li className="mb-6 text-white links__custom"><Link to="/projects">Проекты</Link></li>
                    <li className="mb-6 text-white links__custom"><Link to="/calendar">Календарь</Link></li>
                    <li className="text-white links__custom"><Link to="/orders">Возможности</Link></li>
                </ul>
            </div>
            <div className="rightbar">
                {children}
            </div>
        </div>
    );
};

export default Layout;