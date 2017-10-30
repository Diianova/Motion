(function () {

	// 	//Humburger menu
  	var menuBtn = document.querySelector('.js-menu-bnt');
  	var menuBtnIcon = menuBtn.querySelector('.js-menu-btn-icon');
  	var menuList = document.querySelector('.js-menu');

	menuBtn.addEventListener('click', function(){
		menuList.classList.toggle('menu_show');
	    menuBtnIcon.classList.toggle('menu-bnt__icon_show');
	});

	//Slaider for main banner
	var carousel = new Carousel('.carousel__item');
    var btn_prev = document.querySelector('.button_prev');
    var btn_next = document.querySelector('.button_next');

    btn_prev.onclick = function () {
        carousel.prev();
    }

    btn_next.onclick = function () {
        carousel.next();
    }

   	// Slaider for tweets
    var slider = new Slider('.tweet-slid');
    var prevBtn = document.querySelector('.slider__btn_prev');
    var nextBtn = document.querySelector('.slider__btn_next');

    prevBtn.onclick = function () {
        slider.prev();
    }

    nextBtn.onclick = function () {
        slider.next();
    }

})();


function Carousel(img) {
    this.images = document.querySelectorAll(img);
    this.i = 1;

    this.next = function () {
        this.images[this.i].classList.remove('carousel__item_main-pos');
        this.images[this.i].style.right="auto";
        this.images[this.i].style.left="auto";
        this.i--;

        if (this.i < 0) {
            this.i = this.images.length - 1;
        }

        this.images[this.i].classList.add('carousel__item_main-pos');
        this.images[this.i].style.left="50%";

        if(this.i == "0"){
        	this.images[this.i+1].style.right="0";
        	this.images[this.i+2].style.left="0";
        }else if(this.i == "1"){
        	this.images[this.i+1].style.right="0";
        	this.images[this.i-1].style.left="0";
        }else{
        	this.images[this.i-2].style.right="0";
        	this.images[this.i-1].style.left="0";
        }
    }

    this.prev = function () {
        this.images[this.i].classList.remove('carousel__item_main-pos');
        this.i++;

        if (this.i >= this.images.length) {
            this.i = 0;
        }

        this.images[this.i].classList.add('carousel__item_main-pos');
        this.images[this.i].style.right="auto";
        this.images[this.i].style.left="50%";

        if(this.i == "0"){
        	this.images[this.i+1].style.right="0";
        	this.images[this.i+1].style.left="auto";
        	this.images[this.i+2].style.left="0";
        }else if(this.i == "1"){
        	this.images[this.i+1].style.right="0";
        	this.images[this.i+1].style.left="auto";
        	this.images[this.i-1].style.left="0";
        	this.images[this.i-1].style.rigth="auto";
        }else{
        	this.images[this.i-1].style.left="0";
        	this.images[this.i-2].style.right="0";
        	this.images[this.i-2].style.left="auto";
        }
    }
}

function Slider(slides) {
    this.slides = document.querySelectorAll(slides);
    this.i = 0;

    this.prev = function () {
        this.slides[this.i].classList.remove('showed');
        this.i--;

        if (this.i < 0) {
            this.i = this.slides.length - 1;
        }

        this.slides[this.i].classList.add('showed');
    }

    this.next = function () {
        this.slides[this.i].classList.remove('showed');
        this.i++;

        if (this.i >= this.slides.length) {
            this.i = 0;
        }

        this.slides[this.i].classList.add('showed');
    }
}