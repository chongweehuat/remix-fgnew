import { NavLink } from "@remix-run/react";

const menu = ({blok}) => {
    //console.log('menu',blok);
    const Wrapper = ({ className, children }) => (
        className ? <div className={className} >{children}</div> : <>{children}</>
      );

    const MenuLink = ({menu, children}) =>(
        menu.link.cached_url ? <NavLink key={menu._uid} to={menu.link.cached_url} className={menu.linkClass}>{children}</NavLink> : <>{children}</>
    );

    return (
        <MenuLink menu={blok} >
            <Wrapper className={blok.labelClass}>{blok.label}</Wrapper>
        </MenuLink>
    )
}

export default menu;