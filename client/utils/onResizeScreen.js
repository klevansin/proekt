export default (callback) => {
    window.addEventListener('resize', callback);
    return () => {
        window.removeEventListener('resize', callback);
    };
};
