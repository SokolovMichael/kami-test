const openMenu = () => {
  if (document.querySelector('.page__header')) {
    const navMain = document.querySelector('.nav');
    const navToggle = navMain.querySelector('.nav__toggle');

    const onNavMenuOpen = () => {
      if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--opened');
      } else {
        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--opened');
      }
    };

    navToggle.addEventListener('click', onNavMenuOpen);
  }
};

export {openMenu};
