const customer = new Array();
customer[0] = "Stefan";
customer[1] = "Casper";
customer[2] = "Arne";
customer[3] = "Tobias";
customer[4] = "Mikkel";

window.onload = function () {
    const ul = document.getElementById("list-of-customers");
    for (let i = 0; i < customer.length; i++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(customer[i]));
        li.setAttribute("class", "list-group-item");
        ul.appendChild(li);
    }
};