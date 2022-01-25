const navSlide=()=> {
    const mobile = document.querySelector('mobile');
    const nav = document.querySelector('nav-links');
    const navLinks = document.querySelectorAll('nav-links li');
    mobile.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        //links animation code
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0}s`
            }
            
        });
        mobile.classList.toggle('toggle');
        });
}
navSlide();