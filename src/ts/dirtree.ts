function getTreeNode(num) {
  let _num = Number(num);
  let tree = `
  <li>
    <div class="tree_dirName">
      <input type="text">
      <span class="tree_addDir" data-child="${_num + 1}">+</span>
    </div>
  
    <ul class="tree_0${_num + 1}">
    </ul>
  </li>
  `;
  return tree;
}

document.getElementById("js-dirTree").addEventListener("click", function (e) {
  let target = e.target as HTMLElement;
  if(target.className == 'tree_addDir') {
    let child =  target.getAttribute('data-child');
    let childNode = getTreeNode(child);

    console.log(child);

    let childTree = document.getElementsByClassName('tree_0' + child)[0];
    childTree.insertAdjacentHTML('beforeend', childNode);
  }
});
