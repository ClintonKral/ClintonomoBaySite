const navrSlide = () => {
    const smush = document.querySelector('.smush');
    const navr = document.querySelector('.navbar-r');
    const navRefs = document.querySelectorAll('.navbar-r li');

    smush.addEventListener('click', () => {

        //Toggles NavBar
        navr.classList.toggle('navbar-r-active');

        //Animation of NavBar Links
        navRefs.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else{
                link.style.animation = `navBarIn 0.5s ease forwards ${index / 7 + 0.5}s`;
                //document.getElementById('lol').style.top = "264px"
            }
        });

        //smush lines Animations
        smush.classList.toggle('turn');
    });
}


window.onscroll = function()
{
    navBarScroll()
}
function navBarScroll()
{
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
    {
        document.getElementById('navbar').style.padding = "20px 50px";
        //document.getElementById('lol').style.top = "69px";
    }
    else
    {
        document.getElementById('navbar').style.padding= "40px 50px";
        //document.getElementById('lol').style.top = "89px";
    }
}

//hides loading screen when done
window.addEventListener("load", function() {
    const loader = document.querySelector(".loading");
    loader.className += " hidden";
});

navrSlide();
