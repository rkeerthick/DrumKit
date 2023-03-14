var len = document.querySelectorAll(".drum").length
for(var i=0; i<len; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // document.addEventListener("keypress", function(){
        
        var tmp = this.innerHTML;

        makeSound(tmp);

        buttonAnimation(tmp)

        // new Audio("/sounds/crash.mp3").play();
    })
}

document.addEventListener("keypress", function(event){
    makeSound(event.key)

    buttonAnimation(event.key)
})

function makeSound(tmp)
{
    
    if(tmp === 'w')
    new Audio("/sounds/snare.mp3").play();

else if(tmp === 'a')
    new Audio("/sounds/tom-1.mp3").play();

else if(tmp === 's')
    new Audio("/sounds/tom-2.mp3").play();

else if(tmp === 'd')
    new Audio("/sounds/tom-3.mp3").play();

else if(tmp === 'j')
    new Audio("/sounds/tom-4.mp3").play();

else if(tmp === 'k')
    new Audio("sounds/kick-bass.mp3").play();

else if(tmp === 'l')
    new Audio("sounds/crash.mp3").play();
}

function buttonAnimation(key)
{
    var btn = document.querySelectorAll("."+key);

    btn.classList.add("pressed")

    setTimeout(function(){
        btn.classList.remove("pressed");
    }, 100)
}