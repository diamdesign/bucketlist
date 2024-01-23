const paragraph = document.createElement("p");
const paragraphText = (paragraph.innerText = "Walk holy.");

const paragraph2 = document.createElement("p");
const paragraphText2 = (paragraph2.innerText = "Overcome.");

const paragraph3 = document.createElement("p");
const paragraphText3 = (paragraph3.innerText = "Save some sheeps.");

const paragraph4 = document.createElement("p");
const paragraphText4 = (paragraph4.innerText = "Do my part.");

const paragraph5 = document.createElement("p");
const paragraphText5 = (paragraph5.innerText = "Build the things I want.");

const arrayList = [paragraph, paragraph2, paragraph3, paragraph4, paragraph5];
console.log(paragraph);
console.log(paragraphText);

const list = document.querySelector(".list");
/*
list.appendChild(paragraph);
list.insertAdjacentElement("beforeend", paragraph2);
console.log(paragraph2);
console.log(paragraphText2);

console.log(list.innerHTML);
*/
const newDiv = "<div>Get to know God.</div>";
list.insertAdjacentHTML("beforeend", newDiv);

for (let i = 0; i < arrayList.length; i++) {
	list.insertAdjacentElement("beforeend", arrayList[i]);
}

console.log(list.children.length);

const h2 = document.querySelector(".owner");
h2.innerText = "Fredrik";

const sub = document.querySelector(".list-desc em");
sub.innerText = "Things to do in life.";

const paragraph6 = document.createElement("p");
const paragraphText6 = (paragraph6.innerText = "Living abundantly.");
const paragraph7 = document.createElement("p");
const paragraphText7 = (paragraph7.innerText = "God knows.");
console.log(paragraph7);

console.log(list);
list.replaceChild(paragraph6, list.children[0]);
list.replaceChild(paragraph7, list.children[3]);

list.lastElementChild.remove();
