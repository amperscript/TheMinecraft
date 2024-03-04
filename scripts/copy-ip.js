"use strict";
(function () {
  var copyButton = document.getElementById("copyButton");

  copyButton.addEventListener("click", function () {
    var tempInput = document.createElement("input");

    tempInput.value = "mc.theminecraft.org";
    document.body.appendChild(tempInput);
    tempInput.select();

    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Ip сервера успешно скопирован: mc.theminecraft.org");
  });
})();
