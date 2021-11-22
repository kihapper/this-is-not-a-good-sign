
  // Bowser to detect browser——————————————
function returnBrowserName(){

  bowser_result = bowser.getParser(window.navigator.userAgent);
  console.log(bowser_result);

  return bowser_result
}

function launchIOSQuickLookAR(usdzSrc) {
  const anchor = document.createElement("a");
  anchor.setAttribute("rel", "ar");
  anchor.appendChild(document.createElement("img"));
  anchor.setAttribute("href", usdzSrc);
  anchor.click();
}

function detectiOSARQuickLook() {
  const testAnchor = document.createElement("a");
  console.log(testAnchor);
  return testAnchor.relList.supports("ar");
}


function hideAppleAR(){

  let appleARs = document.getElementsByClassName("AppleAR");
  for (let i = 0; i < appleARs.length; i++) {
    appleARs[i].style.opacity = 0.3;
    appleARs[i].style.textDecoration = "line-through";
    //appleARs[i].style.pointerEvents = "none";
    //appleARs[i].style.display = "none";
  }

}
