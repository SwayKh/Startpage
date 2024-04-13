document.addEventListener("keypress", function (e) {
  console.log(e.key);
  switch (e.key) {
    case "/":
      e.preventDefault();
      document.querySelector("#searchbar").focus();
      break;
    case "y":
      e.preventDefault();
      // var oldString = document.querySelector("#youtube").textContent;
      // var newString =
      //   "<span style='color:yellow'> " +
      //   oldString.charAt(0) +
      //   "</span>" +
      //   "<span style='color:white'> " +
      //   oldString.slice(1) +
      //   "</span>";
      // document.querySelector("#youtube").innerHTML = newString;
      // var str = document.querySelector("#youtube").textContent;
      // str = str.replace(
      //   /^[a-zA-Z].*$/,
      //   '<span style="color:yellow">Y</span>$1',
      // );
      document.querySelector("#youtube").style.backgroundColor = "#444";
      document.querySelector("#youtube").click();
      break;
    case "g":
      e.preventDefault();
      document.querySelector("#github").click();
      break;
    case "s":
      e.preventDefault();
      document.querySelector("#spotify").click();
      break;
    case "t":
      e.preventDefault();
      document.querySelector("#monkeytype").click();
      break;
    case "r":
      e.preventDefault();
      document.querySelector("#reddit").click();
      break;
    case "p":
      e.preventDefault();
      document.querySelector("#pinterest").click();
      break;
    case "k":
      e.preventDefault();
      document.querySelector("#keep").click();
      break;
    case "v":
      e.preventDefault();
      document.querySelector("#vimm").click();
      break;
    case "a":
      e.preventDefault();
      document.querySelector("#openai").click();
      break;
    case "c":
      e.preventDefault();
      document.querySelector("#chess").click();
      break;
    case "d":
      e.preventDefault();
      document.querySelector("#roms").click();
      break;
    case "b":
      e.preventDefault();
      document.querySelector("#raindrop").click();
      break;
    case "m":
      e.preventDefault();
      document.querySelector("#mail").click();
      break;
    case "w":
      e.preventDefault();
      document.querySelector("#whatsapp").click();
      break;
    case "e":
      e.preventDefault();
      document.querySelector("#enka").click();
      break;
    case "0":
      e.preventDefault();
      document.querySelector("#localhost").click();
      break;
    default:
      break;
  }
});
