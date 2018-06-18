(async function() {
    "use strict";

    let elements = document.getElementsByClassName("element");

    async function readjson() {

        fetch("../data/data.json")
        .then((data) => data.json())
        .then(data => {
            // console.log(data[0].Group);
            let select = "<select name='selElement'>";
            data.forEach(function(key, val) {
                select += "<option>" + key.Name + "</option>";
            });
            select += "</select>";
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = select;
            }
        })
        .catch(res => {
            console.log("error with file");
        });
    }

    readjson();
})();
