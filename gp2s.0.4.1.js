  var date = new Date,
        day = date.getDate() + 1,
        month = date.getMonth() + 1,
        year = date.getYear() + 1900,
        hour = date.getHours(),
        minutes = date.getMinutes();
    day < 10 && (day = "0" + day), month < 10 && (month = "0" + month), minutes < 10 && (minutes = "0" + minutes), hour < 10 && (hour = "0" + hour);


setTimeout(function() { 
document.getElementById('group_interaction_info_form-tab_view-estimated_end_date_out').click();
}, 1000);
setTimeout(function() { 
document.getElementById("group_interaction_info_form-tab_view-estimated_end_date_input").value =  day + "." + month + "." + year + " " +  hour + ":" + minutes;
}, 1000);
setTimeout(function() { 
$( "button[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-inplace-save']" ).click();
}, 2000);



   
//setTimeout(function() { 
//document.getElementById('group_interaction_info_form-tab_view-j_idt322_display').click();
//}, 5000);
    $("ui-inplace-display").addClass("ui-state-highlight")
    setTimeout(function() {
      $("ui-inplace-display ui-state-highlight").click()
        //document.getElementById("group_interaction_info_form-tab_view-commentary").value = text  + " Ожидаемое время восстановления " + day + "." + month + "." + year + " " +  hour + ":" + minutes;
    }, 2000);

//var text = document.getElementById("group_interaction_info_form-tab_view-businessInteraction").value;

//setTimeout(function() { 
//document.getElementById("group_interaction_info_form-tab_view-commentary").value = text  + " Ожидаемое время восстановления " + day + "." + month + "." + year + " " +  hour + ":" + minutes;
//}, 2000);

//setTimeout(function() { 
   //$( "span[class='ui-inplace-display ui state-highlight']" ).click();
//var elm = $("ui-inplace-display").addClass("ui-inplace-display ui state-highlight").click();
//}, 2000);

