const fs = require("fs");
const { BrowserWindow, dialog } = require("electron").remote;

//html内の要素取得とリスナーの設定
document.querySelector("#openFile").addEventListener("click", () => {
  openDirectory();
});

const preview = document.getElementById("preview");

//Directoryボタンが押されたとき（ファイル名取得まで）
function openDirectory() {
  const win = BrowserWindow.getFocusedWindow();
  dialog
    .showOpenDialog(
      win,
      {
        properties: ["openDirectory"],
      },
      (fileNames) => {
        if (fileNames) {
          // alert(fileNames[0]);
        }
      }
    )
    .then(function (result) {
      var filePaths = result.filePaths;
      if (filePaths) {
        setDirectory(filePaths[0]);
      }
    });
}

function setDirectory(filePath) {
  var target = document.getElementById("js-dirPath");
  if (filePath) {
    target.innerHTML = filePath;
    target.dataset.path = filePath;
  } else {
    target.innerHTML = "ここにフォルダ名";
    target.dataset.path = "";
  }
}
