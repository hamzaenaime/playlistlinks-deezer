//<a itemprop="url" class="datagrid-label datagrid-label-main title"
// tabindex="0" role="button" href="/en/track/117584456">
// <span itemprop="name">Poles Apart (2011 Remastered Version)
// </span>
// </a>

const linkSelect = document.querySelectorAll(
  ".datagrid-label.datagrid-label-main.title"
);
let links = [];
linkSelect.forEach(link => {
  let linkURL = link.href;
  links.push(linkURL);
});
console.log(links.join("\n"));
console.log("Playlist Count: " + links.length);
