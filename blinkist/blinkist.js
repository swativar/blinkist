$(document).ready(function(){
    M.AutoInit();
 
})

var date = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[date.getMonth()];
var data = date.getDate() +' '+ n;
var data1 = date.getDate() + 7 +' '+ n;

$('#show').text(data);
$('#show_week').text(data1);

function dis(element) {
    $('#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#ten').hide();
    var x = $(element).attr('value');
    var y = '#' + x;
    console.log(x,y);
    var name = $(element).text();
    console.log(name);
    $('.name').text(name);
        $(y).show();
}
$(document).ready(function(){
$('#curious').click(function(){
    console.log(this);
    $('.tap-target').tapTarget('open');
});
})