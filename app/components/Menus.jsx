import {
    StoryblokComponent,
    storyblokEditable
} from "@storyblok/react";

const Menus = ({ blok }) => {

    const Wrapper = ({ className, children }) => (
        className ? <div className={className}>{children}</div> : <>{children}</>
    );

    // Recursive function to handle submenu rendering
    const renderMenu = (menuElement) => {
        return (
            <li key={menuElement._uid} className="relative-group">
                {/* Main menu link */}
                <StoryblokComponent blok={menuElement} />

                {/* Render submenu if it exists */}
                {menuElement.submenu && menuElement.submenu.length > 0 && (
                    <ul className={menuElement.submenuClass}> {/* Add class for submenu styling */}
                        {menuElement.submenu.map((submenuItem) => (
                            renderMenu(submenuItem) // Recursively render submenu items
                        ))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <Wrapper className={blok.wrapperClass}>
            
                {/* Main Menu */}
                <ul className={blok.containerClass}> {/* Add class for main menu styling */}
                    {blok.elements.map((element, j) => { 
                        return renderMenu(element);  // Call the recursive function
                    })}
                </ul>
            
        </Wrapper>
    );
};

export default Menus;
