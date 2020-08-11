//containers
const videoSlider = document.querySelector('.videos-display');
const videoImages = document.querySelector('.videos-display').children;
const dotsArr = document.querySelector('.dots');

//Buttons
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let vidCount = 0;
const size = videoImages[0].clientWidth;

/* videoSlider.style.transform = 'translateX(' + (-size * vidCount) + 'px)';
 */
nextBtn.addEventListener('click', function() {
    nextVid()
    dotUpdate()
    resetMove()
})

prevBtn.addEventListener('click', function() {
    prevVid()
    dotUpdate()
    resetMove()
})


function dotToggle()
{
    for(let i=0; i < videoImages.length; i++){
        const div = document.createElement("div");
        div.setAttribute("onclick", "videoNum(this)")
        div.id=i;
        if(i==0){
            div.className="active";
        }
        dotsArr.appendChild(div);
    }
}
dotToggle();

function dotUpdate(){
    for(let i=0; i<dotsArr.children.length; i++){
        dotsArr.children[i].classList.remove("active");
    }
    dotsArr.children[vidCount].classList.add("active");
}

function videoNum(element){
    vidCount = element.id;
    gotoVid();
    dotUpdate();
    resetMove();
}

function nextVid()
{
    const iframeCurr = videoImages[vidCount].querySelector('iframe');
    iframeCurr.src = iframeCurr.src;
    if (vidCount==videoImages.length-1)
    {
        vidCount = 0;
    }
    else{
        vidCount++;
    }

    gotoVid();
}

function prevVid()
{
    const iframeCurr = videoImages[vidCount].querySelector('iframe');
    iframeCurr.src = iframeCurr.src;
    if (vidCount == 0)
    {
        vidCount = videoImages.length-1;
    }
    else{
        vidCount--;
    }
    gotoVid();
}

function gotoVid(){
    for (let i = 0; i<videoImages.length; i++){
        videoImages[i].classList.remove("active");
    }
    videoImages[vidCount].classList.add("active");
}

function move()
{
    nextVid();
    dotUpdate();
}

function resetMove(){
    clearInterval(timer);
}

let timer=setInterval(move,5000);

/*smooth scrolling*/

function jumpToAbout(target, duration)
{
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var starting = null;

    function animation(current){
        if (starting == null) {
            starting = current;
        }
        var timer = current - starting;
    }

    requestAnimationFrame(animation);
}

var about = document.querySelector('.abt');

about.addEventListener('click', function(){
    console.log("here");
    jumpToAbout('.startAbt', 1000);
});
