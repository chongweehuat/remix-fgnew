import Generic from "./Generic";
import XTag from "./XTag";

const HomePage = ({ blok }) => {

    const hero = ({ blok }) => {
        //console.log('hero',blok.section);
        const elements = blok.section.elements.reduce((acc, item) => {
            const { component, ...rest } = item;
            acc[component] = rest;
            return acc;
        }, {});
        //console.log('hero elements',elements);
        return (
            <XTag tag="section"
                css="relative bg-cover bg-center"
                data={blok.section.wrapperClass}
                dataRef="section_wrapperClass"
                style={{
                    backgroundImage: `url(${elements.asset.asset.filename})`
                }}
            >
                <XTag
                    css="absolute inset-0 bg-black opacity-0"
                    data={blok.section.elementClass}
                    dataRef="section_elementClass"
                ></XTag>

                <XTag
                    css="relative flex justify-center items-center min-h-screen px-4"
                    data={blok.section.itemClass}
                    dataRef="section_itemClass"
                >
                    <XTag
                        css="bg-white bg-opacity-90 max-w-3xl w-full mx-4 lg:mx-auto px-8 py-12 lg:py-16 rounded-lg shadow-lg"
                        data={blok.section.unitClass}
                        dataRef="section_unitClass"
                    >
                        <XTag
                            css="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed whitespace-pre-line"
                            data={elements.textarea.class}
                            dataRef="elements_textarea_class"
                        >
                            {elements.textarea.content}
                        </XTag>
                    </XTag>
                </XTag>


            </XTag>
        )
    };

    const highlights = ({ blok }) => {
        return (
            <section class="max-w-6xl mx-auto px-4 py-16">

                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold text-gray-800">Highlights</h3>
                </div>


                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

                    <article class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <a href="https://www.finexusgroup.com/e-invoicing-feasible-for-msmes/" class="block relative">
                            <img
                                src="https://www.finexusgroup.com/wp-content/uploads/2024/09/The-Star-MSME-Article-768x512.jpg"
                                alt="The Star MSME Article"
                                class="w-full h-48 object-cover"
                            />
                            <div class="absolute inset-0 bg-black opacity-20"></div>
                        </a>
                        <div class="p-6">
                            <h2 class="text-lg font-semibold mb-2">
                                <a href="https://www.finexusgroup.com/e-invoicing-feasible-for-msmes/" class="hover:text-blue-600">
                                    e-Invoicing: Feasible for MSMEs?
                                </a>
                            </h2>
                            <p class="text-gray-500 text-sm mb-4">September 3, 2024</p>
                            <p class="text-gray-700 text-sm mb-4">
                                MICRO, small, and medium-sized enterprises (MSMEs) represent a remarkable 96.9% of all businesses in Malaysia as of 2023.
                            </p>
                            <a href="https://www.finexusgroup.com/e-invoicing-feasible-for-msmes/" class="text-blue-600 font-semibold hover:underline">
                                Read more »
                            </a>
                        </div>
                    </article>




                    <article class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <a href="https://www.finexusgroup.com/manufacturers-edition-finexus-outlines-case-studies-and-20-must-know-irbm-e-invoicing-rules/" class="block relative">
                            <img
                                src="https://www.finexusgroup.com/wp-content/uploads/2024/09/300924-01-manufacturers_irbm-00-768x432.jpg"
                                alt="Manufacturers IRBM"
                                class="w-full h-48 object-cover"
                            />
                            <div class="absolute inset-0 bg-black opacity-20"></div>
                        </a>
                        <div class="p-6">
                            <h2 class="text-lg font-semibold mb-2">
                                <a href="https://www.finexusgroup.com/manufacturers-edition-finexus-outlines-case-studies-and-20-must-know-irbm-e-invoicing-rules/" class="hover:text-blue-600">
                                    Manufacturers Edition: Finexus Outlines Case Studies and 20 Must-Know IRBM e-Invoicing Rules
                                </a>
                            </h2>
                            <p class="text-gray-500 text-sm mb-4">September 27, 2024</p>
                            <p class="text-gray-700 text-sm mb-4">
                                Malaysia’s manufacturing industry showed a resilient 1.9% year-on-year growth in 1Q2024.
                            </p>
                            <a href="https://www.finexusgroup.com/manufacturers-edition-finexus-outlines-case-studies-and-20-must-know-irbm-e-invoicing-rules/" class="text-blue-600 font-semibold hover:underline">
                                Read more »
                            </a>
                        </div>
                    </article>



                </div>


                <div class="mt-12 text-center">
                    <a href="https://www.finexusgroup.com/news/" class="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition">
                        <span class="mr-2">All News</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </section>

        )
    }

    const aboutus = ({ blok }) => {
        const elements = blok.section.elements.reduce((acc, item) => {
            const { name, ...rest } = item;
            acc[name] = rest;
            return acc;
        }, {});
        //console.log(elements);
        return (
            <XTag
                tag="section"
                data={blok.section.wrapperClass}
                dataRef="section_wrapperClass"
            >
                <XTag
                    css="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto px-4 py-16 lg:py-24 gap-8 lg:gap-16"
                    data={blok.section.containerClass}
                    dataRef="section_containerClass"
                >

                    <XTag
                        css="w-full lg:w-1/2 animate-fadeInLeft"
                        data={blok.section.elementClass}
                        dataRef="section_elementClass"
                    >
                        <XTag
                            css="text-xl lg:text-2xl font-semibold text-gray-800 mb-4"
                            data={elements.heading.class}
                            dataRef="section_elements_heading_class"
                        >{elements.heading.content}</XTag>
                        <XTag
                            css="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-6"
                            data={elements.title.class}
                            dataRef="section_elements_title_class"
                        >
                            {elements.title.content}
                        </XTag>
                    </XTag>

                    <XTag
                        css="w-full lg:w-1/2 animate-fadeInRight"
                        data={blok.section.itemClass}
                        dataRef="section_itemClass"
                    >
                        <XTag
                            css="text-gray-700 leading-relaxed mb-6"
                            data={elements.content.class}
                            dataRef="section_elements_content_class"

                        >{elements.content.content}</XTag>
                        <XTag
                            css="text-left lg:text-left"
                            data={blok.section.unitClass}
                            dataRef="section_unitClass"
                        >
                            <XTag
                                tag="a"
                                href={elements.link.link.cached_url}
                                css="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
                                data={elements.link.class}
                                dataRef="section_elements_link_class"
                            >
                                {elements.link.content}
                            </XTag>
                        </XTag>
                    </XTag>
                </XTag>
            </XTag>
        )
    };

    const features = ({ blok }) => {
        // console.log(blok);
        return (

            <XTag
                tag="section"
                css="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                data={blok.section.wrapperClass}
                dataRef="section_wrapperClass"
            >
                {blok.section.elements.map((element) => {
                    return (
                        <XTag
                            css="bg-white p-6 rounded-lg shadow-lg animate-fadeInUp"
                            data={blok.section.containerClass}
                            dataRef="section_containerClass"
                        >
                            <XTag
                                css="text-xl font-semibold mb-4"
                                data={blok.section.elementClass}
                                dataRef="section_elementClass"

                            >{element.title}</XTag>
                            <XTag
                                css="text-gray-700 mb-6"
                                data={blok.section.itemClass}
                                dataRef="section_itemlass"

                            >{element.content}</XTag>

                            <XTag
                                tag="a"
                                href="https://www.finexusgroup.com/regulatory-solutions/"
                                css="text-blue-600 font-semibold hover:underline"
                                data={blok.section.unitClass}
                                dataRef="section_unitlass"
                            >
                                {element.linkText} &gt;
                            </XTag>
                        </XTag>
                    )
                }

                )}

            </XTag>
        )
    }

    const callaction = ({ blok }) => {
        const elements = blok.section.elements.reduce((acc, item) => {
            const { name, ...rest } = item;
            acc[name] = rest;
            return acc;
        }, {});
        // console.log(elements);
        return (
            <XTag
                tag="section"
                css="relative w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-16"
                data={blok.section.wrapperClass}
                dataRef="section_wrapperClass"
            >
                <XTag

                    css="absolute inset-0 bg-black opacity-30"
                    data={blok.section.containerClass}
                    dataRef="section_containerClass"
                ></XTag>
                <XTag

                    css="relative max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8"
                    data={blok.section.elementClass}
                    dataRef="section_elementClass"
                >
                    <XTag
                        tag="a"
                        href={elements.contactus.link.cached_url}
                        css="relative flex flex-col items-start p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        data={elements.classLink.class}
                        dataRef="elements_classLink_class"
                    >

                        <XTag
                            css="absolute inset-0 bg-cover bg-center rounded-lg"
                            data={elements.bgcontactus.class}
                            dataRef="elements_bgcontactus_class"
                            style={{
                                backgroundImage: `url(${elements.bgcontactus.asset.filename})`
                            }}

                        ></XTag>
                        <XTag

                            css="relative z-10"
                            data={blok.section.unitClass}
                            dataRef="section_unitClass"
                        >
                            <XTag
                                tag="h2"
                                css="text-2xl font-bold text-white mb-4"
                                data={elements.classTitle.class}
                                dataRef="elements_classTitle_class"

                            >{elements.contactus.title}</XTag>
                            <XTag
                                tag="p"
                                css="text-white mb-6"
                                data={elements.classContent.class}
                                dataRef="elements_classContent_class"

                            >
                                {elements.contactus.content}
                            </XTag>
                            <XTag
                                tag="span"
                                css="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
                                data={elements.classButton.class}
                                dataRef="elements_classButton_class"

                            >
                                {elements.contactus.linkText}
                            </XTag>
                        </XTag>
                    </XTag>


                    <XTag
                        tag="a"
                        href={elements.careers.link.cached_url}
                        css="relative flex flex-col items-start p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        data={elements.classLink.class}
                        dataRef="elements_classLink_class"
                    >
                        <XTag
                            css="absolute inset-0 bg-cover bg-center rounded-lg"
                            data={elements.bgcareers.class}
                            dataRef="elements_bgcareers_class"
                            style={{
                                backgroundImage: `url(${elements.bgcareers.asset.filename})`
                            }}

                        ></XTag>
                        <XTag

                            css="relative z-10"
                            data={blok.section.unitClass}
                            dataRef="section_unitClass"
                        >

                            <XTag
                                tag="h2"
                                css="text-2xl font-bold text-white mb-4"
                                data={elements.classTitle.class}
                                dataRef="elements_classTitle_class"

                            >{elements.careers.title}</XTag>
                            <XTag
                                tag="p"
                                css="text-white mb-6"
                                data={elements.classContent.class}
                                dataRef="elements_classContent_class"

                            >
                                {elements.careers.content}</XTag>
                            <XTag
                                tag="span"
                                css="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
                                data={elements.classButton.class}
                                dataRef="elements_classButton_class"

                            >    {elements.careers.linkText}
                            </XTag>
                        </XTag>
                    </XTag>
                </XTag>
            </XTag>

        )
    }

    return <Generic blok={blok} customSectionMap={{ hero, highlights, aboutus, features, callaction }} />
};

export default HomePage;
