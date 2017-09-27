mainUrl='https://raw.githubusercontent.com/nektoOi/fast/master/';

function httpGet(theUrl)
{
	var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "/query", theUrl, false); // async=true
xmlHttp.onload = function (e) {
  if xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log(xmlHttp.responseText);
    }
};
xmlHttp.send(null);
   // var xmlHttp = new XMLHttpRequest();
   // xmlHttp.open( "GET", theUrl, false ); 
	//xmlHttp.send( null );
  // return xmlHttp.responseText;
}


if(('    '+document.location.href).indexOf('10.78.16.120:8080/argus/')>1){
	getUrl='gp2s';
}
if(('    '+document.location.href).indexOf('http://noc.cbx.ru/z')>1){
	getUrl='fcrz';
}
if(('    '+document.location.href).indexOf('http://nagios.ulrt.net/')>1){
	getUrl='ulnag';
}
if(('    '+document.location.href).indexOf('http://fttb.mts-nn.ru/')>1){
	getUrl='fttbnn';
}

if(getUrl.length>1){
	versionTxt=httpGet(mainUrl+'version.json');
	var versionData=JSON.parse(versionTxt);
	actoinScript=mainUrl+getUrl+'.'+versionData[getUrl]+'.js';
	eval(httpGet(actoinScript));
}else{
	alert("Данная страница пока не поддерживается(((");
}
