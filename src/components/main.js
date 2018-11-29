let state;
const showAbout = () => {
    state = setTimeout(() => {
        document.getElementById('welcome').style.height = '0';
        document.getElementById('hello-msg').style.opacity = '1';
    }, 1000);
}
const stopAbout = () => {
    clearTimeout(state);
}
export { showAbout, stopAbout };