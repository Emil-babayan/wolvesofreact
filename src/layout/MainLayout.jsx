import "./mainlayout.style.scss"

import { Outlet, Link, NavLink } from "react-router-dom"

const activeStyleFn = ({isActive}) => {
    return isActive ? "active-link" : ""
    
}

const MainLayout = () => {
  return (
    <>
        <header>
            <nav>
                    <Link><img src="/kmobile.png" alt="" /></Link>
                <ul>
                    <li>
                        <NavLink to="/" className={activeStyleFn}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="about" className={activeStyleFn} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" className={activeStyleFn} >Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            Footer
        </footer>
    </>
  )
}

export default MainLayout