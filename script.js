var inSearchBar = false;
var otherKey = ["q", "u", "i", "o", "f", "h", "j", "l", "z", "x", "n"];

function buttonPress(event, id) {
  event.preventDefault();
  if (inSearchBar == false) {
    document.querySelector("#" + id).style.backgroundColor = "#444";
    document.querySelector("#" + id).click();
  } else {
    document.querySelector("#searchbar").value += event.key;
  }
}

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "/":
      e.preventDefault();
      if (inSearchBar == false) {
        document.querySelector("#searchbar").focus();
        inSearchBar = true;
      }
      break;
    case "y":
      buttonPress(e, "youtube");
      break;
    case "g":
      buttonPress(e, "github");
      break;
    case "s":
      buttonPress(e, "spotify");
      break;
    case "t":
      buttonPress(e, "monkeytype");
      break;
    case "r":
      buttonPress(e, "reddit");
      break;
    case "p":
      buttonPress(e, "pinterest");
      break;
    case "k":
      buttonPress(e, "keep");
      break;
    case "v":
      buttonPress(e, "vimm");
      break;
    case "a":
      buttonPress(e, "openai");
      break;
    case "c":
      buttonPress(e, "chess");
      break;
    case "d":
      buttonPress(e, "roms");
      break;
    case "b":
      buttonPress(e, "raindrop");
      break;
    case "m":
      buttonPress(e, "mail");
      break;
    case "w":
      buttonPress(e, "whatsapp");
      break;
    case "e":
      buttonPress(e, "enka");
      break;
    case "0":
      buttonPress(e, "localhost");
      break;
    case "Enter":
      e.preventDefault();
      location.href =
        "https://duckduckgo.com/?q=" +
        document.querySelector("#searchbar").value;
      break;

    case "Escape":
      e.preventDefault();
      document.querySelector("#searchbar").blur();
      inSearchBar = false;
      break;

    default:
      if (otherKey.includes(e.key)) {
        e.preventDefault();
        document.querySelector("#searchbar").value += e.key;
        document.querySelector("#searchbar").focus();
        inSearchBar = true;
        break;
      }
      break;
  }
});
