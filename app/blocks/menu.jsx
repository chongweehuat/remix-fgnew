import { NavLink } from "@remix-run/react";
import XTag from "../components/XTag";

const menu = ({blok}) => {
    // console.log('menu',blok);
    
    const MenuLink = ({menu, children}) =>(
        menu.link.cached_url ? <NavLink key={menu._uid} to={menu.link.cached_url} className={menu.linkClass}>{children}</NavLink> : <>{children}</>
    );

    return (
        <MenuLink menu={blok} >
            <XTag data={blok.labelClass} dataRef="menu_labelClass">{blok.label}</XTag>
        </MenuLink>
    )
}

export default menu;