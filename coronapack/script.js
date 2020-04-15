_getData();

function _getData() {
    var file = new XMLHttpRequest();
    file.open("GET", "data.json", false);
    file.onreadystatechange = function() {
        if(file.readyState === 4) {
            if(file.status === 200 || file.status == 0) {
                var json = JSON.parse(file.responseText);
                _updateData(json);
            }
        }
    };
    file.send(null);
}
function _updateData(json) {
    data = document.getElementById("data");
    data.innerHTML = "Total: " + json["number"]["data"];

    date = document.getElementById("date");
    date.innerHTML = "Last Update: " + json["number"]["date"];

    sites = document.getElementById("sites");
    console.log(json["sites"])
    for(var key in json["sites"]) {
        sites.appendChild(_createSite(key, json["sites"][key]));
    }
}

function _createSite(name, addr) {
    site_div = document.createElement("div")
    name_span = document.createElement("span")
    addr_a = document.createElement("a")

    site_div.appendChild(name_span)
    site_div.appendChild(addr_a)

    name_span.innerHTML = name;
    addr_a.innerHTML = addr;
    addr_a.href = addr;

    return site_div;
}