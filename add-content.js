var ccount = 0;
var hcount = 0;
var computer= document.getElementById('computer');
var human= document.getElementById('human');
var dialog= document.getElementById('dialog');
function countClicks()
//rock
{
    var himg= document.getElementById('hsrc');
    himg.src = 'rock.jpeg';
    var getComputerChoice = Math.floor(Math.random()*9);
    if (getComputerChoice >= 6){
        ccount++ ;
        computer.innerHTML = ccount;
        dialog.innerHTML = 'you lost bahah';
        var cimg = document.getElementById('csrc');
        cimg.src = 'paper.png';
    } else if (getComputerChoice <= 2){
        hcount++ ;
        human.innerHTML = hcount;
        dialog.innerHTML = 'you won this time';
        var cimg = document.getElementById('csrc');
        cimg.src = 'scissors.webp';
    } else {
        dialog.innerHTML = 'Wow a tie';
        var cimg = document.getElementById('csrc');
        cimg.src = 'rock.jpeg';
    }
 }
 //paper
function countClicks2()
{
    var himg= document.getElementById('hsrc');
    himg.src = 'paper.png';
    var getComputerChoice = Math.floor(Math.random()*9);
    if (getComputerChoice <= 2){
        ccount++ ;
        computer.innerHTML= ccount;
        dialog.innerHTML= 'my sisccor demolished thy paper';
        var csrc = document.getElementById('csrc');
        csrc.src = 'scissors.webp';
    } else if (getComputerChoice >= 6 ){
        hcount++ ; 
        human.innerHTML= hcount;
        dialog.innerHTML= 'aha my rock was overpowered by thy paper';
        var csrc = document.getElementById('csrc');
        csrc.src = 'rock.jpeg';
    } else {
        dialog.innerHTML= 'hmm interesting a tie';
        var csrc = document.getElementById('csrc');
        csrc.src = 'paper.png';
    }
}
//siccores
function countClicks3()
{
    var hsrc = document.getElementById('hsrc');
    hsrc.src = 'scissors.webp';
    var getComputerChoice = Math.floor(Math.random()*9);
    if (getComputerChoice >= 6 ){
        hcount++ ;
        human.innerHTML= hcount;
        dialog.innerHTML= 'your siscores really demolished my paper';
        var cimg = document.getElementById('csrc');
        cimg.src = 'paper.png';
    } else if (getComputerChoice <= 2){
        ccount++ ; 
        computer.innerHTML= ccount;
        dialog.innerHTML= 'My big rock destroyed your sisscores';
        var cimg = document.getElementById('csrc');
        cimg.src = 'rock.jpeg';
    } else {
        dialog.innerHTML= 'I hate ties';
        var cimg = document.getElementById('csrc');
        cimg.src = 'scissors.webp'
    }
}
function finalSay()
{
    if (ccount == 10){
        dialog.innerHTML='I won yo mamam!!'
    } else if (hcount == 10){
        dialog.innerHTML= "you win i guess"}
}