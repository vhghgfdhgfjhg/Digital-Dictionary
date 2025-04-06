
const apiurl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const search = document.querySelector(".searchicon");
var input = document.getElementById("input");

var word = document.getElementById("word");
var brife = document.getElementById("meaning");
var speak = document.getElementById("speak");
var origin = document.getElementById("origin");

search.addEventListener('click',function(){
        input = input.value ;
        fetch (`${apiurl}${input}`).then( function(response){
            return response.json();
        }).then(function(result){
            brife.innerHTML = result[0].meanings[0].definitions[0].definition;
    
            function playSound(soundUrl) {
                const audio = new Audio(soundUrl);
                speak.addEventListener('click',function(){
                    speak.innerHTML = audio.play();
                })
            }
            playSound(result[0].phonetics[1].audio);
    
            origin.innerHTML = result[0].meanings[0].partOfSpeech;
            console.log(result);
        }).catch(function(error){
            console.log(error);
        })
        
        word.innerHTML = input;
})
    
