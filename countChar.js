var resultChar = 0;

function timeCount(){
    
    var input = document.getElementById("Textarea").value;
    var char = input.replace(/\s/g, '');
    var countChar = char.length;

    setTimeout(function(){
        if(countChar > 0){
            resultChar = countChar;
        }else{
            resultChar = 0;        
        }
        
    }, 60) // 60 milisec
}

function charCount(){

    timeCount()
    document.getElementById("resultCC").innerHTML = resultChar + ' ' + "Character Counted";
     
}

setInterval(charCount, 100); // 1 sec
