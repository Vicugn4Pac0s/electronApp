function getTreeNode(num) {
    var _num = Number(num);
    var tree = "\n  <li>\n    <div class=\"tree_dirName\">\n      <input type=\"text\">\n      <span class=\"tree_addDir\" data-child=\"" + (_num + 1) + "\">+</span>\n    </div>\n  \n    <ul class=\"tree_0" + (_num + 1) + "\">\n    </ul>\n  </li>\n  ";
    return tree;
}
document.getElementById("js-dirTree").addEventListener("click", function (e) {
    var target = e.target;
    if (target.className == 'tree_addDir') {
        var child = target.getAttribute('data-child');
        var childNode = getTreeNode(child);
        console.log(child);
        var childTree = document.getElementsByClassName('tree_0' + child)[0];
        childTree.insertAdjacentHTML('beforeend', childNode);
    }
});
