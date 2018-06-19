(async function() {
    "use strict";
    let alldata = {};
    const nrOfElementsInTable = 5;
    let elements = document.getElementsByClassName("element");
    let totalscore = document.getElementById("totalscore");
    let gCounter = [
        {
            "gym": 1,
            "counter": 0,
            "el": [
                [],
                [],
                []
            ]
        },
        {
            "gym": 2,
            "counter": 0,
            "el": [
                [],
                [],
                []
            ]
        },
        {
            "gym": 3,
            "counter": 0,
            "el": [
                [],
                [],
                []
            ]
        },
        {
            "gym": 4,
            "counter": 0,
            "el": [
                [],
                [],
                []
            ]
        },
        {
            "gym": 5,
            "counter": 0,
            "el": [
                [],
                [],
                []
            ]
        },
        {
            "gym": 6,
            "counter": 0,
            "el": [
                [],
                [],
                []
            ]
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

    async function updateAllGymCounter() {
        for (var p in gCounter) {

            gCounter[p].counter++;
            // return gCounter[p].counter;

        }
        return gCounter[0].counter;
    }

    async function updateGymElements(num, score, round) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                gCounter[p].el[round-1].push(parseFloat(parseFloat(score).toFixed(1)));
            }
        }
    }


    async function sumScore(num, round) {
        let sum = 0;
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                for (var i = 0; i < gCounter[p].el[round-1].length; i++) {
                    // console.log("now: " + parseFloat(val));
                    if (parseFloat(gCounter[p].el[round-1][i]) > 0) {
                        sum += parseFloat(gCounter[p].el[round-1][i]);
                    }
                }
            }
        }
        return sum;
    }

    async function resetCounter() {
        for (var p in gCounter) {
            gCounter[p].el[0] = [];
            gCounter[p].el[1] = [];
            gCounter[p].el[2] = [];

        }
    }

    async function updateTotalScore() {
        let a = parseFloat(document.getElementById("sum1").innerHTML);
        let b = parseFloat(document.getElementById("sum2").innerHTML);
        let c = parseFloat(document.getElementById("sum3").innerHTML);

        totalscore.innerHTML = a + b + c;
    }

    async function sumScoreRoundOne() {
        let sum = 0;

        for (var i = 0; i < gCounter[0].el[0].length; i++) {

            if (parseFloat(gCounter[0].el[0][i]) > 0) {
                sum += parseFloat(gCounter[0].el[0][i]);
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

    async function getTwoHighestScores(num, round) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                let score = await sumTwoLargestNumbers(gCounter[p].el[round-1])
                return score;
            }
        }
    }

    async function getElementLength(num, round) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                return gCounter[p].el[round-1].length;
            }
        }
    }

    async function getTwoHighestScoresRoundOne() {
        let score = await sumTwoLargestNumbers(gCounter[0].el[0])
        return score;
    }

    async function getAllDiff(round) {
        let diffs = document.getElementsByClassName("diff" + round);
        // console.log(diffs);
        let result = 0;
        for (var i = 0; i < diffs.length; i++) {
            if (diffs[i].innerHTML != "") {
                result += parseFloat(diffs[i].innerHTML);
            }
        }

        return result.toFixed(1);
    }

    function handleRoundOne(score) {
        for (var p in gCounter) {
            gCounter[p].el[0].push(parseFloat(parseFloat(score).toFixed(1)));
        }
    }

    window.calculate = async function(event) {
        let round = event.target.parentElement.parentElement.parentElement.parentElement;
        let points;
        let currRoundGym;
        let currentGymNumber;
        let diffholder;
        let nrOfElements;
        let diff;

        if (round.classList.contains("roundone")) {
            points = await getPoints(event.target.value);
            handleRoundOne(points);
            nrOfElements = await getElementLength(1, 1);//await updateAllGymCounter();
            // console.log("here: " + nrOfElements);
            // diffholder = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
            // diffholder.innerHTML = points.toFixed(1);
            if (nrOfElements > 2) {
                points = await getTwoHighestScoresRoundOne(currentGymNumber);
            } else {
                points = await sumScoreRoundOne(currentGymNumber);
            }
            // console.log(points);

            diff = document.getElementById("diff1");
            diff.innerHTML = parseFloat(points).toFixed(1);
            document.getElementById("sum1").innerHTML = parseFloat(parseFloat(diff.innerHTML) * 6).toFixed(1);


        } else if (round.classList.contains("roundtwo")) {
            points = await getPoints(event.target.value);
            // currRoundGym = event.target.parentElement.parentElement.firstElementChild.innerHTML;
            currentGymNumber = parseInt(event.target.parentElement.parentElement.firstElementChild.innerHTML.slice(-1));
            nrOfElements = await getElementLength(currentGymNumber, 2);//await updateAllGymCounter();
            diffholder = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
            await updateGymElements(currentGymNumber, points, 2);

            if (nrOfElements > 1) {
                points = await getTwoHighestScores(currentGymNumber, 2);
            } else {
                points = await sumScore(currentGymNumber, 2);
            }

            // diffholder.innerHTML = points.toFixed(1);
            diff = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
            diff.innerHTML = parseFloat(points).toFixed(1);
            document.getElementById("sum2").innerHTML = await getAllDiff(2);//parseFloat(parseFloat(diff.innerHTML) * 6).toFixed(1);

        } else if (round.classList.contains("roundthree")) {
            points = await getPoints(event.target.value);
            // currRoundGym = event.target.parentElement.parentElement.firstElementChild.innerHTML;
            currentGymNumber = parseInt(event.target.parentElement.parentElement.firstElementChild.innerHTML.slice(-1));
            nrOfElements = await getElementLength(currentGymNumber, 3);//await updateAllGymCounter();
            diffholder = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
            await updateGymElements(currentGymNumber, points, 3);

            if (nrOfElements > 1) {
                points = await getTwoHighestScores(currentGymNumber, 3);
            } else {
                points = await sumScore(currentGymNumber, 3);
            }

            // diffholder.innerHTML = points.toFixed(1);
            diff = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
            diff.innerHTML = parseFloat(points).toFixed(1);
            document.getElementById("sum3").innerHTML = await getAllDiff(3);//parseFloat(parseFloat(diff.innerHTML) * 6).toFixed(1);
        }

        await updateTotalScore();
        // console.log(gCounter);
        // let currRoundGym = event.target.parentElement.parentElement.firstElementChild.innerHTML;
        // let currentGymNumber = 1;
        // let nrOfElements;
        // if (currRoundGym == "G1-6") {
        //     handleRoundOne(points);
        //     nrOfElements = updateAllGymCounter();
        //     document.getElementById("sum1").innerHTML = parseFloat(parseFloat(points * 6).toFixed(1));
        // } else {
        //      currentGymNumber = parseInt(event.target.parentElement.parentElement.firstElementChild.innerHTML.slice(-1));
        //      nrOfElements = await updateGymCounter(currentGymNumber);
        // }
        // console.log(event.target.parentElement.parentElement.parentElement.parentElement);
        // let diffholder = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
        // await updateGymElements(currentGymNumber, points);
        //
        // if (nrOfElements > 2) {
        //     points = await getTwoHighestScores(currentGymNumber);
        // } else {
        //     points = await sumScore(currentGymNumber);
        // }
        //
        // diffholder.innerHTML = points.toFixed(1);

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
