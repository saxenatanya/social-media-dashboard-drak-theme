
let checkBox = document.querySelector('#switch');
let head = document.querySelector('.head-section');
let creator = document.querySelectorAll('.creator-card');
let bottom = document.querySelectorAll('.bottom__card');


console.log(checkBox);
checkBox.addEventListener('change', function () {
    if (this.checked) {
        console.log(creator);
        document.body.setAttribute('data-theme', 'light');
        head.setAttribute('data-theme', 'light');
        creator.setAttribute('data-theme', 'light');
        bottom.setAttribute('data-theme', 'light');
       
    } else {
        document.body.setAttribute('data-theme', 'dark');
        head.setAttribute('data-theme', 'dark');
        creator.setAttribute('data-theme', 'dark');
        bottom.setAttribute('data-theme', 'dark');
    }
});

// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition')
//     },1000);
// }
