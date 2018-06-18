(async function() {
    "use strict";
    let alldata = {};
    const nrOfElementsInTable = 5;
    let elements = document.getElementsByClassName("element");
    let gCounter = [
        {
            "gym": 1,
            "counter": 0,
            "el": []
        },
        {
            "gym": 2,
            "counter": 0,
            "el": []
        },
        {
            "gym": 3,
            "counter": 0,
            "el": []
        },
        {
            "gym": 4,
            "counter": 0,
            "el": []
        },
        {
            "gym": 5,
            "counter": 0,
            "el": []
        },
        {
            "gym": 6,
            "counter": 0,
            "el": []
        }
    ]

    function lockElements() {
        console.log("locking elements...");
    }

    window.setupDataFile = async function(data) {
        alldata = data;
    }

    async function getPoints(id) {
        for (var p in alldata) {
            if (alldata[p].id == id) {
                return alldata[p].Value;
            }
        }
    }

    async function updateGymCounter(num) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                gCounter[p].counter++;
                return gCounter[p].counter;
            }
        }
    }

    async function updateGymElements(num, score) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                gCounter[p].el.push(parseFloat(parseFloat(score).toFixed(1)));
            }
        }
    }


    async function sumScore(num) {
        let sum = 0;
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                for (var i = 0; i < gCounter[p].el.length; i++) {
                    // console.log("now: " + parseFloat(val));
                    if (parseFloat(gCounter[p].el[i]) > 0) {
                        sum += parseFloat(gCounter[p].el[i]);
                    }
                }
            }
        }
        return sum;
    }

    async function sumTwoLargestNumbers(numbers) {
        // Ensure the array is sorted large -> small
        numbers = numbers.sort(function (a, b) {
            return b - a;
        });

        return parseFloat((numbers[0] + numbers[1]).toFixed(1));
    };

    async function getTwoHighestScores(num) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                let score = await sumTwoLargestNumbers(gCounter[p].el)
                return score;
            }
        }
    }

    window.calculate = async function(event) {
        let currentGymNumber = parseInt(event.target.parentElement.parentElement.firstElementChild.innerHTML.slice(-1));
        let nrOfElements = await updateGymCounter(currentGymNumber);
        let diffholder = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
        let points = await getPoints(event.target.value);
        await updateGymElements(currentGymNumber, points);

        if (nrOfElements > 2) {
            points = await getTwoHighestScores(currentGymNumber);
        } else {
            points = await sumScore(currentGymNumber);
        }

        diffholder.innerHTML = points.toFixed(1);

    }

    async function readjson() {

        fetch("../data/data.json")
        .then((data) => data.json())
        .then(data => {
            window.setupDataFile(data);
            // console.log(data[0].Group);
            let select = "<select name='selElement' onchange='window.calculate(event)'>";
            select += "<option value=''>Choose element...</option>"
            data.forEach(function(key, val) {
                select += "<option value=" + key.id + ">" + key.Name + " (" + key.Value + ")" + "</option>";
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
    lockElements();
})();
