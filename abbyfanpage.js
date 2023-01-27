const paragraphs = document.getElementsByTagName('p');

document.addEventListener('keydown',(Event)=>{
    console.log(Event.key);
    if (Event.key==='a'){
        paragraphs[0].style.color="purple";
    }
})