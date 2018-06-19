<?php include("includes/config.php"); ?>

<!doctype html>
<html>
<head>
    <title>TumblingCalc</title>
    <!-- <meta charset="utf-8"> -->
    <meta http-equiv="Content-Type" content="text/html; utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel='shortcut icon' href='img/tc.svg' type='image/x-icon'/ >
    <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <link rel="stylesheet" href="style/style.css">

</head>
<body>

<div class="container">
    <img class="logo" src="img/tc.svg" alt="logo">
    <!-- <div class="row">
        <?php //if (isset($_SESSION["flash"])): ?>
                <?php //echo "<h2 class='title'>" . $_SESSION["flash"] . "</h2>"; unset($_SESSION["flash"]); ?>
            <?php //else: ?>
                <h2 class="title">TumblingCalc</h2>
        <?php //endif; ?>
    </div> -->
    <div class="row">
        <h4>Total score: <span id="totalscore"></span></h4>
    </div>
    <div class="row">
        <!-- <div class="col-md-1"></div> -->
        <div class="col">
            <h2>Team round</h2>
            <table class="table roundone">
                <thead>
                    <tr>
                        <th></th><th>Diff</th><th>Element 1</th><th>Element 2</th><th>Element 3</th><th>Element 4</th><th>Element 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>G1-6</td>
                        <td id="diff1"></td>
                        <td id="r1g1e1" class="element"></td>
                        <td id="r1g1e2" class="element"></td>
                        <td id="r1g1e3" class="element"></td>
                        <td id="r1g1e4" class="element"></td>
                        <td id="r1g1e5" class="element"></td>
                    </tr>
                    <!-- <tr>
                        <td>G2</td>
                        <td></td>
                        <td id="r1g2e1" class="element"></td>
                        <td id="r1g2e2" class="element"></td>
                        <td id="r1g2e3" class="element"></td>
                        <td id="r1g2e4" class="element"></td>
                        <td id="r1g2e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G3</td>
                        <td></td>
                        <td id="r1g3e1" class="element"></td>
                        <td id="r1g3e2" class="element"></td>
                        <td id="r1g3e3" class="element"></td>
                        <td id="r1g3e4" class="element"></td>
                        <td id="r1g3e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G4</td>
                        <td></td>
                        <td id="r1g4e1" class="element"></td>
                        <td id="r1g4e2" class="element"></td>
                        <td id="r1g4e3" class="element"></td>
                        <td id="r1g4e4" class="element"></td>
                        <td id="r1g4e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G5</td>
                        <td></td>
                        <td id="r1g5e1" class="element"></td>
                        <td id="r1g5e2" class="element"></td>
                        <td id="r1g5e3" class="element"></td>
                        <td id="r1g5e4" class="element"></td>
                        <td id="r1g5e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G6</td>
                        <td></td>
                        <td id="r1g6e1" class="element"></td>
                        <td id="r1g6e2" class="element"></td>
                        <td id="r1g6e3" class="element"></td>
                        <td id="r1g6e4" class="element"></td>
                        <td id="r1g6e5" class="element"></td>
                    </tr> -->
                    <tr>
                        <td>Sum</td>
                        <td><span id="sum1">0</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- <div class="col-md-1"></div> -->
    </div>

    <div class="row">
        <!-- <div class="col"> -->
        <h2>Round 2</h2>
            <table class="table roundtwo">
                <thead>
                    <tr>
                        <th></th><th>Diff</th><th>Element 1</th><th>Element 2</th><th>Element 3</th><th>Element 4</th><th>Element 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>G1</td>
                        <td class="diff2"></td>
                        <td id="r2g1e1" class="element"></td>
                        <td id="r2g1e2" class="element"></td>
                        <td id="r2g1e3" class="element"></td>
                        <td id="r2g1e4" class="element"></td>
                        <td id="r2g1e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G2</td>
                        <td class="diff2"></td>
                        <td id="r2g2e1" class="element"></td>
                        <td id="r2g2e2" class="element"></td>
                        <td id="r2g2e3" class="element"></td>
                        <td id="r2g2e4" class="element"></td>
                        <td id="r2g2e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G3</td>
                        <td class="diff2"></td>
                        <td id="r2g3e1" class="element"></td>
                        <td id="r2g3e2" class="element"></td>
                        <td id="r2g3e3" class="element"></td>
                        <td id="r2g3e4" class="element"></td>
                        <td id="r2g3e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G4</td>
                        <td class="diff2"></td>
                        <td id="r2g4e1" class="element"></td>
                        <td id="r2g4e2" class="element"></td>
                        <td id="r2g4e3" class="element"></td>
                        <td id="r2g4e4" class="element"></td>
                        <td id="r2g4e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G5</td>
                        <td class="diff2"></td>
                        <td id="r2g5e1" class="element"></td>
                        <td id="r2g5e2" class="element"></td>
                        <td id="r2g5e3" class="element"></td>
                        <td id="r2g5e4" class="element"></td>
                        <td id="r2g5e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G6</td>
                        <td class="diff2"></td>
                        <td id="r2g6e1" class="element"></td>
                        <td id="r2g6e2" class="element"></td>
                        <td id="r2g6e3" class="element"></td>
                        <td id="r2g6e4" class="element"></td>
                        <td id="r2g6e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>Sum</td>
                        <td><span id="sum2">0</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        <!-- </div> -->
    </div>


    <div class="row">
        <!-- <div class="col"> -->
            <h2>Round 3</h2>
            <table class="table roundthree">
                <thead>
                    <tr>
                        <th></th><th>Diff</th><th>Element 1</th><th>Element 2</th><th>Element 3</th><th>Element 4</th><th>Element 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>G1</td>
                        <td class="diff3"></td>
                        <td id="r3g1e1" class="element"></td>
                        <td id="r3g1e2" class="element"></td>
                        <td id="r3g1e3" class="element"></td>
                        <td id="r3g1e4" class="element"></td>
                        <td id="r3g1e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G2</td>
                        <td class="diff3"></td>
                        <td id="r3g2e1" class="element"></td>
                        <td id="r3g2e2" class="element"></td>
                        <td id="r3g2e3" class="element"></td>
                        <td id="r3g2e4" class="element"></td>
                        <td id="r3g2e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G3</td>
                        <td class="diff3"></td>
                        <td id="r3g3e1" class="element"></td>
                        <td id="r3g3e2" class="element"></td>
                        <td id="r3g3e3" class="element"></td>
                        <td id="r3g3e4" class="element"></td>
                        <td id="r3g3e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G4</td>
                        <td class="diff3"></td>
                        <td id="r3g4e1" class="element"></td>
                        <td id="r3g4e2" class="element"></td>
                        <td id="r3g4e3" class="element"></td>
                        <td id="r3g4e4" class="element"></td>
                        <td id="r3g4e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G5</td>
                        <td class="diff3"></td>
                        <td id="r3g5e1" class="element"></td>
                        <td id="r3g5e2" class="element"></td>
                        <td id="r3g5e3" class="element"></td>
                        <td id="r3g5e4" class="element"></td>
                        <td id="r3g5e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>G6</td>
                        <td class="diff3"></td>
                        <td id="r3g6e1" class="element"></td>
                        <td id="r3g6e2" class="element"></td>
                        <td id="r3g6e3" class="element"></td>
                        <td id="r3g6e4" class="element"></td>
                        <td id="r3g6e5" class="element"></td>
                    </tr>
                    <tr>
                        <td>Sum</td>
                        <td><span id="sum3">0</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        <!-- </div> -->
    </div>


</div>

<footer>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 centerText">&copy; Maxon/Lewenhagen 2017</div>
        <div class="col-md-2"></div>
    </div>
</footer>
<script src="js/main.js"></script>
<!-- <script src="https://unpkg.com/dropbox/dist/Dropbox-sdk.min.js"></script> -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</body>
</html>
