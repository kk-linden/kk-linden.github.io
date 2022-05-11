function showInfo(station){
    var infoDiv=document.getElementById('infoDiv');
    infoDiv.style.display='none';
    var containerDiv=document.getElementById('container');
    (document.getElementById(station)).addEventListener('click', function(){
        infoDiv.innerHTML='';
        document.getElementById(station).style.backgroundColor='black';
        infoDiv.style.display='block';
        var name = document.createElement('p');
        name.id = "name"
        makeText(stationInfo[station]['name'], name);
        name.classList.add('nameClass');
        infoDiv.appendChild(name);
        var featDiv = document.createElement('div');
        infoDiv.appendChild(featDiv);
        var conDiv = document.createElement('div');
        infoDiv.appendChild(conDiv);
        function stationFeats(feat, disp){
            if(stationInfo[station][feat]==true){
                var featDisp = document.createElement('p');
                makeText(disp, featDisp);
                featDisp.classList.add('featDispClass');
                featDiv.appendChild(featDisp);
            }
        }
        stationFeats('accessible', 'Accessible');
        stationFeats('waitingArea', 'Designated waiting areas');
        stationFeats('pickUpDropOff', 'Passenger pick-up/drop-off area');
        stationFeats('washrooms', 'Washrooms');
        stationFeats('bikeRepair', 'Bicycle repair stand');
        stationFeats('parking', 'Parking');
        stationFeats('presto', 'PRESTO');
        stationFeats('wifi', 'Wifi');
        stationFeats('cell', 'Cellular Enabled')
        var conArr = stationInfo[station]['connecting'];
        for(i=0;i<conArr.length;i++){
            var con = conArr[i];
            var conDisp = document.createElement('p');
            conDiv.appendChild(conDisp);
            makeText(con,conDisp);
        }
    })
}