function hideNav(){
$("#navigation").children().prop('disabled',true);
$("#currentPage").prop('href','javascript:showNav();');
}
function showNav(){
$("#navigation").children().prop('disabled',true);
$("#currentPage").prop('href','javascript:showNav();');
}
