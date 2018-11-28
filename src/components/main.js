let state;
const showAbout = () => {
    state = setTimeout(() => {
        document.getElementById('welcome').style.height = '0';
        document.getElementById('hello-msg').style.opacity = '1';
    }, 1500);
}
const stopAbout = () => {
    clearTimeout(state);
}
export { showAbout, stopAbout };