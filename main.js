const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const iconSpan = document.querySelector(".icons");
const containerSpan = document.querySelector(".container h2");
const containerSpanh3 = document.querySelector(".container h3");

const stringToType = ["Hi, I'm", "I'm a", "This is my work"];
const typingDelay = 100;
const erasing_delay = 50;
const newTextDelay = 1400;
let textArrayIndex = 0;
let charIndex = 0;
introduction = true;

function type() 
{
    if(charIndex < stringToType[textArrayIndex].length && introduction)
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
    else if(introduction)
    {
        cursorSpan.classList.remove("typing");
        if(textArrayIndex == 0){
            fadeIn();
            setTimeout(erase, newTextDelay);
        }       
        else if (textArrayIndex == 1){
            fadeInh3();
            setTimeout(erase, newTextDelay);
        }         
        else if(textArrayIndex == 2){
            playAnimation("animateIcons");
            setTimeout(erase, newTextDelay * 2);
            introduction = false;
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
        if(charIndex == stringToType[textArrayIndex].length - 1){
            setTimeout(erase, erasing_delay * 8);
        }   
        else
            setTimeout(erase, erasing_delay)
        
            
            
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

function playAnimation(className){
    if(!iconSpan.classList.contains(className)) iconSpan.classList.add(className);
}
function fadeIn(){
    if(!containerSpan.classList.contains("fade-In")) containerSpan.classList.add("fade-In");
}
function fadeInh3(){
    if(!containerSpanh3.classList.contains("fade-In")) containerSpanh3.classList.add("fade-In");
}


