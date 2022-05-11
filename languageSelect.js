function createDropdown(){
    const popUp = document.getElementById('infoDiv')
    
    var dropDown = document.createElement('select')
    popUp.appendChild(dropDown)
    
    var languages = ['Български', 'Česky', 'Dansk', 'Deutsch', 'Ελληνική', 'Español', 'Eesti', 'Suomalainen', 'Français', 'Magyar', 'Italiano', 'やまと', 'Lietuvių kalba', 'Latviešu', 'Nederlands', 'Polska', 'Português', 'Românesc', 'Русский', 'Slovenská', 'Slovenski', 'Svenska', '中国' ]
    
    
    
    for(j=0; j<22; j++){
    
    var op = document.createElement('option')
    var txt = document.createTextNode(languages[j])
    op.appendChild(txt)
    dropDown.appendChild(op)
    }
    
    
    }
    
    createDropdown()