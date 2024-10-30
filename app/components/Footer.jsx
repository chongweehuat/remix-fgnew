import { FiLinkedin, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import XTag from "./XTag";

const Footer = ({ blok }) => {
    const sections = blok.content.sections.reduce((acc, item) => {
        const { name, ...rest } = item;
        acc[name] = rest;
        return acc;
    }, {});
    const leftSection = sections.LeftSection.elements.reduce((acc, item) => {
        const { component, ...rest } = item;
        acc[component] = rest;
        return acc;
    }, {});
    const rightSection = sections.RightSection.elements.reduce((acc, item) => {
        const { component, ...rest } = item;
        acc[component] = rest;
        return acc;
    }, {});
    // console.log('right section',rightSection.blocks.grid);
    return (
        <XTag 
            tag="footer" 
            css="bg-gray-800 text-white py-8" 
            data={blok.content.wrapperClass} 
            dataRef="page_wrapperClass"
        >
            <XTag 
                css="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4"
                data={blok.content.containerClass} 
                dataRef="page_containerClass"
            >
                {/* Left Section */}
                <XTag css="flex flex-col items-center md:items-start" data={sections.LeftSection.wrapperClass} dataRef="sections_LeftSection_wrapperClass">
                    <XTag 
                        tag="p" 
                        css="text-lg mb-4" 
                        data={leftSection.socialLinks.titleClass} 
                        dataRef="leftSection_socialLinks_titleClass"
                    >{leftSection.socialLinks.title}</XTag>
                    <XTag 
                        css="flex space-x-4" 
                        data={leftSection.socialLinks.SocialWrapperClass}
                        dataRef="leftSection_socialLinks_SocialWrapperClass"
                    >
                        <XTag 
                            tag="a" 
                            href={leftSection.socialLinks.LinkInLink.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            css="text-white hover:text-blue-400"
                            data={leftSection.socialLinks.LinkInClass}
                            dataRef="leftSection_socialLinks_LinkInClass"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <XTag 
                                tag={FiLinkedin} 
                                css="h-6 w-6" 
                                data={leftSection.socialLinks.SocialIconClass}
                                dataRef="leftSection_socialLinks_SocialIconClass"
                            />
                        </XTag>
                        <XTag 
                            tag="a" 
                            href={leftSection.socialLinks.FaceBookLink.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            css="text-white hover:text-blue-400"
                            data={leftSection.socialLinks.FaceBookClass}
                            dataRef="leftSection_socialLinks_FaceBookClass"
                        >
                            <span className="sr-only">FaceBook</span>
                            <XTag 
                                tag={FiFacebook} 
                                css="h-6 w-6" 
                                data={leftSection.socialLinks.SocialIconClass}
                                dataRef="leftSection_socialLinks_SocialIconClass"
                            />
                        </XTag>
                        <XTag 
                            tag="a" 
                            href={leftSection.socialLinks.InstagramLink.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            css="text-white hover:text-blue-400"
                            data={leftSection.socialLinks.InstagramClass}
                            dataRef="leftSection_socialLinks_InstagramClass"
                        >
                            <span className="sr-only">Instagram</span>
                            <XTag 
                                tag={FiInstagram} 
                                css="h-6 w-6" 
                                data={leftSection.socialLinks.SocialIconClass}
                                dataRef="leftSection_socialLinks_SocialIconClass"
                            />
                        </XTag>
                        <XTag 
                            tag="a" 
                            href={leftSection.socialLinks.YoutubeLink.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            css="text-white hover:text-blue-400"
                            data={leftSection.socialLinks.YoutubeClass}
                            dataRef="leftSection_socialLinks_YoutubeClass"
                        >
                            <span className="sr-only">Youtube</span>
                            <XTag 
                                tag={FiYoutube} 
                                css="h-6 w-6" 
                                data={leftSection.socialLinks.SocialIconClass}
                                dataRef="leftSection_socialLinks_SocialIconClass"
                            />
                        </XTag>
                    </XTag>
                    <XTag tag="p" css="mt-4" data={leftSection.text.class} dataRef="leftSection_text_class">{leftSection.text.content}</XTag>
                </XTag>

                {/* Right Section */}
                <XTag 
                    css="flex flex-col items-center md:items-start"
                    data={sections.RightSection.wrapperClass}
                    dataRef="sections_RightSection_wrapperClass"
                >
                    <XTag 
                        tag="h2" 
                        css="text-lg mb-2"
                        data={rightSection.text.class}
                        dataRef="rightSection_text_class"
                    >{rightSection.text.content}</XTag>
                    <XTag 
                        css="flex flex-col md:flex-row md:space-x-4"
                        data={rightSection.blocks.class}
                        dataRef="rightSection_blocks_class"
                    >
                        <XTag 
                            css="text-sm text-center md:text-left"
                            data={rightSection.blocks.grid[0].class}
                            dataRef="rightSection_blocks_0_class"
                        >{rightSection.blocks.grid[0].content}</XTag>
                        <XTag 
                            css="text-sm text-center md:text-left"
                            data={rightSection.blocks.grid[1].class}
                            dataRef="rightSection_blocks_1_class"
                        >{rightSection.blocks.grid[1].content}</XTag>
                    </XTag>
                </XTag>
            </XTag>
        </XTag>
    );
}

export default Footer;