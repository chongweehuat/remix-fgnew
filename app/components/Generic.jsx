import {
    StoryblokComponent,
    storyblokEditable
  } from "@storyblok/react";
  
  const Generic = ({ content, customSectionMap = {} }) => {  // Default value for customSectionMap
    //console.log('Generic',content);
    const Wrapper = ({ className, children }) => (
      className ? <div className={className} >{children}</div> : <>{children}</>
    );
  
    return (
      <Wrapper className={content.containerClass}>
        <Wrapper className={content.mainClass}>
          {content.sections?.map((section, i) => {
            //console.log('Generic section',section);
            const Component = customSectionMap[section.name]; 
            return Component ? (
              <Component key={i} blok={section} />
            ) : (
              <Wrapper key={i} className={section.wrapperClass}>
                <Wrapper className={section.containerClass}>
                {section.elements.map((element, j) =>{
                    //console.log('Generic element',element); 
                    return <StoryblokComponent key={j} blok={element} />
                })}
                </Wrapper>
              </Wrapper>
            );
          })}
        </Wrapper>
      </Wrapper>
    );
  };
  
  export default Generic;
  