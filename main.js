var lastPos = "begin";
var moneyLeft = 150;
var roster = [];
var rating = 0;
var bgCount = 0;

var startPressed = false;

var picsArr =["melo2.png", "kemba.png", "jj.png", "curry2.png", "tyler.png", "noah2.png"];
var loadpicsArr = [["burkesil.png", "burkefull.png"], ["russSil.png", "russFull.png"]]

var results = {
  three: 0,
  defWS: 0,
  offWS: 0,
  ws: 0,
  per: 0,
};


function getResults() {
  for (var i = 0; i < roster.length; i++) {
    results.three += roster[i].three;
    results.defWS += roster[i].defWS;
    results.offWS += roster[i].offWS;
    results.ws += roster[i].wS;
    results.per += roster[i].per;
  }
  console.log(results);
}

// function getStarters() {
//   roster.sort(function(a, b){return b.price - a.price});
//
//   var w = 0;
//   var g = 0;
//   var b = 0;
//   var wArr = [];
//   var gArr = [];
//   var bArr = [];
//
//   for (var i = 0; i < 5; i++) {
//     if (roster[i].type = "wing") {
//       w += 1;
//       wArr.push(roster[i]);
//       continue;
//     }
//     if (roster[i].type = "guard") {
//       g += 1;
//       gArr.push(roster[i]);
//       continue;
//     }
//     if (roster[i].type = "big") {
//       b += 1;
//       bArr.push(roster[i]);
//     }
//   }
//   if (w >= 4) {
//     for (var j = 5; j < 8; j++) {
//       if (roster[j].type == "wing") {
//         continue;
//       }
//       if (roster[j].type == "big" && b < 2) {
//         var temp = roster[j];
//         var ind = wArr.
//       }
//     }
//   }
//   else if (g >= 3) {
//
//   }
//   else if (b >= 3) {
//
//   }
// }



function test() {
  generatePlayerImagesBG()
  players.sort(function(a, b){return b.price - a.price});
  for (let i = 0; i < players.length; i++) {
    console.log(players[i].firstName + " " + players[i].lastName + ": ($" + players[i].price + ")");
  }
  var avg = 0;
  var peak = 0;
  var avgD = 0;
  var avgO = 0;
  var avgReb = 0;
  var avgAst = 0;
  for (let i = 0; i < players.length; i++) {
    avg += players[i].wS;
    avgD += players[i].defWS;
    avgO += players[i].offWS;
    avgReb += players[i].reb;
    avgAst += players[i].ast;
    if (peak < players[i].wS) {
      peak = players[i].wS;
    }

  }
  avg /= players.length;
  avgD /= players.length;
  avgO /= players.length;
  avgReb /= players.length;
  avgAst /= players.length;
  console.log("average: " + avg);
  console.log("averageD: " + avgD);
  console.log("averageO: " + avgO);
  console.log("averageReb: " + avgReb);
  console.log("averageAst: " + avgAst);
  console.log("peak: " + peak);
  var whatever = zionWilliamson.firstName;
  console.log(whatever);
  console.log(staff.length + "STAFF LENGTH")

  var sev = 0;
  var eig = 0;
  var nin = 0;
  var zer = 0;
  var ten = 0;
  for (var i = 0; i < players.length; i++) {
    if ((players[i].startYear < 1980 && players[i].startYear > 1969) || (players[i].endYear < 1980 && players[i].endYear > 1969)) {
      sev += 1;
      continue;
    }
    if ((players[i].startYear < 1990 && players[i].startYear > 1979) || (players[i].endYear < 1990 && players[i].endYear > 1979)) {
      eig += 1;
      continue;
    }
    if ((players[i].startYear < 2000 && players[i].startYear > 1989) || (players[i].endYear < 2000 && players[i].endYear > 1989)) {
      nin += 1;
      continue;
    }
    if ((players[i].startYear < 2010 && players[i].startYear > 1999) || (players[i].endYear < 2010 && players[i].endYear > 1999)) {
      zer += 1;
      continue;
    }
    if ((players[i].startYear < 2020 && players[i].startYear > 2009) || (players[i].endYear < 2020 && players[i].endYear > 2009)) {
      ten += 1;
      continue;
    }
  }

  console.log("HERE: " + sev + " " + eig + " " + nin + " " + zer + " " + ten);

  var pg = document.getElementById('PG');
  pg.addEventListener('click', function(){
      createPlayerList("PG");
  });
  var sg = document.getElementById('SG');
  sg.addEventListener('click', function(){
      createPlayerList("SG");
  });
  var sf = document.getElementById('SF');
  sf.addEventListener('click', function(){
      createPlayerList("SF");
  });
  var pf = document.getElementById('PF');
  pf.addEventListener('click', function(){
      createPlayerList("PF");
  });
  var c = document.getElementById('C');
  c.addEventListener('click', function(){
      createPlayerList("C");
  });

  players.sort(function(a, b){return b.price - a.price});

  // var testData = players;
  //   // testData.sort(function(a, b){return (b.per + (b.wS / 2)) - (a.per + (a.wS / 2))});
  //   testData.sort(function(a, b){return ((b.per/2) + b.wS) - ((a.per/2) + a.wS)});
  // var count = 1;
  // for (var i = 0; i < testData.length; i++) {
  //   console.log(testData[i].lastName + " " + ((testData[i].per/2) + testData[i].wS) + " $" + testData[i].price);
  //   console.log("\n");
  //   if (count % 9 == 0) {
  //     console.log("////////////////")
  //     console.log("\n");
  //     console.log("Tier " + (1 + (count / 9)));
  //     console.log("\n");
  //   }
  //   count++;
  // }

  // const getAllPossibleThreeLetterWords = () => {
  //     const threeLetterWords = [];
  //
  //     for (let firstLetterIndex = 0; firstLetterIndex < 15; firstLetterIndex++) {
  //     for (let secondLetterIndex = 0; secondLetterIndex < 15; secondLetterIndex++) {
  //     for (let thirdLetterIndex = 0; thirdLetterIndex < 15; thirdLetterIndex++) {
  //     for (let fourthLetterIndex = 0; fourthLetterIndex < 15; fourthLetterIndex++) {
  //     for (let fifthLetterIndex = 0; fifthLetterIndex < 25; fifthLetterIndex++) {
  //     for (let sixthLetterIndex = 0; sixthLetterIndex < 25; sixthLetterIndex++) {
  //     for (let seventhLetterIndex = 0; seventhLetterIndex < 25; seventhLetterIndex++) {
  //     for (let eighthLetterIndex = 0; eighthLetterIndex < 25; eighthLetterIndex++) {
  //       if (threeLetterWords.length > 5) {
  //         break;
  //       }
  //       else if (  (players[firstLetterIndex].price
  //         + players[secondLetterIndex].price
  //         + players[thirdLetterIndex].price
  //         + players[fourthLetterIndex].price
  //         + players[fifthLetterIndex].price
  //         + players[sixthLetterIndex].price
  //         + players[seventhLetterIndex].price
  //         + players[eighthLetterIndex].price) > 200) {
  //           continue;
  //         } else {
  //           threeLetterWords.push(
  //               players[firstLetterIndex]
  //               + players[secondLetterIndex]
  //               + players[thirdLetterIndex]
  //               + players[fourthLetterIndex]
  //               + players[fifthLetterIndex]
  //               + players[sixthLetterIndex]
  //               + players[seventhLetterIndex]
  //               + players[eighthLetterIndex]);
  //         }
  //
  //     }
  //     }
  //     }
  //     }
  //     }
  //     }
  //     }
  //     }
  //
  //     return threeLetterWords;
  // }
  // console.log(getAllPossibleThreeLetterWords());

  console.log(players);
}


function firstButton() {
  document.getElementById("firstButtonRow").style.display = "none";
  document.getElementById("logoRow").style.display = "none";
  // document.getElementById("ryanBar").style.display = "none";
  //   document.getElementById("wE").style.display = "none";
  document.getElementById("howToTitleRow").style.display = "block";
  document.getElementById("howFirstRow").style.display = "block";
  document.getElementById("how1ARow").style.display = "block";
  document.getElementById("secondButtonRow").style.display = "block";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// function generatePlayerImagesBG() {
//
//   var cont = document.getElementById("playerImagesBG");
//   while (bgCount < 100) {
//    (function (bgCount) {
//      setTimeout(function() {
//        // let w = window.innerWidth;
//        // let h = window.innerHeight;
//
//        // var xAxis = getRandomInt(75) - 37;
//        // var yAxis = getRandomInt(75) - 37;
//        var xAxis = getRandomInt(100);
//        var yAxis = getRandomInt(100);
//        var size = getRandomInt(40) + 10;
//
//
//
//        var picNum = getRandomInt(picsArr.length);
//
//        var pic = document.createElement("img");
//        pic.classList.add("playerPicBG");
//        pic.setAttribute("src", picsArr[picNum]);
//        pic.style.left = xAxis.toString() + "%";
//        pic.style.top = yAxis.toString() + "%";
//        pic.style.width = size.toString() + "vh";
//
//        cont.appendChild(pic);
//
//        setTimeout(function() {
//          size += 5
//          pic.style.width = size.toString() + "vh";
//        }, 500)
//
//        setTimeout(function() {
//          cont.removeChild(pic)
//        }, 1000)
//
//
//      }, 1000 * bgCount)
//    }) (bgCount++)
//   }
//
// }

function generatePlayerImagesBG() {
  if (startPressed) {
    return;
  }

  var cont = document.getElementById("playerImagesBG");
       // let w = window.innerWidth;
       // let h = window.innerHeight;

       // var xAxis = getRandomInt(75) - 37;
       // var yAxis = getRandomInt(75) - 37;
       var xAxis = getRandomInt(100) - 25;
       var yAxis = getRandomInt(100) - 25;
       var size = getRandomInt(40) + 10;



       var picNum = getRandomInt(picsArr.length);

       var pic = document.createElement("img");
       pic.classList.add("playerPicBG");
       pic.setAttribute("src", picsArr[picNum]);
       pic.style.left = xAxis.toString() + "%";
       pic.style.top = yAxis.toString() + "%";
       pic.style.width = size.toString() + "vh";

       cont.appendChild(pic);

       setTimeout(function() {
         size += 5
         pic.style.width = size.toString() + "vh";
       }, 500)

       setTimeout(function() {
         cont.removeChild(pic)
       }, 1000)

       setTimeout(function() {
         generatePlayerImagesBG()
       }, 1000)
}




function secondButton() {
  var picNum = getRandomInt(loadpicsArr.length);
  document.getElementById("loadingPlayer").setAttribute("src", loadpicsArr[picNum][0]);
  document.getElementById("loadingPlayer2").setAttribute("src", loadpicsArr[picNum][1]);


  startPressed = true;
  document.getElementById("loading").style.display = "block";
  document.getElementById("howToTitleRow").style.display = "none";
  document.getElementById("howFirstRow").style.display = "none";
  document.getElementById("how1ARow").style.display = "none";
  document.getElementById("secondButtonRow").style.display = "none";




  document.body.style.backgroundSize = "auto";

  setTimeout(
    function() {
      createPlayerList("none");
        document.getElementById("playersAll").style.display = "block";
        document.getElementById("selectTop").style.display = "block";
        document.getElementById("positionBar").style.display = "block";
    }, 1100);

  setTimeout(
    function(){
      document.getElementById("loading").style.display = "none";
      document.getElementById("teamNav").classList.add("wholeNav");
      document.getElementById("playersAll").classList.add("playerAni-target");

      setSpecCircle();
      setSpecCircle2();
      createPlayerList("none");
      scroll(0,0);
    }, 2000);
}


function createPlayerList(input) {
  console.log(input);
  var thing = document.getElementById('playersAll');
  while (thing.firstChild) {
      thing.removeChild(thing.firstChild);
  }
  for (var i = 0; i < players.length; i++) {
    if (input != "none") {
      if (players[i].position != input) {
        continue;
      }
    }
    if (roster.indexOf(players[i]) >= 0) {
      continue;
    }
    var cont = document.createElement('div');
    cont.classList.add("container-fluid");
    cont.classList.add("hite");

    var bigRow = document.createElement('div');
    bigRow.classList.add("row");

    var imageCol = document.createElement('div');
    imageCol.classList.add("col-xs-3");
    imageCol.classList.add("hmmImage");
    // imageCol.classList.add("imageTry");

    var imageCol2 = document.createElement('div');
    imageCol2.classList.add("imageTry");
    imageCol2.style.backgroundImage = "url(" + players[i].pic + ")";
    // imageCol.style.backgroundImage = "url(" + players[i].pic + ")";
    imageCol.appendChild(imageCol2);
    bigRow.appendChild(imageCol);

    var playerCol = document.createElement('div');
    playerCol.classList.add("col-xs-6");
    playerCol.classList.add("playerMidCol");
    playerCol.classList.add("text-center");

      // first name

      var firstNRow = document.createElement('div');
      firstNRow.classList.add("row");

      var firstNCol = document.createElement('div');
      firstNCol.classList.add("col-xs-12");

      var firstNText = document.createElement('h4');
      firstNText.classList.add("playerFirstName");
      firstNText.innerHTML = players[i].firstName.toUpperCase();

      firstNCol.appendChild(firstNText);
      firstNRow.appendChild(firstNCol);
      playerCol.appendChild(firstNRow);

      // last name

      var lastNRow = document.createElement('div');
      lastNRow.classList.add("row");

      var lastNCol = document.createElement('div');
      lastNCol.classList.add("col-xs-12");

      if (players[i].lastName.length >= 10) {
        var lastNText = document.createElement('h3');
      } else {
        var lastNText = document.createElement('h2');
      }

      lastNText.classList.add("playerLastName");
      lastNText.innerHTML = players[i].lastName.toUpperCase();

      lastNCol.appendChild(lastNText);
      lastNRow.appendChild(lastNCol);
      playerCol.appendChild(lastNRow);


      var schoolRow = document.createElement('div');
      schoolRow.classList.add("row");

      var schoolCol = document.createElement('div');
      schoolCol.classList.add("col-xs-12");

      var schoolText = document.createElement('h4');
      schoolText.classList.add("playerSchool");
      schoolText.innerHTML = players[i].school;

      schoolCol.appendChild(schoolText);
      schoolRow.appendChild(schoolCol);
      playerCol.appendChild(schoolRow);


      // years
      var yearsRow = document.createElement('div');
      yearsRow.classList.add("row");

      var yearsCol = document.createElement('div');
      yearsCol.classList.add("col-xs-12");

      var yearsText = document.createElement('h4');
      yearsText.classList.add("playerYears");
      yearsText.innerHTML = players[i].startYear + " - " + players[i].endYear;

      yearsCol.appendChild(yearsText);
      yearsRow.appendChild(yearsCol);
      playerCol.appendChild(yearsRow);

      // pos height
      var posHeightRow = document.createElement('div');
      posHeightRow.classList.add("row");

      var phDummyCol1 = document.createElement('div');
      phDummyCol1.classList.add("col-xs-2");

      var posCol = document.createElement('div');
      posCol.classList.add("col-xs-4");

      var posText = document.createElement('h5');
      posText.classList.add("playerPosition");
      posText.innerHTML = players[i].position;

      var heightCol = document.createElement('div');
      heightCol.classList.add("col-xs-4");

      var heightText = document.createElement('h5');
      heightText.classList.add("playerHeight");
      heightText.innerHTML = players[i].height;

      var phDummyCol2 = document.createElement('div');
      phDummyCol2.classList.add("col-xs-2");

      posCol.appendChild(posText);
      heightCol.appendChild(heightText);
      posHeightRow.appendChild(phDummyCol1);
      posHeightRow.appendChild(posCol);
      posHeightRow.appendChild(heightCol);
      posHeightRow.appendChild(phDummyCol2);
      playerCol.appendChild(posHeightRow);

      // All Stars
      var starsRow = document.createElement('div');
      starsRow.classList.add("row");

      var starsCol = document.createElement('div');
      starsCol.classList.add("col-xs-12");

      var starsText = document.createElement('h5');
      starsText.classList.add("playerAllStars");
      if (players[i].champ > 0) {
        starsText.innerHTML = players[i].champ + "x Champion";
      }


      starsCol.appendChild(starsText);
      starsRow.appendChild(starsCol);
      playerCol.appendChild(starsRow);

      // Hall of Fame
      var fameRow = document.createElement('div');
      fameRow.classList.add("row");

      var fameCol = document.createElement('div');
      fameCol.classList.add("col-xs-12");

      var fameText = document.createElement('h5');
      fameText.classList.add("playerHallOfFame");
      if (players[i].hallOfFame == true) {
        fameText.innerHTML = "Hall of Famer";
      }


      fameCol.appendChild(fameText);
      fameRow.appendChild(fameCol);
      playerCol.appendChild(fameRow);

    bigRow.appendChild(playerCol);

    var addCol = document.createElement('div');
    addCol.classList.add("col-xs-3");
    addCol.classList.add("addButton");
    addCol.classList.add("text-center");
    // addCol.addEventListener('click', function(){
    //     addPlayer(players[test]);
    // });

    if (players[i].price <= moneyLeft) {
      adds(addCol, players[i]);
    }



// Closures! :D
//
// This fixed code works as you intended:
//
// for (var i = 0; i < elem.length; i += 2) {
//     (function () {
//         var k = i + 1;
//         var boxa = elem[i].parentNode.id;
//         var boxb = elem[k].parentNode.id;
//
//         elem[i].addEventListener("click", function() { makeItHappen(boxa,boxb); }, false);
//         elem[k].addEventListener("click", function() { makeItHappen(boxb,boxa); }, false);
//     }());

      var addTRow = document.createElement('div');
      addTRow.classList.add("row");

      var addTCol = document.createElement('div');
      addTCol.classList.add("col-xs-12");

      var addTText = document.createElement('h3');
      addTText.classList.add("addText");
      addTText.innerHTML = "ADD";

      var priceCol = document.createElement('div');
      priceCol.classList.add("col-xs-12");

      var priceText = document.createElement('h3');
      priceText.classList.add("priceText");
      priceText.innerHTML = "($" + players[i].price + ")";

      addTCol.appendChild(addTText);
      addTRow.appendChild(addTCol);
      priceCol.appendChild(priceText);
      addTRow.appendChild(priceCol);
      addCol.appendChild(addTRow);

      bigRow.appendChild(addCol);
      cont.appendChild(bigRow);

      // cont.classList.add("playerAni-target");

      document.getElementById('playersAll').appendChild(cont);
      if (players[i].price > moneyLeft) {
        cont.style.opacity = ".5";
      }

  }
  if (input != "none") {
    var ele = document.getElementById(input);
    ele.style.backgroundColor = "#0c2165";
    ele.style.color = "white";
    if (lastPos != "begin") {
      var ele2 = document.getElementById(lastPos);
      ele2.style.backgroundColor = "white";
      ele2.style.color = "black";
      console.log(lastPos);
    }
    lastPos = input;
  }

}

var gritDone = false;
var lockerDone = false;
var usgDone = false;
var oldDone = false;

function checkLockerRoom() {
  var grit = 0;
  var locker = 0;
  var old = 0;
  for (var i = 0; i < roster.length; i++) {
    if (roster[i].lockerRoomProb) {
      locker += 1;
    }
    if (roster[i].tough) {
      grit += 1;
    }
    // if (roster[i].usage >= 27) {
    //   usg += 1;
    // }
    if (roster[i].startYear < 1980) {
      old += 1;
    }
  }
  if (locker == 3 && !lockerDone) {
    console.log("You gotta lot of personality on this team!");
    lockerDone = true;
    return;
  }
  if (grit == 3 && !gritDone) {
    console.log("You're building a gritty team!");
    gritDone = true;
    return;
  }
  if (old == 4 && !oldDone) {
    console.log("It must be Old-Timers' Day.");
    oldDone = true;
    return;
  }
  // if (grit == 3 && !usgDone) {
  //   console.log("There's only one ball...");
  //   usgDone = true;
  //   return;
  // }
}


function addPlayer(input) {
  if (roster.length >= 5) {
    return;
  }
  roster.push(input);
  checkLockerRoom();
  console.log(roster);
  moneyLeft -= input.price;
  document.getElementById("money").innerHTML = "$" + moneyLeft;
  document.getElementById("c" + roster.length).style.backgroundImage =  "url(" + input.headshot + ")";
  document.getElementById("c" + roster.length).classList.add("animation-target");
  removes(document.getElementById("c" + roster.length), input); //IDK
  if (lastPos != "begin") {
    createPlayerList(lastPos);
  } else {
    createPlayerList("none");
  }

  if (roster.length == 5) {
    document.getElementById("selectTop").classList.add("exit-target");
    document.getElementById("playersAll").classList.add("exit-target");
    document.getElementById("positionBar").classList.add("exit-target");
    scroll(0,0);
    setTimeout(function(){
      // // Get the last <li> element ("Milk") of <ul> with id="myList2"
      // var itm = document.getElementById("myList2").lastChild;
      //
      // // Copy the <li> element and its child nodes
      // var cln = itm.cloneNode(true);
      //
      // // Append the cloned <li> element to <ul> with id="myList1"
      // document.getElementById("myList1").appendChild(cln);
      var cir = document.getElementById("teamCircles");
      cir.style.backgroundImage = "none";
      var cln = cir.cloneNode(true);
      document.getElementById("clone").appendChild(cln);
      document.body.style.backgroundImage = "url('beigeNoDots.jpg')";
                          document.getElementById("selectTop").style.display = "none";
                          document.getElementById("playersAll").style.display = "none";
                        document.getElementById("positionBar").style.display = "none";
                        document.getElementById("resultRow").style.display = "block";
                        document.getElementById("shootingRow").style.display = "block";
                            document.getElementById("passingRow").style.display = "block";
                            document.getElementById("reboundingRow").style.display = "block";
                              document.getElementById("offenseRow").style.display = "block";
                              document.getElementById("defenseRow").style.display = "block";
                                document.getElementById("overallRow").style.display = "block";
                                  document.getElementById("TKWRow").style.display = "block";
                            document.getElementById("clone").style.display = "block";
                              document.getElementById("resultsButtonRow").style.display = "block";
                            shootingTest();
                            passingTest();
                            reboundingTest();
                            offenseTest();
                            defenseTest();
                            overallTest();
                      getResults();}, 2400);
  }
}

function addPlayerHelper(input, num) {
  document.getElementById("c" + num).style.backgroundImage =  "url(" + input.headshot + ")";
  document.getElementById("c" + num).classList.add("animation-target");
  removes(document.getElementById("c" + num), input);
}

// function removePlayer(input) {
//   moneyLeft += input.price;
//   document.getElementById("money").innerHTML = "$" + moneyLeft;
//   var index = roster.indexOf(input);
//   if (index > -1) {
//     roster.splice(index, 1);
//   }
//   var rem = document.getElementById("c" + (index + 1));
//   rem.removeEventListener("click", removePlayer, false);
//   console.log(roster);
//   console.log(moneyLeft);
//   for (var i = 1; i < (roster.length + 2); i++) {
//     var ele = document.getElementById("c" + i);
//     ele.style.backgroundImage = "none";
//     ele.classList.remove("animation-target");
//     // removesEvent(ele);  //GLITCH
//   }
//   for (var j = 1; j < (roster.length + 1); j++) {
//     addPlayerHelper(roster[j - 1], j);
//   }
//   // var ele = document.getElementById("c" + (index + 1));
//   // ele.style.backgroundImage = "none";
//   // ele.classList.remove("animation-target");
//   if (lastPos != "begin") {
//     createPlayerList(lastPos);
//   } else {
//     createPlayerList("none");
//   }
// }

function sC() {
  setSpecCircle();
  setSpecCircle2();
}

function hoverButt(whatever) {
  whatever.setAttribute("src", "startButtHover.png");
}

function unhoverButt(whatever) {
  whatever.setAttribute("src", "startButt.png");
}

function sharehoverButt(whatever) {
  whatever.setAttribute("src", "share2.png");
}

function shareunhoverButt(whatever) {
  whatever.setAttribute("src", "share.png");
}

function setSpecCircle() {
  var specCircle = document.getElementById("specialCircle");
  var row = document.getElementById("teamCirclesRow1");
  var step1 = (62.5 * 5) / window.innerWidth;
  var step2 = 1 - step1;
  var step3 = step2 / 2;
  var step4 = window.innerWidth * step3
  // var final = window.innerWidth - step3;
  specCircle.style.width = step4 + "px";
  console.log(step4);


}

// function setSpecCircle2() {
//   var specCircle = document.getElementById("specialCircle2");
//   var row = document.getElementById("teamCirclesRow1");
//   var step1 = (62.5 * 3) / window.innerWidth;
//   var step2 = 1 - step1;
//   var step3 = step2 / 2;
//   var step4 = window.innerWidth * step3
//   // var final = window.innerWidth - step3;
//   specCircle.style.width = step4 + "px";
//   console.log("hello");
// }

function removePlayer(input) {
    moneyLeft += input.price;
    document.getElementById("money").innerHTML = "$" + moneyLeft;
      var index = roster.indexOf(input);
      if (index > -1) {
        roster.splice(index, 1);
      }
      var thing = document.getElementById('teamCircles');
      while (thing.firstChild) {
          thing.removeChild(thing.firstChild);
      }
      var firstRow = document.createElement('div');
      firstRow.classList.add("row");
      firstRow.classList.add("center-block");
      firstRow.setAttribute("id", "teamCirclesRow1");
      firstRow.setAttribute("style", "height: auto");

      var dummy1 = document.createElement('div');
      dummy1.classList.add("col-xs-1");
      dummy1.classList.add("circle2");
      dummy1.setAttribute("id", "specialCircle");


      firstRow.appendChild(dummy1);

      for (var i = 1; i <= 5; i++) {
        var temp = document.createElement('div');
        temp.classList.add("col-xs-2");
        temp.classList.add("circle");
        temp.setAttribute("id", "c" + i);

        if (roster.length >= i) {
          temp.style.backgroundImage = "url(" + roster[i - 1].headshot + ")";
          temp.classList.add("animation-target");
          removes(temp, roster[i - 1]);
        }
        firstRow.appendChild(temp);
      }
      var dummy2 = document.createElement('div');
      dummy2.classList.add("col-xs-1");
      dummy2.classList.add("circle2");

      firstRow.appendChild(dummy2);

      var secondRow = document.createElement('div');
      secondRow.classList.add("row");
      secondRow.classList.add("center-block");
      secondRow.setAttribute("id", "teamCirclesRow2");
      secondRow.setAttribute("style", "height: auto");

      var dummy3 = document.createElement('div');
      dummy3.classList.add("col-xs-3");
        dummy3.setAttribute("id", "specialCircle2");

      secondRow.appendChild(dummy3);

      for (var i = 6; i <= 8; i++) {
        var temp = document.createElement('div');
        temp.classList.add("col-xs-2");
        temp.classList.add("circle");
        temp.setAttribute("id", "c" + i);

        if (roster.length >= i) {
          temp.style.backgroundImage = "url(" + roster[i - 1].headshot + ")";
          temp.classList.add("animation-target");
          removes(temp, roster[i - 1]);
        }
        secondRow.appendChild(temp);
      }

      var dummy4 = document.createElement('div');
      dummy4.classList.add("col-xs-3");

      secondRow.appendChild(dummy4);




      thing.appendChild(firstRow);
      // thing.appendChild(secondRow);

      if (lastPos != "begin") {
        createPlayerList(lastPos);
      } else {
        createPlayerList("none");
      }
      setSpecCircle();
      setSpecCircle2();
}

function adds(ele, obj){
  ele.addEventListener("click", function(){addPlayer(obj);}, false);
}

function removes(ele, obj) {
  ele.addEventListener("click", function(){removePlayer(obj);}, false);
}


///GLITCH
function removesEvent(ele) {
    ele.removeEventListener("click", function(){removePlayer(obj);}, false);
}



function shootingTest() {
  var shoot = 0;
  for (var i = 0; i < roster.length; i++) {
    shoot += roster[i].three;
  }
  console.log("three: " + shoot);
  if (shoot < 168.75) {
    document.getElementById('sS5').style.display = "none";
  }
  if (shoot < 150) {
    document.getElementById('sS4').style.display = "none";
  }
  if (shoot < 125) {
    document.getElementById('sS3').style.display = "none";
  }
  if (shoot < 105) {
    document.getElementById('sS2').style.display = "none";
  }
}

function passingTest() {
  var pass = 0;
  for (var i = 0; i < roster.length; i++) {
    pass += roster[i].ast;
  }
  console.log("pass: " + pass);
  if (pass < 20) {
    document.getElementById('pS5').style.display = "none";
  }
  if (pass < 16.25) {
    document.getElementById('pS4').style.display = "none";
  }
  if (pass < 13.75) {
    document.getElementById('pS3').style.display = "none";
  }
  if (pass < 11.25) {
    document.getElementById('pS2').style.display = "none";
  }
}

function reboundingTest() {
  var rebound = 0;
  for (var i = 0; i < roster.length; i++) {
    rebound += roster[i].reb;
  }
  console.log("rebound :" + rebound);
  if (rebound < 43) {
    document.getElementById('rS5').style.display = "none";
  }
  if (rebound < 39.5) {
    document.getElementById('rS4').style.display = "none";
  }
  if (rebound < 36) {
    document.getElementById('rS3').style.display = "none";
  }
  if (rebound < 31.5) {
    document.getElementById('rS2').style.display = "none";
  }
}

function offenseTest() {
  var offense = 0;
  for (var i = 0; i < roster.length; i++) {
    offense += roster[i].offWS;
  }

  console.log("offense: " + offense);
  // var dum = offense * .375;
  // offense += dum;
  if (offense < 27) {
    document.getElementById('oS5').style.display = "none";
  }
  if (offense < 25) {
    document.getElementById('oS4').style.display = "none";
  }
  if (offense < 22) {
    document.getElementById('oS3').style.display = "none";
  }
  if (offense < 18) {
    document.getElementById('oS2').style.display = "none";
  }
}

function defenseTest() {
  var defense = 0;
  for (var i = 0; i < roster.length; i++) {
    defense += roster[i].defWS;
  }
  console.log("defense: " + defense);
  // var dum = defense * .375;
  // defense += dum;
  if (defense < 17) {
    document.getElementById('dS5').style.display = "none";
  }
  if (defense < 15) {
    document.getElementById('dS4').style.display = "none";
  }
  if (defense < 13) {
    document.getElementById('dS3').style.display = "none";
  }
  if (defense < 11) {
    document.getElementById('dS2').style.display = "none";
  }
}

function overallTest() {
  var formula = 0;
  for (var i = 0; i < roster.length; i++) {
    formula += roster[i].wS;
  }
console.log("b: " + formula);
  // var dum = formula * .395;
  // formula += dum;
  // formula -= 52;
  // console.log("a: " + formula);
  if (formula >= 70) {
    document.getElementById('score').innerHTML = "10/10";
    return;
  }
  if (formula >= 60) {
    formula = 10 - (70 - formula);
    formula = formula / 10;
    formula *= 4;
    ovrScore = 6 + formula;
    ovrScore = checkStarters(ovrScore);
    ovrScore = Math.round(10*ovrScore)/10;

    if (ovrScore > 10) {
      ovrScore = 10;
    }
    document.getElementById('score').innerHTML = ovrScore + "/10";
    return;
  }
  if (formula < 60) {
    console.log(formula);
    // formula /= 4.5;
    ovrScore = formula - 10;
    console.log(ovrScore);
    ovrScore /= 35;
    ovrScore *= 10;
    console.log(ovrScore);
    ovrScore = checkStarters(ovrScore);
    ovrScore = Math.round(10*ovrScore)/10;
    if (ovrScore < 0) {
      ovrScore = 0;
    }
    if (ovrScore > 10) {
      ovrScore = 10;
    }
    rating = ovrScore;
    document.getElementById('score').innerHTML = ovrScore + "/10";
    return;
  }
  var ovrScore = formula / 68;
  console.log(ovrScore);
  ovrScore *= 10;
  ovrScore = checkStarters(ovrScore);
  ovrScore = Math.round(10*ovrScore)/10;

  document.getElementById('score').innerHTML = ovrScore + "/10";
}


function staffScoreTest(sr) {
  var formula = 0;
  for (var i = 0; i < sr.length; i++) {
    formula += ((sr[i].per / 2) + sr[i].wS);
  }

  formula -= 52;
  console.log(formula);
  // if (formula >= 70) {
  //   document.getElementById('score').innerHTML = "10/10";
  //   return;
  // }
  if (formula >= 60) {
    formula = 10 - (70 - formula);
    formula = formula / 10;
    formula *= 4;
    ovrScore = 6 + formula;
    ovrScore = checkStaffStarters(ovrScore, sr);
    ovrScore = Math.round(10*ovrScore)/10;

    if (ovrScore > 10) {
      ovrScore = 10;
    }
    return ovrScore;
  }
  if (formula < 60) {
    formula /= 60;
    formula *= 6;
    ovrScore = formula;
    ovrScore = checkStaffStarters(ovrScore, sr);
    ovrScore = Math.round(10*ovrScore)/10;
    if (ovrScore < 0) {
      ovrScore = 0;
    }

    return ovrScore;
  }
  var ovrScore = formula / 68;
  console.log(ovrScore);
  ovrScore *= 10;
  ovrScore = checkStaffStarters(ovrScore, sr);
  ovrScore = Math.round(10*ovrScore)/10;

  return ovrScore;
}

function checkStaffStarters(num, sr) {
  console.log("wtf");
  var wings = 0;
  var guards = 0;
  var bigs = 0;
  var pg = false;
  var pgs = 0;
  var cs = 0;
  for (var i = 0; i < 5; i++) {
    if (sr[i].type == "wing") {
      wings += 1;
    }
    else if (sr[i].type == "big") {
      bigs += 1;
    }
    else if (sr[i].type == "guard") {
      guards += 1;
    }
    if (sr[i].position == "PG") {
      pg = true;
      pgs += 1;
    }
    if (sr[i].position == "C") {
      cs += 1;
    }
  }
  if (wings >= 4) {
    console.log("too many wings");
      num -= 1;
  }
  if (bigs >= 3) {
    console.log("too many bigs");
      num -= 1.3;
  }
  if (guards >= 4) {
    console.log("too many guards");
      num -= 1;
  }
  if (!pg) {
    console.log("no pg");
      num -= .4;
  }
  if (pgs >= 3) {
    console.log("too many point guards");
      num -= 1.3;
  }
  if (cs >= 2) {
    console.log("too many centers");
      num -= .5;
  }
  console.log(wings + ":wings");
  console.log(bigs + ":bigs");
  console.log(guards + ":guards");
  return num;
}

function checkStarters(num) {
  console.log("wtf");
  var wings = 0;
  var guards = 0;
  var bigs = 0;
  var pg = false;
  var pgs = 0;
  var cs = 0;
  for (var i = 0; i < 5; i++) {
    if (roster[i].type == "wing") {
      wings += 1;
    }
    else if (roster[i].type == "big") {
      bigs += 1;
    }
    else if (roster[i].type == "guard") {
      guards += 1;
    }
    if (roster[i].position == "PG") {
      pg = true;
      pgs += 1;
    }
    if (roster[i].position == "C") {
      cs += 1;
    }
  }
  if (wings >= 4) {
    console.log("too many wings");
      num -= 1;
  }
  if (bigs >= 3) {
    console.log("too many bigs");
      num -= 1.3;
  }
  if (guards >= 4) {
    console.log("too many guards");
      num -= 1;
  }
  if (!pg) {
    console.log("no pg");
      num -= 1;
  }
  if (pgs >= 3) {
    console.log("too many pgs");
      num -= 1.3;
  }
  if (cs >= 2) {
    console.log("too many centers");
      num -= .5;
  }
  console.log(wings + ":wings");
  console.log(bigs + ":bigs");
  console.log(guards + ":guards");
  return num;
}

function wordle() {
  var content = "March Madness Team Builder\n\n"
  + roster[0].firstName + " " + roster[0].lastName + " ($" + roster[0].price.toString() + ")\n"
+ roster[1].firstName + " " + roster[1].lastName + " ($" + roster[1].price.toString() + ")\n"
+ roster[2].firstName + " " + roster[2].lastName + " ($" + roster[2].price.toString() + ")\n"
+ roster[3].firstName + " " + roster[3].lastName + " ($" + roster[3].price.toString() + ")\n"
+ roster[4].firstName + " " + roster[4].lastName + " ($" + roster[4].price.toString() + ")\n\n"
+ "Rating: " + rating.toString() + "/10\n\n"
+ "@WhistleSports";

navigator.clipboard.writeText(content)
    .then(() => {
    console.log("Text copied to clipboard...")
})
    .catch(err => {
    console.log('Something went wrong', err);
})

document.getElementById("copied").style.display = "block";
}



function TKWStaffPicksButton() {
    document.getElementById('resultsButtonRow').style.display = "none";
    document.getElementById('TKWRow').style.display = "none";
    document.getElementById('overallRow').style.display = "none";
    document.getElementById('defenseRow').style.display = "none";
    document.getElementById('offenseRow').style.display = "none";
    document.getElementById('reboundingRow').style.display = "none";
    document.getElementById('passingRow').style.display = "none";
    document.getElementById('shootingRow').style.display = "none";
    document.getElementById('resultRow').style.display = "none";
    document.getElementById('clone').style.display = "none";
    document.body.style.backgroundImage = "url(blueBG.png)";
    document.getElementById('resultsText').innerHTML = "TKW Staff Picks";
    document.getElementById('resultRow').style.display = "block";
    generateStaff();
    scroll(0,0);
}

function generateStaff() {
  var whole = document.getElementById('TKWS');
  whole.style.display = "block";
  for (var i = 0; i < staff.length; i++) {
    console.log(i + 1);
    var tempStaff = staff[i];
    var NameRow = document.createElement('div');
    NameRow.classList.add("row");
    NameRow.classList.add("text-center");

    var NameCol = document.createElement('div');
    NameCol.classList.add("col-xs-12");

    var NameText = document.createElement('h2');
    NameText.classList.add("staffName");
    NameText.innerHTML = staff[i].firstName + " " + staff[i].lastName;

    NameCol.appendChild(NameText);
    NameRow.appendChild(NameCol);
    whole.appendChild(NameRow);

    var TwitterLink = document.createElement('a');
    TwitterLink.setAttribute("href", staff[i].twitterLink);
    TwitterLink.setAttribute("target", "_blank");

    var TwitterRow = document.createElement('div');
    TwitterRow.classList.add("row");
    TwitterRow.classList.add("text-center");

    var TwitterCol = document.createElement('div');
    TwitterCol.classList.add("col-xs-12");





    var TwitterText = document.createElement('h4');
    TwitterText.classList.add("twitter");

    TwitterText.innerHTML = staff[i].twitter;


    TwitterCol.appendChild(TwitterText);
    TwitterRow.appendChild(TwitterCol);
    TwitterLink.appendChild(TwitterRow);
    whole.appendChild(TwitterLink);

    var RoleRow = document.createElement('div');
    RoleRow.classList.add("row");
    RoleRow.classList.add("text-center");

    var RoleCol = document.createElement('div');
    RoleCol.classList.add("col-xs-12");

    var RoleText = document.createElement('h5');
    RoleText.classList.add("role");
    RoleText.innerHTML = staff[i].role;

    RoleCol.appendChild(RoleText);
    RoleRow.appendChild(RoleCol);
    whole.appendChild(RoleRow);



    ////

    var firstRow = document.createElement('div');
    firstRow.classList.add("row");
    firstRow.classList.add("center-block");
    firstRow.setAttribute("id", "teamCirclesRow1");
    firstRow.setAttribute("style", "height: auto");

    var dummy1 = document.createElement('div');
    dummy1.classList.add("col-xs-1");
    dummy1.classList.add("circle2");
    dummy1.setAttribute("id", "specialCircle");

    var step1 = (62.5 * 5) / window.innerWidth;
    var step2 = 1 - step1;
    var step3 = step2 / 2;
    var step4 = window.innerWidth * step3
    // var final = window.innerWidth - step3;
    dummy1.style.width = step4 + "px";
    console.log(step4);


    firstRow.appendChild(dummy1);

    for (var k = 1; k <= 5; k++) {
      var temp = document.createElement('div');
      temp.classList.add("col-xs-2");
      temp.classList.add("circle");
      temp.setAttribute("id", "c" + k);

      if (roster.length >= k) {
        temp.style.backgroundImage = "url(" + tempStaff.roster[k - 1].headshot + ")";
        temp.classList.add("animation-target");
      }
      firstRow.appendChild(temp);
    }
    var dummy2 = document.createElement('div');
    dummy2.classList.add("col-xs-1");
    dummy2.classList.add("circle2");

    // firstRow.appendChild(dummy2);

    var secondRow = document.createElement('div');
    secondRow.classList.add("row");
    secondRow.classList.add("center-block");
    secondRow.setAttribute("id", "teamCirclesRow2");
    secondRow.setAttribute("style", "height: auto");

    var dummy3 = document.createElement('div');
    dummy3.classList.add("col-xs-3");
      dummy3.setAttribute("id", "specialCircle2");



      var step1 = (62.5 * 3) / window.innerWidth;
      var step2 = 1 - step1;
      var step3 = step2 / 2;
      var step4 = window.innerWidth * step3
      // var final = window.innerWidth - step3;
      dummy3.style.width = step4 + "px";
      console.log("hello");

    secondRow.appendChild(dummy3);

    for (var j = 6; j <= 8; j++) {
      var temp = document.createElement('div');
      temp.classList.add("col-xs-2");
      temp.classList.add("circle");
      temp.setAttribute("id", "c" + j);

      if (roster.length >= j) {
        temp.style.backgroundImage = "url(" + tempStaff.roster[j - 1].headshot + ")";
        temp.classList.add("animation-target");
      }
      secondRow.appendChild(temp);
    }

    var dummy4 = document.createElement('div');
    dummy4.classList.add("col-xs-3");

    secondRow.appendChild(dummy4);

    whole.appendChild(firstRow);
    whole.appendChild(secondRow);

    var ScoreRow = document.createElement('div');
    ScoreRow.classList.add("row");
    ScoreRow.classList.add("text-center");

    var ScoreCol = document.createElement('div');
    ScoreCol.classList.add("col-xs-12");

    var ScoreText = document.createElement('h3');
    ScoreText.classList.add("staffScore");
    ScoreText.innerHTML = staffScoreTest(staff[i].roster);

    ScoreCol.appendChild(ScoreText);
    ScoreRow.appendChild(ScoreCol);
    whole.appendChild(ScoreRow);

    var BlurbRow = document.createElement('div');
    BlurbRow.classList.add("row");
    BlurbRow.classList.add("text-center");

    var BlurbCol = document.createElement('div');
    BlurbCol.classList.add("col-xs-12");

    var BlurbText = document.createElement('h4');
    BlurbText.classList.add("blurb");
    BlurbText.innerHTML = tempStaff.blurb;

    BlurbCol.appendChild(BlurbText);
    BlurbRow.appendChild(BlurbCol);
    whole.appendChild(BlurbRow);

  }
}
