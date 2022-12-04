function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zuZiCEs0zl":
        Script1();
        break;
      case "6Qydssltebm":
        Script2();
        break;
      case "5hm7renNYWI":
        Script3();
        break;
      case "6dJ6x8peWHW":
        Script4();
        break;
      case "6gqaCxPLJoG":
        Script5();
        break;
      case "5zJdWa7DT13":
        Script6();
        break;
      case "6n8D0UEEmKI":
        Script7();
        break;
      case "6Zmg58uVVNP":
        Script8();
        break;
      case "6N6F2QY5Dd4":
        Script9();
        break;
      case "6VLfSOpwgMS":
        Script10();
        break;
      case "669cYS0UL7g":
        Script11();
        break;
      case "5lPLpmD0jgd":
        Script12();
        break;
      case "6BZ9tJbSIhV":
        Script13();
        break;
      case "6hJYxyCALhv":
        Script14();
        break;
      case "6m8Kq4z7IVH":
        Script15();
        break;
      case "6KAWp9iEbye":
        Script16();
        break;
      case "6g9ieueD2vq":
        Script17();
        break;
      case "6iXd3SAuJLz":
        Script18();
        break;
      case "6irHvbB6bTl":
        Script19();
        break;
      case "5oWHk54tbkh":
        Script20();
        break;
      case "5hwKKWI7iEm":
        Script21();
        break;
      case "6dNwIFqOEUt":
        Script22();
        break;
      case "5jm3bDdjudn":
        Script23();
        break;
      case "5bnp5ZuAsfP":
        Script24();
        break;
      case "5jBc2ToPMHW":
        Script25();
        break;
      case "5v1zOiUlrUR":
        Script26();
        break;
  }
}

function Script1()
{
         var FilePath =location.href.split("Content");
       var scripts = FilePath [0] +"Scripts/script.js";
var script = document.createElement('script');
script.src = scripts;
script.type='text/javascript';
script.crossorigin='anonymous';
var done = false;
script.onload = script.onreadystatechange = function() {
if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
done = true;
}
};
document.getElementsByTagName("head")[0].appendChild(script);

}

function Script2()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script3()
{
         var FilePath =location.href.split("Content");
       var scripts = FilePath [0] +"Scripts/script.js";
var script = document.createElement('script');
script.src = scripts;
script.type='text/javascript';
script.crossorigin='anonymous';
var done = false;
script.onload = script.onreadystatechange = function() {
if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
done = true;
}
};
document.getElementsByTagName("head")[0].appendChild(script);

}

function Script4()
{
  localStorage.setItem("currentSlide", 0);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let player= GetPlayer();

player.SetVar("previousScore", parseInt(params.previousScore));

}

function Script5()
{
  plyPause(false);
}

function Script6()
{
  plyPause(true);
}

function Script7()
{
  plyPause(false);
}

function Script8()
{
  plyPause(true);
}

function Script9()
{
  plyPause(false);
}

function Script10()
{
  plyPause(true);
}

function Script11()
{
  plyPause(false);
}

function Script12()
{
  plyPause(true);
}

function Script13()
{
  plyPause(false);
}

function Script14()
{
  plyPause(true);
}

function Script15()
{
  plyPause(false);
}

function Script16()
{
  plyPause(true);
}

function Script17()
{
  plyPause(false);
}

function Script18()
{
  plyPause(true);
}

function Script19()
{
  var player = GetPlayer();
setScore(player.GetVar("score"));

}

function Script20()
{
  closeScreen();
}

function Script21()
{
  plyPause(false);
}

function Script22()
{
  plyPause(true);
}

function Script23()
{
  plyPause(false);
}

function Script24()
{
  plyPause(true);
}

function Script25()
{
  plyPause(false);
}

function Script26()
{
  plyPause(true);
}

