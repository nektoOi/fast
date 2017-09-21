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
//setTimeout(function() { 
//document.getElementById('group_interaction_info_form-tab_view-group_interaction_rule_table_data').click();
//}, 3000);
setTimeout(function() { 
   $this.save();
//document.getElementById('group_interaction_info_form').submit();
}, 1000);

//setTimeout(function() { 
//document.getElementById('group_interaction_info_form-tab_view-commentary_out').click();
//}, 1000);
//setTimeout(function() { 
//$( "span[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-inplace-save']" ).click();
  // }, 2000);
