function throttle (func, limit){
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function (){
                inThrottle = false
            }, limit)
        }
    }
}
const Slider = {
    activeSlide: 0,
    slider: document.getElementsByClassName('slider')[0],

    createSlides: function (images) {
        Slider.images = images;
        Slider.checkActiveSlide();
        let previousSlide = Slider.activeSlide === 0 ? images.length -1 : Slider.activeSlide - 1;
        let nextSlide = (Slider.activeSlide === images.length - 1) ? 0 : Slider.activeSlide +1;

        let section = document.createElement('section');
        section.classList.add('slider__item', 'active');
        section.style.background = `url(${images[Slider.activeSlide]}) no-repeat center`;
        section.style.backgroundSize = 'cover';

        Slider.slider.append(section);

        let previousSection = document.createElement('section');
        previousSection.classList.add('slider__item', 'previous');
        previousSection.style.background = `url(${images[previousSlide]}) no-repeat center`;
        previousSection.style.backgroundSize = 'cover';

        Slider.slider.append(previousSection);

        let nextSection = document.createElement ('section');
        nextSection.classList.add('slider__item', 'next');
        nextSection.style.background = `url(${images[nextSlide]}) no-repeat center`;
        nextSection.style.backgroundSize = 'cover';

        Slider.slider.append(nextSection);
    },
    toNext: throttle(function (){
        let nextItem = document.getElementsByClassName('next')[0];
        nextItem.classList.add('toActive');
        setTimeout(function () {
            nextItem.classList.remove('toActive');
            Slider.activeSlide++;
            Slider.checkActiveSlide();
            let nextSlide = (Slider.activeSlide === Slider.images.length - 1) ? 0 : Slider.activeSlide +1;
            let activeItem = document.getElementsByClassName('active')[0];
            let previousItem = document.getElementsByClassName('previous')[0];
            previousItem.remove();
            nextItem.classList.add('active');
            nextItem.classList.remove('next');
            activeItem.classList.add('previous');
            activeItem.classList.remove('active');

            let nextSection = document.createElement ('section');
            nextSection.classList.add('slider__item', 'next');
            nextSection.style.background = `url(${Slider.images[nextSlide]}) no-repeat center`;
            nextSection.style.backgroundSize = 'cover';

            Slider.slider.append(nextSection);
        }, 350);
    }, 400),
    toPrevious: throttle(function (){
        let previousItem = document.getElementsByClassName('previous')[0];
        previousItem.classList.add('toActive');
        setTimeout(function () {
            previousItem.classList.remove('toActive');
            Slider.activeSlide--;
            Slider.checkActiveSlide();
            let previousSlide = Slider.activeSlide === 0 ? Slider.images.length -1 : Slider.activeSlide - 1;
            let nextItem = document.getElementsByClassName('next')[0];
            let activeItem = document.getElementsByClassName('active')[0];
            nextItem.remove();
            previousItem.classList.remove('previous');
            previousItem.classList.add('active');
            activeItem.classList.remove('active');
            activeItem.classList.add('next');

            let previousSection = document.createElement('section');
            previousSection.classList.add('slider__item', 'previous');
            previousSection.style.background = `url(${Slider.images[previousSlide]}) no-repeat center`;
            previousSection.style.backgroundSize = 'cover';

            Slider.slider.append(previousSection);
        }, 350);
    }, 400),
    checkActiveSlide: function () {
        if(Slider.activeSlide >= Slider.images.length){
            Slider.activeSlide = 0;
        }
        if(Slider.activeSlide < 0){
            Slider.activeSlide = Slider.images.length - 1;
        }
    },
};
Slider.createSlides(['asset/img1.jpg','asset/img-big.jpg','asset/img2.jpg','asset/img3.jpg','asset/img4.jpg','asset/img5.jpg','asset/img6.jpg','asset/img7.jpg', "asset/img-small.png"]);

let previousBtn = document.getElementsByClassName('slider__btn-previous')[0];
let nextBtn = document.getElementsByClassName('slider__btn-next')[0];

previousBtn.onclick = Slider.toPrevious;
nextBtn.onclick = Slider.toNext;

