import { StoryblokComponent } from "@storyblok/react";
import XTag from "../components/XTag";

const blocks = ({blok}) => {
    const BlockLink = ({blok, children}) =>(
        blok.link.cached_url ? <a key={blok._uid} href={blok.link.cached_url} >{children}</a> : <>{children}</>
    );
    return (
        <XTag data={blok.class} dataRef="blocks_class">
            <BlockLink blok={blok} >
                {blok.grid.map((item) => (               
                    <StoryblokComponent key={item._uid} blok={item} />
                ))}
            </BlockLink>
        </XTag>
    )
}

export default blocks;