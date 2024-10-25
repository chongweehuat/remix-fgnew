import {
    StoryblokComponent,
    storyblokEditable
  } from "@storyblok/react";

  import XTag from "../components/XTag";
  
  const Generic = ({ block, customSectionMap = {} }) => {  
    // console.log('Generic',block);
    const SectionLink = ({link, children}) =>(
        link.cached_url ? <a href={link.cached_url} >{children}</a> : <>{children}</>
    );
    return (
      <XTag data={block.content.wrapperClass} dataRef="page_wrapperClass">
        <XTag data={block.content.containerClass} dataRef="page_containerClass">
          <XTag data={block.content.mainClass} dataRef="page_mainClass">
            {block.content.sections?.map((section, i) => {
              //console.log('Generic section',section);
              const Component = customSectionMap[section.name]; 
              return Component ? (
                <Component key={i} blok={{section,settings:block.settings}} />
              ) : (
                <XTag key={i} data={section.wrapperClass} dataRef="section_wrapperClass">
                  <XTag data={section.containerClass} dataRef="section_containerClass">
                    <SectionLink link={section.link} >
                      {section.elements.map((element, j) =>{
                          // console.log('Generic element',element); 
                          return <StoryblokComponent key={j} blok={element} />
                      })}
                    </SectionLink>
                  </XTag>
                </XTag>
              );
            })}
          </XTag>
        </XTag>
      </XTag>
    );
  };
  
  export default Generic;
  