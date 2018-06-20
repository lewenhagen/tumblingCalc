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
            ],
            "clicked": [
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
            ],
            "clicked": [
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
            ],
            "clicked": [
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
            ],
            "clicked": [
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
            ],
            "clicked": [
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
            ],
            "clicked": [
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
                console.log("new: " + gCounter[p].el[round-1]);
            }
        }
    }

    async function addClickedEl(num, round, id) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                gCounter[p].clicked[round-1].push(id);
            }
        }
    }

    async function addClickedElToAll(round, id) {
        for (var p in gCounter) {
            gCounter[p].clicked[round-1].push(id);
        }
    }

    async function changeEl(num, round, idIndex, newEl) {
        // console.log("round: " + round);
        // console.log("idIndex: " + idIndex);
        // console.log("newEl: " + newEl);
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                gCounter[p].el[round-1][idIndex] = parseFloat(parseFloat(newEl).toFixed(1));
                console.log(gCounter[p].el[round-1]);
            }

        }
    }

    async function changeElOnAll(round, idIndex, newEl) {
        // console.log("round: " + round);
        // console.log("idIndex: " + idIndex);
        // console.log("newEl: " + newEl);
        for (var p in gCounter) {
            gCounter[p].el[round-1][idIndex] = parseFloat(parseFloat(newEl).toFixed(1));
            console.log(gCounter[p].el[round-1]);

        }
    }

    async function gymContainsClicked(num, round, id) {
        for (var p in gCounter) {
            if (gCounter[p].gym == num) {
                console.log("here2: " + gCounter[p].clicked[round-1]);
                return gCounter[p].clicked[round-1].indexOf(id);
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
        let res = parseFloat((a + b + c) / 3).toFixed(2);
        totalscore.innerHTML = res.substr(0, 3) + "(" + res.slice(-1) + ")";
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
        let temp = numbers.slice(0);
        temp = temp.sort(function (a, b) {
            return b - a;
        });

        return parseFloat((temp[0] + temp[1]).toFixed(1));
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
        let clickedId = event.target.parentElement.id;
        console.log(clickedId);
        let round = event.target.parentElement.parentElement.parentElement.parentElement;
        let points;
        let currRoundGym;
        let currentGymNumber;
        let diffholder;
        let nrOfElements;
        let diff;
        let hasClicked;

        points = await getPoints(event.target.value);
        console.log(hasClicked);
        if (round.classList.contains("roundone")) {
            hasClicked = await gymContainsClicked(1, 1, clickedId);
            if (hasClicked == -1) {
                await addClickedElToAll(1, clickedId);
                handleRoundOne(points);
                console.log("har inte klickat!!");
            } else {
                await changeElOnAll(1, hasClicked, points);
                console.log("har klickat!!");

            }
            nrOfElements = await getElementLength(1, 1);
            if (nrOfElements > 2) {
                points = await getTwoHighestScoresRoundOne(currentGymNumber);
            } else {
                points = await sumScoreRoundOne(currentGymNumber);
            }


            diff = document.getElementById("diff1");
            diff.innerHTML = parseFloat(points).toFixed(1);
            document.getElementById("sum1").innerHTML = parseFloat(parseFloat(diff.innerHTML) * 6).toFixed(1);


        } else if (round.classList.contains("roundtwo")) {
            currentGymNumber = parseInt(event.target.parentElement.parentElement.firstElementChild.innerHTML.slice(-1));
            hasClicked = await gymContainsClicked(currentGymNumber, 2, clickedId);
            if (hasClicked == -1) {
                await addClickedEl(currentGymNumber, 2, clickedId);
                await updateGymElements(currentGymNumber, points, 2);
                // handleRoundOne(points);
                // nrOfElements = await getElementLength(1, 1);
                console.log("har inte klickat!!");
            } else {
                await changeEl(currentGymNumber, 2, hasClicked, points);
                // await updateGymElements(currentGymNumber, points, 2);

                console.log("har klickat!!");

            }

            nrOfElements = await getElementLength(currentGymNumber, 2);
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
            hasClicked = await gymContainsClicked(currentGymNumber, 3, clickedId);
            // points = await getPoints(event.target.value);
            // currRoundGym = event.target.parentElement.parentElement.firstElementChild.innerHTML;
            currentGymNumber = parseInt(event.target.parentElement.parentElement.firstElementChild.innerHTML.slice(-1));
            // diffholder = event.target.parentElement.parentElement.firstElementChild.nextElementSibling;
            if (hasClicked == -1) {
                await addClickedEl(currentGymNumber, 3, clickedId);
                await updateGymElements(currentGymNumber, points, 3);
                // handleRoundOne(points);
                // nrOfElements = await getElementLength(1, 1);
                console.log("har inte klickat!!");
            } else {
                await changeEl(currentGymNumber, 3, hasClicked, points);
                // await updateGymElements(currentGymNumber, points, 2);

                console.log("har klickat!!");

            }

            nrOfElements = await getElementLength(currentGymNumber, 3);//await updateAllGymCounter();
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
                if (key.Group == "Forward") {
                    select += "<option value=" + key.id + ">" + "F - " + key.Name + " (" + key.Value + ")" + "</option>";
                } else {
                    select += "<option value=" + key.id + ">" + "B - " + key.Name + " (" + key.Value + ")" + "</option>";
                }
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
