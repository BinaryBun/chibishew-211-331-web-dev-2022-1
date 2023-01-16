var onDelete = document.getElementsByClassName("delete");

for (var i = 0; i < onDelete.length; i++) {
    onDelete[i].onclick = function() {
        fetch("http://192.168.31.104:8080/api/orders/" + this.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        this.parentNode.parentNode.parentNode.remove();
    }
}