import "./styles.css";

let playerState = {
  roundState: 1,
  player1: {
    turn: true,
    sym: "x",
    p1arr: [],
    status: "nil"
  },
  player2: {
    turn: false,
    sym: "0",
    p2arr: [],
    status: "nil"
  }
};

let td = document.getElementsByClassName("td");

for (let i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function () {
    console.log(td[i].textContent);
    if (playerState.player1.turn === true) {
      playerState.player1.p1arr[playerState.roundState - 1] = td[i].innerHTML;
      td[i].classList.add("_" + td[i].innerHTML);
      td[i].classList.add("p1");
      td[i].classList.add("clicked");
      td[i].innerHTML = playerState.player1.sym;
      playerState.player1.turn = false;
      playerState.player2.turn = true;

      console.log("p1 arr", playerState.player1.p1arr);
    } else {
      playerState.player2.p2arr[playerState.roundState - 1] = td[i].innerHTML;
      td[i].classList.add("_" + td[i].innerHTML);
      td[i].classList.add("p2");
      td[i].classList.add("clicked");
      td[i].innerHTML = playerState.player2.sym;
      playerState.player2.turn = false;
      playerState.player1.turn = true;
      playerState.roundState = playerState.roundState + 1;
      console.log(playerState.roundState);
      console.log("p2 arr", playerState.player2.p2arr);
    }
    if (playerState.roundState >= 3) {
      if (playerState.player1.p1arr.includes("00")) {
        if (playerState.player1.p1arr.includes("01")) {
          if (playerState.player1.p1arr.includes("02")) {
            let x = document.getElementsByClassName("p1");
            playerState.player1.status = "win";
          }
        }
        if (playerState.player1.p1arr.includes("10")) {
          if (playerState.player1.p1arr.includes("20"))
            playerState.player1.status = "win";
        }
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("22"))
            playerState.player1.status = "win";
        }
      }

      if (playerState.player1.p1arr.includes("01")) {
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("21"))
            playerState.player1.status = "win";
        }
      }

      if (playerState.player1.p1arr.includes("02")) {
        if (playerState.player1.p1arr.includes("12")) {
          if (playerState.player1.p1arr.includes("22"))
            playerState.player1.status = "win";
        }
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("20"))
            playerState.player1.status = "win";
        }
      }

      if (playerState.player1.p1arr.includes("10")) {
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("12"))
            playerState.player1.status = "win";
        }
      }

      if (playerState.player1.p1arr.includes("20")) {
        if (playerState.player1.p1arr.includes("21")) {
          if (playerState.player1.p1arr.includes("22"))
            playerState.player1.status = "win";
        }
      }
    }

    if (playerState.player1.status === "win") console.log("p1 won");

    if (playerState.player2.p2arr.includes("00")) {
      if (playerState.player2.p2arr.includes("01")) {
        if (playerState.player2.p2arr.includes("02"))
          playerState.player2.status = "win";
      }
      if (playerState.player2.p2arr.includes("10")) {
        if (playerState.player2.p2arr.includes("20"))
          playerState.player2.status = "win";
      }
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("22"))
          playerState.player2.status = "win";
      }
    }

    if (playerState.player2.p2arr.includes("01")) {
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("21"))
          playerState.player2.status = "win";
      }
    }

    if (playerState.player2.p2arr.includes("02")) {
      if (playerState.player2.p2arr.includes("12")) {
        if (playerState.player2.p2arr.includes("22"))
          playerState.player2.status = "win";
      }
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("20"))
          playerState.player2.status = "win";
      }
    }

    if (playerState.player2.p2arr.includes("10")) {
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("12"))
          playerState.player2.status = "win";
      }
    }

    if (playerState.player2.p2arr.includes("20")) {
      if (playerState.player2.p2arr.includes("21")) {
        if (playerState.player2.p2arr.includes("22"))
          playerState.player2.status = "win";
      }
    }

    if (playerState.player2.status === "win") console.log("p2 won");
  });
}
