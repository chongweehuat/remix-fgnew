const asset = ({blok}) => {
    const AssetLink = ({blok, children}) =>(
        blok.link.cached_url ? <a key={blok._uid} href={blok.link.cached_url} >{children}</a> : <>{children}</>
    );
    return (
        <AssetLink blok={blok} >
            <img
                className={blok.class}
                src={blok.asset.filename}
            />
        </AssetLink>
    )
}

export default asset;