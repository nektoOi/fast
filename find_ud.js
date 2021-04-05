ud = prompt('Введи название УД', 'cr1');

let  wwwq = document.getElementsByTagName('area');

let i = 5;
for (; i < wwwq.length; i++) {
    try {
    let ttt = wwwq[i].getAttribute('onmouseover');
    let trig = ttt.indexOf(ud);
    if (trig !== -1)  {
        console.log('найдено');
        
        
        var coor = wwwq[i].getAttribute('coords');
        let mass_coor = coor.split(',');
        
        if (mass_coor.length > 5 ) {
            var my_id = wwwq[i].getAttribute('id');
            break;
        }
        
            }
    }
    catch (e){
        console.log(e)
    }
}
delete wwwq;
console.log(my_id);

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
setTimeout(function (){
getElementByXpath('//*[@id="'+my_id+'"]').focus();
}, 1000);
setTimeout(function (){
getElementByXpath('//*[@id="'+my_id+'"]').blur();
}, 1500);
setTimeout(function (){
getElementByXpath('//*[@id="'+my_id+'"]').focus();
}, 2000);
setTimeout(function (){
getElementByXpath('//*[@id="'+my_id+'"]').blur();
}, 2500);
setTimeout(function (){
getElementByXpath('//*[@id="'+my_id+'"]').focus();
}, 3000);
