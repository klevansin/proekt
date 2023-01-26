export default (dom) => {
    const rect = dom.getBoundingClientRect();
    return {
        x: rect.left + window.pageXOffset,
        y: rect.top + window.pageYOffset,
        w: rect.width,
        h: rect.height,
    };
};
