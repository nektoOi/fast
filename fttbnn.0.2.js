if(!document.getElementById("counter")){
	var out='';
	var out1='';
	f0=$('frame[name=monit_m]');
	f1=f0.contentDocument.body.children[2].children[3].innerHTML;
	f2=$('frame[name=i404]');
	var a1=f1.split("\n");
	var k=0; var kk=0; a2=new Array;a3=new Array;
	for(i=1;i<a1.length;i++){
		if(a1[i].indexOf(',null,null,true,false);') !== -1){
			a2[k]=a1[i].replace(new RegExp(',.+', 'g'), '').replace(new RegExp('.+h.', 'g'), 'http://fttb.mts-nn.ru/mon_fail_comment.php?id_fail=');
			com_page=httpGet(a2[k]);
				if(com_page.split('2017').length<3){
				a3[kk]=a2[k].replace(new RegExp('.+=', 'g'), '');
				out=out+'<a href="http://fttb.mts-nn.ru/mon_exit_codes.php?id_fail='+a3[kk]+'">'+a3[kk]+'</a><hr>';
				out1=out1+'<iframe id="i'+kk+'" src="http://fttb.mts-nn.ru/mon_exit_codes.php?id_fail='+a3[kk]+'" width="100%" height="280"></iframe><hr>';
				kk++; 
				}
			k++;
			}
	}
	kk--;
	document.documentElement.innerHTML='<input type="hidden" id="counter" value="'+kk+'">'+out1;
}else{
	kk=document.getElementById("counter").value;
	for(j=0;j<=kk;j++){
		document.body.children["i"+j].contentDocument.body.children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[8].children[0].children[0].checked=true;
		document.body.children["i"+j].contentDocument.body.children[0].children[0].children[1].children[0].children[0].click();
	}
}
