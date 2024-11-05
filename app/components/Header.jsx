import { useState } from "react";
import { Link, NavLink, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import {
    StoryblokComponent,
    storyblokEditable
} from "@storyblok/react";
import XTag from "./XTag";

const Header = ({ blok }) => {
    //console.log('Header',blok);
    const [openMenu, setOpenMenu] = useState(false);
    const sections = blok.content.sections.reduce((acc, item) => {
        const { name, ...rest } = item;
        acc[name] = rest;
        return acc;
    }, {});
    // console.log("Header sections:",sections);
    const renderMenu = (elementClass, menuElement) => {

        return (
            <div key={menuElement._uid} >
                {menuElement.submenu.length == 0 && (
                    <StoryblokComponent blok={menuElement} />
                )}

                {/* Render submenu if it exists */}
                {menuElement.submenu && menuElement.submenu.length > 0 && (
                    <XTag useCss css="relative group" data={menuElement.submenuClass} dataRef="submenuClass">
                        <XTag tag="span" css="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer flex items-center" data={menuElement.labelClass} dataRef="menu_labelClass">
                            {menuElement.label}
                            <XTag tag={FiChevronDown} useCss css="ml-1" data={elementClass} dataRef="elementClass" />
                        </XTag>
                        <XTag tag="ul" css="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" data={menuElement.subgroupClass}>
                            {menuElement.submenu.map((submenuItem) => {
                                // console.log('submenuItem', submenuItem);
                                return (
                                    <li key={submenuItem._uid}>
                                        {renderMenu(menuElement.elementClass, submenuItem)}
                                    </li>
                                )
                            }
                            )
                            }
                        </XTag>
                    </XTag>
                )}
            </div>
        );
    };

    return (

        <XTag data={blok.content.wrapperClass} dataRef="page_wrapperClass">
            <XTag css="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data={blok.content.containerClass} dataRef="page_containerClass">
                <XTag data={blok.content.mainClass} dataRef="page_mainClass">
                    <XTag css="flex justify-start lg:w-0 lg:flex-1" data={sections.LogoWrapper.wrapperClass} dataRef="sections_LogoWrapper_wrapperClass">
                        <span className="sr-only">{blok.settings.siteTitle}</span>
                        <XTag tag="img"
                            css="h-20 w-auto sm:h-10 hidden sm:block"
                            data={sections.LogoDesktop.elements[0].class}
                            dataRef="image_class"
                            src={sections.LogoDesktop.elements[0].asset.filename}
                            alt={blok.settings.siteTitle}
                        />
                        <XTag tag="img"
                            css="h-20 w-auto sm:h-10 sm:hidden"
                            data={sections.LogoMobile.elements[0].class}
                            dataRef="image_class"
                            src={sections.LogoMobile.elements[0].asset.filename}
                            alt={blok.settings.siteTitle}
                        />

                    </XTag>
                    <XTag css="-mr-2 -my-2 md:hidden" data={sections.MobileButton.wrapperClass} dataRef="sections_MobileButton_wrapperClass">
                        <XTag tag="button"
                            type="button"
                            onClick={() => setOpenMenu(true)}
                            css="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            data={sections.MobileButton.containerClass}
                            dataRef="sections_MobileButton_containerClass"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open menu</span>
                            <XTag tag={FiMenu} css="h-6 w-6" data={sections.MobileButton.elementClass}
                                dataRef="sections_MobileButton_elementClass" />
                        </XTag>
                    </XTag>
                    <XTag
                        tag="nav"
                        css="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8"
                        data={blok.containerClass}
                        dataRef="menus_containerClass"
                    >
                        {sections.Menus.elements.map((element, j) => {
                            return renderMenu(sections.Menus.elementClass, element);  // Call the recursive function
                        })}
                    </XTag>
                    {openMenu && (
                        <XTag
                            css="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            data={sections.MobileMenu.wrapperClass}
                            dataRef="sections_MobileMenu_wrapperClass"
                        >
                            <XTag
                                css="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
                                data={sections.MobileMenu.containerClass}
                                dataRef="sections_MobileMenu_containerClass"
                            >
                                <XTag
                                    css="pt-5 pb-6 px-5"
                                    data={sections.MobileMenu.elementClass}
                                    dataRef="sections_MobileMenu_elementClass"
                                >
                                    <XTag
                                        css="flex items-center justify-between"
                                        data={sections.MobileMenu.itemClass}
                                        dataRef="sections_MobileMenu_itemClass"
                                    >

                                        <XTag tag="img"
                                            css="h-8 w-auto"
                                            data={sections.MobileMenu.elements[0].class}
                                            dataRef="image_class"
                                            src={sections.MobileMenu.elements[0].asset.filename}
                                            alt={blok.settings.siteTitle}
                                        />

                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={() => setOpenMenu(false)}
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XTag tag={FiX} css="h-6 w-6" />
                                            </button>
                                        </div>
                                    </XTag>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {sections.Menus.elements.map((element, j) => {
                                                return renderMenu(sections.Menus.elementClass, element);  // Call the recursive function
                                            })}
                                        </nav>
                                    </div>
                                </XTag>
                            </XTag>
                        </XTag>
                    )}
                </XTag>
            </XTag>
        </XTag>

    )
};

export default Header;