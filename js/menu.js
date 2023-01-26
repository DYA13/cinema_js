const openMenu = (nav, active) => {
nav.classList.add(active);
};

const closeMenu = (nav, active) => {
nav.classList.remove(active)
};

const slideMenu = ({openBtn, menu, classActiveMenu, closeTrigger} ) => {

   

    const burgerBtn = document.querySelector(openBtn);
    const navigation = document.querySelector(menu)
    const navigationClose = document.querySelectorAll(closeTrigger);


    burgerBtn.addEventListener('click', ()=>{
        openMenu(navigation, classActiveMenu)
    })
  
    navigationClose.forEach((item) => {
        item.addEventListener('click', () => {
            closeMenu(navigation, classActiveMenu)
        })

    })

};

export default slideMenu;