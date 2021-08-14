let checkBox = document.querySelector('#switch');
console.log(checkBox);
checkBox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        console.log(this.checked);
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    },1000);
}
