/* My own reproduction of the code without following the tutorial */

/* const slideshowDiv = () => {
    for (let i = 1; i <= 5; i++) {

        const div = document.createElement('div');

        div.style.backgroundImage = `url('images/slideshow/section-1-bg-${i}.jpg')`;

        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);

    }
}

slideshowDiv();

const slideshowDivs = document.querySelectorAll('.slideshow div');

let a = 1;

const slideshow = () => {
    setInterval(() => {
        a++;

        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change');

        if (a <= slideshowDivs.length) {
            div.nextElementSibling.classList.add('change');
        } else {
            slideshowDivs[0].classList.add('change');
            a = 1;
        }

    }, 20000)
}

slideshow(); */

/* End My own reproduction of the code without following the tutorial */

/* Common JS */

document.querySelectorAll('.watch-control, .controls a, iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault();
    })
})

/* End of Common JS */

/* Cube Controls*/

const cube = document.querySelector('.cube');

let y = 20;
let x = 0;
let z = 0;
let bool = true;
let interval;

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
});

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`
});

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
});

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
});

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
});



const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100);
    } else {
        clearInterval(interval)
    }
}

playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false;
    playPause();
});

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true;
    playPause();
});


/* End of Cube Controls */

/* Slideshow */

const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {

        const div = document.createElement('div');

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        /*   if (i === 1) {
              div.classList.add('change');
          } */

        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');

let a = 1;

const slideshow = () => {
    setInterval(() => {
        a++;

        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change');

        if (a <= divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1;
        }
    }, 20000)
}

slideshow();

/* End of Slideshow */

/* Section 3 */
const section3Content = document.querySelector('.section-3-content');

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change');
    }
})
/* End of Section 3 */

/* Section 4 */

const watchBand = document.querySelector('.watch-bands');
const watchCase = document.querySelector('.watch-cases');

const watchUpControl = document.querySelector('.watch-top-control');
const watchDownControl = document.querySelector('.watch-bottom-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
    if (axisY <= -280) {
        watchUpControl.classList.add('hide-control');
    } else {
        watchUpControl.classList.remove('hide-control');
    }

    if (axisY >= 280) {
        watchDownControl.classList.add('hide-control');
    } else {
        watchDownControl.classList.remove('hide-control');
    }

    if (axisX <= -280) {
        watchRightControl.classList.add('hide-control');
    } else {
        watchRightControl.classList.remove('hide-control');
    }

    if (axisX >= 280) {
        watchLeftControl.classList.add('hide-control');
    } else {
        watchLeftControl.classList.remove('hide-control');
    }

};

watchUpControl.addEventListener('click', () => {
    watchCase.style.marginTop = `${axisY -= 70}rem`
    hideControl();
});
watchDownControl.addEventListener('click', () => {
    watchCase.style.marginTop = `${axisY += 70}rem`
    hideControl();
});
watchRightControl.addEventListener('click', () => {
    watchBand.style.marginRight = `${axisX -= 70}rem`
    hideControl();
});
watchLeftControl.addEventListener('click', () => {
    watchBand.style.marginRight = `${axisX += 70}rem`
    hideControl();
});

/* End of Section 4 */