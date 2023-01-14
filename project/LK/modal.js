var modal = document.getElementsByClassName("modal")[0];
var btn = document.getElementsByClassName("bron");
var close = document.getElementsByClassName("btn-close");
var cancel = document.getElementsByClassName("btn-cancel");
var send = document.getElementsByClassName("btn-send");

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        var guid = modal.getElementsByClassName("guid-name")[0];
        var routr = modal.getElementsByClassName("route-name")[0];
        var data_list = this.value.split("|")

        guid.innerHTML = data_list[0];
        routr.innerHTML = data_list[1];
        modal.style.display = "flex";
    }
}

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        modal.style.display = "none";
    }
    cancel[i].onclick = function() {
        modal.style.display = "none";
    }
}

for (var i = 0; i < send.length; i++) {
    send[i].onclick = function() {
        var mainDiv = this.parentNode.parentNode;  // modal-window
        var date = mainDiv.getElementsByClassName("date-input")[0].value;
        var time = mainDiv.getElementsByClassName("time-input")[0].value;
        var counTime = mainDiv.getElementsByClassName("cout-time-input")[0].value;
        var peoples = mainDiv.getElementsByClassName("peoples-input")[0].value;
        var op1 = mainDiv.getElementsByClassName("opt-1")[0].checked;
        var op2 = mainDiv.getElementsByClassName("opt-2")[0].checked;
        var routeName = mainDiv.getElementsByClassName("route-name")[0].innerHTML;
        var price = mainDiv.getElementsByClassName("price")[0].innerHTML;
        
        console.log(date, time, counTime, peoples, op1, op2, routeName, price);
        // send post fetch
        fetch("http://192.168.31.104:8080/api/orders/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "date": date,
                "time": time,
                "counTime": counTime,
                "peoples": peoples,
                "op1": op1,
                "op2": op2,
                "route_id": routeName,
                "price": price
            })
        })
        .then(function() {
            window.location.href = "/order/";
        })
        
    }
}