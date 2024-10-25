const asset = ({blok}) => {
    const AssetLink = ({blok, children}) =>(
        blok.link.cached_url ? <a key={blok._uid} href={blok.link.cached_url} >{children}</a> : <>{children}</>
    );
    // console.log('Asset',blok);
    return (
        <AssetLink blok={blok} >
            <img
                className={blok.class}
                src={blok.asset.filename}
                alt={blok.asset.meta_data.alt}
            />
        </AssetLink>
    )
}

export default asset;