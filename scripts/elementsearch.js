async function search(searchBar, listId) {
  var filter, list, p, i, txtValue;
  filter = searchBar.value.toUpperCase();
  list = document.getElementById(listId);
  const parser = new DOMParser();

  for (i = 0; i < list.childElementCount; i++) {

    title = list.children[i].querySelector('.emphasizedFullLine');
    titleTxtValue = title.textContent || title.innerText;
    p = list.children[i].querySelector('.loreContent');
    txtValue = p.textContent || p.innerText;


    link = list.children[i].querySelector('.nodeco');
    var response = await fetch(link.getAttribute('href'));
    var htmlText = await response.text();

    var doc = parser.parseFromString(htmlText, 'text/html');

    var targetElements = doc.querySelectorAll('.loreText p');
    var allText = [];
    for (var j = 0; j < targetElements.length; j++) {
        allText.push(targetElements[j].textContent.toUpperCase());
    }

    if (allText.some(str => str.includes(filter)) || titleTxtValue.toUpperCase().indexOf(filter) > -1 ) {
      list.children[i].style.display = "";
    } else {
      list.children[i].style.display = "none";
    }
  }
}