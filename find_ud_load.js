mainUrl='https://raw.githubusercontent.com/nektoOi/fast/master/';

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
	xmlHttp.send( null );
   return xmlHttp.responseText;
}


if(('    '+document.location.href).indexOf('spd.mts-nn.ru/')>1){
	getUrl='find_ud';
}



if(getUrl.length>1){
	versionTxt=httpGet(mainUrl+'version.json');
	var versionData=JSON.parse(versionTxt);
	actoinScript=mainUrl+getUrl+'.js';
	eval(httpGet(actoinScript));
}else{
	alert("Данная страница пока не поддерживается(((");
}
