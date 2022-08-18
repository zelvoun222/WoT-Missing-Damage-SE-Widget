window.addEventListener('onWidgetLoad', function (obj) { 
    setInterval(function () {getData(obj.detail.fieldData)}, 5000);
});

function getData(fieldData){
	playerID = fieldData.playerID;
  	tankID = fieldData.tankID;
  	targetDamage = fieldData.targetDamage;
  	appID = fieldData.appID;

  	$.getJSON("https://api.worldoftanks.eu/wot/tanks/stats/?application_id="+ appID +"&account_id=" + playerID + "&extra=random&fields=random.battles%2C+random.damage_dealt&tank_id=" + tankID, function (data){
    	let values = data["data"][playerID][0]["random"];
      	let newTarget = parseInt(targetDamage) * values["battles"] - values["damage_dealt"];
      	let oldTarget = $("#missing-dmg").text()
      	if(oldTarget !=  newTarget){
          	$("#missing-dmg").text(newTarget);
          	if(newTarget > oldTarget){
              	$("#delta-dmg").text("(+"+(newTarget - oldTarget)+")");
              	setTimeout(hideDelta, 10000);
            }
          	else if(newTarget < oldTarget){
              	$("#delta-dmg").text("("+(newTarget - oldTarget)+")");
              	setTimeout(hideDelta, 10000);
            }
        }
    });
}

function hideDelta(){
	$("#delta-dmg").text("");
}
