const divInvisible = document.getElementsByClassName("reveal");

setInterval(function isVisible() {
    for (let item of divInvisible) {
        const {top, bottom} = item.getBoundingClientRect();

        if ({top, bottom}) {
            item.classList.add('reveal_active');
        }

        if (bottom < 0 || top > window.innerHeight) {
            item.classList.remove('reveal_active');
        } 
    }   
}, 1000);

// window.addEventListener('scroll', function isVisible() {
//     for (let item of divInvisible) {
//         const {top, bottom} = item.getBoundingClientRect();
    
//         if ({top, bottom}) {
//            item.classList.add('reveal_active');
//         }
    
//         if (bottom < 0 || top > window.innerHeight) {
//             item.classList.remove('reveal_active');
//         } 
//     }    
// } );