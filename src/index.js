import "./styles.css";

let playerState = {
  winArray: [],
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
            playerState.winArray = ["00", "01", "02"];
            playerState.player1.status = "win";
          }
        }
        if (playerState.player1.p1arr.includes("10")) {
          if (playerState.player1.p1arr.includes("20")) {
            playerState.winArray = ["00", "10", "20"];
            playerState.player1.status = "win";
          }
        }
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("22")) {
            playerState.winArray = ["00", "11", "22"];
            playerState.player1.status = "win";
          }
        }
      }

      if (playerState.player1.p1arr.includes("01")) {
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("21")) {
            playerState.winArray = ["01", "11", "21"];
            playerState.player1.status = "win";
          }
        }
      }

      if (playerState.player1.p1arr.includes("02")) {
        if (playerState.player1.p1arr.includes("12")) {
          if (playerState.player1.p1arr.includes("22")) {
            playerState.winArray = ["02", "12", "22"];
            playerState.player1.status = "win";
          }
        }
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("20")) {
            playerState.winArray = ["02", "11", "20"];
            playerState.player1.status = "win";
          }
        }
      }

      if (playerState.player1.p1arr.includes("10")) {
        if (playerState.player1.p1arr.includes("11")) {
          if (playerState.player1.p1arr.includes("12")) {
            playerState.winArray = ["10", "11", "12"];
            playerState.player1.status = "win";
          }
        }
      }

      if (playerState.player1.p1arr.includes("20")) {
        if (playerState.player1.p1arr.includes("21")) {
          if (playerState.player1.p1arr.includes("22")) {
            playerState.winArray = ["20", "21", "22"];
            playerState.player1.status = "win";
          }
        }
      }
    }

    if (playerState.player1.status === "win") console.log("p1 won");

    if (playerState.player2.p2arr.includes("00")) {
      if (playerState.player2.p2arr.includes("01")) {
        if (playerState.player2.p2arr.includes("02")) {
          playerState.winArray = ["00", "01", "02"];
          playerState.player2.status = "win";
        }
      }
      if (playerState.player2.p2arr.includes("10")) {
        if (playerState.player2.p2arr.includes("20")) {
          playerState.winArray = ["00", "10", "20"];
          playerState.player2.status = "win";
        }
      }
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("22")) {
          playerState.winArray = ["00", "11", "22"];
          playerState.player2.status = "win";
        }
      }
    }

    if (playerState.player2.p2arr.includes("01")) {
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("21")) {
          playerState.winArray = ["01", "11", "21"];
          playerState.player2.status = "win";
        }
      }
    }

    if (playerState.player2.p2arr.includes("02")) {
      if (playerState.player2.p2arr.includes("12")) {
        if (playerState.player2.p2arr.includes("22")) {
          playerState.winArray = ["02", "12", "22"];
          playerState.player2.status = "win";
        }
      }
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("20")) {
          playerState.winArray = ["02", "11", "20"];
          playerState.player2.status = "win";
        }
      }
    }

    if (playerState.player2.p2arr.includes("10")) {
      if (playerState.player2.p2arr.includes("11")) {
        if (playerState.player2.p2arr.includes("12")) {
          playerState.winArray = ["10", "11", "12"];
          playerState.player2.status = "win";
        }
      }
    }

    if (playerState.player2.p2arr.includes("20")) {
      if (playerState.player2.p2arr.includes("21")) {
        if (playerState.player2.p2arr.includes("22")) {
          playerState.winArray = ["20", "21", "22"];
          playerState.player2.status = "win";
        }
      }
    }

    if (
      playerState.player1.status === "win" ||
      playerState.player2.status === "win"
    ) {
      let tableNames = document.querySelectorAll(".td")
      let totalBlocks = 0;
      let tableArray = Array.from(tableNames)
      tableArray.forEach(item=>{
        let temp = item.className.substring(4, 6);
        if (playerState.winArray.includes(temp)) totalBlocks++;
        if(item.className.length<=2) item.classList.add("clicked")      
      })

      if (totalBlocks === 3) {
        playerState.winArray.forEach((element) => {
          document.getElementsByClassName(
            "_" + element
          )[0].style.backgroundColor = "red";
        });
      }

      console.log(playerState.winArray);
    }

    if (playerState.player2.status === "win") console.log("p2 won");
  });
}
