const fs = require('fs');
const { BrowserWindow, dialog } = require('electron').remote;

//html内の要素取得とリスナーの設定
document.querySelector("#openFile").addEventListener('click', () => {
    openFile();
})

const preview = document.getElementById('preview');

//openFileボタンが押されたとき（ファイル名取得まで）
function openFile() {
    const win = BrowserWindow.getFocusedWindow();
    dialog.showOpenDialog(
        win,
        {
            properties: ['openDirectory'],
        },
        (fileNames) => {
            if (fileNames) {
                // alert(fileNames[0]);
            }
        }
    ).then(function(result) {
        var filePaths = result.filePaths;
        if (filePaths) {
            var target = document.getElementById('js-dirPath');
            
            if(filePaths[0]) {
                target.innerHTML = filePaths[0];
                target.dataset.path = filePaths[0];
            } else {
                target.innerHTML = 'ここにフォルダ名';
                target.dataset.path = '';
            }
        }
    });
}

