(function () {

	// 	//Humburger menu
  	var menuBtn = document.querySelector('.js-menu-bnt');
  	var menuBtnIcon = menuBtn.querySelector('.js-menu-btn-icon');
  	var menuList = document.querySelector('.js-menu');

	menuBtn.addEventListener('click', function(){
		menuList.classList.toggle('menu_show');
	    menuBtnIcon.classList.toggle('menu-bnt__icon_show');
	});

})();

