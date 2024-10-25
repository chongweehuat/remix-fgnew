const XTag = ({ 
  tag: Tag = 'div', 
  useCss = false,  
  css = '', 
  data = '', 
  dataRef = '', 
  children,
  ...rest 
}) => {
    // Clean up the data string to replace special characters
    const cleanData = data.replace(/&nbsp;/g, ' ').replace(/\xa0/g, ' ');

    // Determine className logic:
    // 1. Use `data` if it exists and `useCss` is false (default).
    // 2. If `useCss` is true, use `css` even if `data` exists.
    // 3. If `data` is empty, fallback to `css`.
    const className = useCss && css 
      ? css  // If useCss is true and css exists, use css
      : cleanData || css;  // Otherwise, use cleanData (data) or fallback to css if data is empty

    // Determine attributes to be passed to the HTML tag
    const tagProps = {
      className: className || undefined,
      // Show data-ref only if data and dataRef are both provided
      'data-ref': data && dataRef ? dataRef : undefined,
      ...rest
    };

    // If both className and children are empty, return an empty fragment (nothing)
    if (!className && !children) {
      return <></>;
    }

    // If className is empty but children exist, render only the children (no wrapper)
    if (!className && children) {
      return <>{children}</>;
    }

    // If Tag is a function (React component), render it with className and data-ref
    if (!children && typeof Tag === 'function') {
      return <Tag {...tagProps} />;
    }

    // For HTML elements or cases with children, render the wrapper only if className exists
    return className ? <Tag {...tagProps}>{children}</Tag> : <>{children}</>;
};

export default XTag;
