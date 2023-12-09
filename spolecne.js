/*3. Hamburger menu- DONE*/
const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.getElementById('menu-polozky');
let menuIkona = menuTlacitko.querySelector("i")
    
const rozbaleniMenu = () => {   
     menuPolozky.classList.toggle('show')
     if (menuIkona.classList.contains("fa-bars")) {
        menuIkona.classList.remove("fa-bars");
        menuIkona.classList.add("fa-xmark");
    } else {
        menuIkona.classList.remove("fa-xmark");
        menuIkona.classList.add("fa-bars");
    }
 }
menuTlacitko.addEventListener("click", rozbaleniMenu)
