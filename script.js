var tweetArea = document.getElementById("tweet");
var tweetBtn = document.getElementById("tweet-btn");
var closeBtn = document.getElementById("close-btn");

// Display Error Tool Tip
tweetArea.addEventListener("keydown", () => {
  var tweetArea = document.getElementById("tweet");
  var toolTip = document.getElementById("tool-tip");
  var errorBox = document.getElementById("error");
  errorBox.innerText = "";
  var tweetText = tweetArea.value;
  var actualChar = tweetText.replace(/ /g, "");
  console.log(actualChar.length);
  console.log(typeof tweetText);
  if (actualChar.length >= 279) {
    toolTip.style.display = "block";
  } else if (actualChar.length < 279) {
    toolTip.style.display = "none";
  }
});

// Display Tweet in lightbox
tweetBtn.addEventListener("click", () => {
  var lightBox = document.querySelector(".light-box");
  var tweetArea = document.getElementById("tweet");
  var tweetContainerSpan = document.getElementById("char-count");
  var tweetContainerPara = document.getElementById("tweet-text");
  var toolTip = document.getElementById("tool-tip");
  toolTip.style.display = "none";
  var tweetText = tweetArea.value;
  var actualChar = tweetText.replace(/ /g, "");
  var errorBox = document.getElementById("error");
  if (tweetText == "") {
    var errorMsg = "You can't post a tweet empty. Please Write SomeThing.";
    errorBox.innerText = errorMsg;
  } else if (actualChar.length > 279) {
    errorMsg =
      "Your Tweet has more than 280 characters.Please write a tweet of less than 280 characters. ";
    errorBox.innerText = errorMsg;
  } else {
    lightBox.style.display = "grid";
    lightBox.style.gridTemplateRows = "10vh 90vh";

    tweetContainerSpan.innerText =
      "You Wrote" + " " + actualChar.length + " " + "Characters.";
    tweetContainerPara.innerText = tweetText;
    tweetArea.value = "";
  }
});

// Close Btn
closeBtn.addEventListener("click", () => {
  var lightBox = document.querySelector(".light-box");
  lightBox.style.display = "none";
});
