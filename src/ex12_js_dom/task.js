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
        let img = document.createElement('img');
        img.classList.add('slider__image');
        img.setAttribute('src', images[Slider.activeSlide]);
        img.setAttribute('alt', `slider ${Slider.activeSlide+1}`);

        Slider.slider.append(section);
        section.append(img);

        let previousSection = document.createElement('section');
        previousSection.classList.add('slider__item', 'previous');
        let previousImg = document.createElement('img');
        previousImg.setAttribute('src', images[previousSlide]);
        previousImg.setAttribute('alt', `slider ${previousSlide}`);

        Slider.slider.append(previousSection);
        previousSection.append(previousImg);

        let nextSection = document.createElement ('section');
        nextSection.classList.add('slider__item', 'next');
        let nextImg = document.createElement('img');
        nextImg.setAttribute('src', images[nextSlide]);
        nextImg.setAttribute('alt', `slider ${nextSlide}`);

        Slider.slider.append(nextSection);
        nextSection.append(nextImg);
    },
    next: function (){
        nextBtn.disabled = true;
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
            let nextImg = document.createElement('img');
            nextImg.setAttribute('src', Slider.images[nextSlide]);
            nextImg.setAttribute('alt', `slider ${nextSlide}`);

            Slider.slider.append(nextSection);
            nextSection.append(nextImg);
            nextBtn.disabled = false;
        }, 350);
    },
    previous: function (){
        previousBtn.disabled = true;
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
            let previousImg = document.createElement('img');
            previousImg.setAttribute('src', Slider.images[previousSlide]);
            previousImg.setAttribute('alt', `slider ${previousSlide}`);

            Slider.slider.append(previousSection);
            previousSection.append(previousImg);
            previousBtn.disabled = false;
        }, 350);
    },
    checkActiveSlide: function () {
        if(Slider.activeSlide >= Slider.images.length){
            Slider.activeSlide = 0;
        }
        if(Slider.activeSlide < 0){
            Slider.activeSlide = Slider.images.length - 1;
        }
    }
};
Slider.createSlides(['asset/img1.jpg','asset/img-big.jpg','asset/img2.jpg','asset/img3.jpg','asset/img4.jpg','asset/img5.jpg','asset/img6.jpg','asset/img7.jpg']);

let previousBtn = document.getElementsByClassName('slider__btn-previous')[0];
let nextBtn = document.getElementsByClassName('slider__btn-next')[0];

previousBtn.onclick = Slider.previous;
nextBtn.onclick = Slider.next;
