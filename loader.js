mainUrl='https://raw.githubusercontent.com/darakcheeff/fast/master/';
jqUrl='http://10.78.16.120:8080/argus/javax.faces.resource/jquery/jquery.js.xhtml?ln=primefaces&v=5.2.12';

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
	xmlHttp.send( null );
   return xmlHttp.responseText;
}
//eval(httpGet(jqUrl));

if(('    '+document.location.href).indexOf('http://10.78.16.120:8080/argus/views/supportservice/groupproblem/')>1){
	getUrl='gp2s';
}
if(('    '+document.location.href).indexOf('http://noc.cbx.ru/z')>1){
	getUrl='fcrz';
}
if(('    '+document.location.href).indexOf('http://nagios.ulrt.net/')>1){
	getUrl='ulnag';
}
if(('    '+document.location.href).indexOf('http://fttb.mts-nn.ru/monit.php/')>1){
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
