var customer = new Array();
customer[0] = "Stefan";
customer[1] = "Casper";
customer[2] = "Arne";
customer[3] = "Tobias";
customer[4] = "Mikkel";

$(document).ready(function () {
    var list = "";
    for (i = 0; i < customer.length; i++) {
        list += "<li>" + customer[i] + "</li>";
    }
    list += "<li>" + customer[i] + "</li>";
    $("list-of-customers").append(list);
});