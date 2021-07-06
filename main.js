const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const iconSpan = document.querySelector(".icons");

const stringToType = ["Hi, I'm", "I'm a", "This is my work"];
const typingDelay = 5;
const erasing_delay = 10;
const newTextDelay = 100;
let textArrayIndex = 0;
let charIndex = 0;

function type() 
{
    if(charIndex < stringToType[textArrayIndex].length)
    { 
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += stringToType[textArrayIndex].charAt(charIndex);       
        charIndex++;

        if(stringToType[textArrayIndex].charAt(charIndex - 1) == "," || 
           stringToType[textArrayIndex].charAt(charIndex) == "." )
            setTimeout(type, typingDelay * 3);
        else
            setTimeout(type, typingDelay);          
    }    
    else
    {
        cursorSpan.classList.remove("typing");
        if(textArrayIndex == 2){
            playAnimation();
            setTimeout(erase, newTextDelay * 2);
        }
        else{
            setTimeout(erase, newTextDelay);
         }       
    }
}

function erase()
{
    if(charIndex > 0)
    {
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = stringToType[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasing_delay);
    }
    else if (textArrayIndex >= stringToType.length - 1){
        cursorSpan.classList.add('disable')
    }
    else
    {
        cursorSpan.classList.remove('typing');
        if(textArrayIndex < stringToType.length - 1)
            textArrayIndex++;
        else
            textArrayIndex = 0

        setTimeout(type, typingDelay * 4);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay);
});

function playAnimation(){
    if(!iconSpan.classList.contains("moveToNavbar")) iconSpan.classList.add("moveToNavbar");
}


