

function Translate(text, language){

    LNG_CODES = ["BG", "CS", "DA", "DE", "EL", "ES", "ET", "FI", "FR", "HU", "IT", "JA", "LT", "LV", "NL", "PL","PT-PT", "RO", "RU", "SK", "SL", "SV", "ZH" ]
    LNG_NAMES = ["Bulgarian", "Czech", "Danish", "German", "Greek", "Spanish", "Estonian", "Finnish", "French", "Hungarian", "Italian", "Japanese", "Lithuanian", "Latvian", "Dutch", "Polish", "Portuguese", "Romanian", "Russian", "Slovak", "Slovenian", "Swedish", "Chinese" ]
    
    for (i=0; i<22; i++){
    if (language == LNG_NAMES[i]){
    var LNG_CODE = LNG_CODES[i]
    }}
    
    const BaseUrl = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=' + text + '&target_lang=' + LNG_CODE)
    
    
    return fetch(BaseUrl).then(function(data){return data.json()})
    // fetch(BaseUrl).then(function(data){return data.json()}).then(function(result){
    //         return(result.translations[0].text)
    //         }
    // )
    
    }
    
    
    //var words = Translate("Bulgarian", "Bulgarian")
    
    
    
    
    
    