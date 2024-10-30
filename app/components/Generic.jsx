import {
    StoryblokComponent,
    storyblokEditable
  } from "@storyblok/react";

  import XTag from "../components/XTag";
  
  const Generic = ({ blok, customSectionMap = {} }) => {  
    // console.log('Generic',blok.content.sections);
    const SectionLink = ({link, children}) =>(
        link?.cached_url ? <a href={link.cached_url} >{children}</a> : <>{children}</>
    );
    return (
      <XTag data={blok.content.wrapperClass} dataRef="page_wrapperClass">
        <XTag data={blok.content.containerClass} dataRef="page_containerClass">
          <XTag data={blok.content.mainClass} dataRef="page_mainClass">
            {blok.content.sections?.map((section, i) => {
              //console.log('Generic section',section);
              const Component = customSectionMap[section.name]; 
              return Component ? (
                <Component key={i} blok={{section,settings:blok.settings}} />
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
  