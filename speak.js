function speak(texty,language){
   
    let text = texty;
    let msg = new SpeechSynthesisUtterance();

    
    msg.rate = 1;
    LNG_CODES = ["BG", "CS", "DA", "DE", "EL", "ES", "ET", "FI", "FR", "HU", "IT", "JA", "LT", "LV", "NL", "PL","PT-PT", "RO", "RU", "SK", "SL", "SV", "ZH","EN" ]
LNG_NAMES = ["Bulgarian", "Czech", "Danish", "German", "Greek", "Spanish", "Estonian", "Finnish", "French", "Hungarian", "Italian", "Japanese", "Lithuanian", "Latvian", "Dutch", "Polish", "Portuguese", "Romanian", "Russian", "Slovak", "Slovenian", "Swedish", "Chinese","English" ]

for (i=0; i<22; i++){
if (language == LNG_NAMES[i]){
var LNG_CODE = LNG_CODES[i]
}}
    
    
    // immediately refocus the text element
    

    
    document.body.addEventListener("click", function(){
        if(language=="English"){
            msg.lang = "EN";
            
            msg.text = texty;
            speechSynthesis.speak(msg);
        }
        else{
            Translate(texty,language).then(function(translatedWord){
                
                msg.lang = LNG_CODE;
                console.log(translatedWord.translations[0].text)
                msg.text = translatedWord.translations[0].text;
                speechSynthesis.speak(msg);
            })
        }
        
        
        
    })
    
    
    
    
}
speak("hello there this is a thing","French")

function ReadNames(){
    
}