var data = JSON.parse(localStorage.getItem('data'))

var add = document.getElementsByTagName("button")[0];
add.setAttribute("onclick", "validate()");

function remove(obj) {
    var item_to_delete = obj.id;
    data.splice(item_to_delete, 1);
    localStorage.setItem("data", JSON.stringify(data))
    location.reload();
}

function validate() {

    var age = document.getElementsByName("age")[0].value;
    var relation = document.getElementsByName("rel")[0].value;
    var is_smoker = document.getElementsByName("smoker")[0].checked

    if (is_smoker) {
        smoker = "Yes";
    }
    else {
        smoker = "No";
    }

    if (age.length == 0 || relation == "") {
        alert("Please fill out the form")
    }

    else {

        var myObj = { "age": age, "relation": relation, "smoker": smoker };

        data.push(myObj);

        localStorage.setItem("data", JSON.stringify(data))

    }

}

var debug = document.getElementsByTagName("ol")[0];

for (var i = 0; i < data.length; i++) {
    debug.innerHTML += "<li id = '" + i + "' onclick = 'remove(this)'>Age: " +
        data[i].age + " ||| Relationship: " +
        data[i].relation + " ||| Smoker? " +
        data[i].smoker + "</li>"

}
