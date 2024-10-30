import { NavLink } from "@remix-run/react";
import XTag from "../components/XTag";

const menu = ({blok}) => {
    // console.log('menu',blok);
    
    const MenuLink = ({menu, children}) =>(
        menu.link.cached_url ? <XTag tag={NavLink} css="text-base lg:text-lg font-medium text-gray-700 hover:text-indigo-600" key={menu._uid} to={menu.link.cached_url} data={menu.linkClass} dataRef="menu_linkClass">{children}</XTag> : <>{children}</>
    );

    return (
        <MenuLink menu={blok} >
            <XTag data={blok.labelClass} dataRef="menu_labelClass">{blok.label}</XTag>
        </MenuLink>
    )
}

export default menu;