const paragraph = document.createElement("p");
const paragraphText = (paragraph.innerText = "Something to do on bucketlist.");

const paragraph2 = document.createElement("p");
const paragraphText2 = (paragraph2.innerText = "Something to do on bucketlist 2.");

const paragraph3 = document.createElement("p");
const paragraphText3 = (paragraph3.innerText = "Something to do on bucketlist 3.");

const paragraph4 = document.createElement("p");
const paragraphText4 = (paragraph4.innerText = "Something to do on bucketlist 4.");

const paragraph5 = document.createElement("p");
const paragraphText5 = (paragraph5.innerText = "Something to do on bucketlist 5.");

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
const newDiv = "<div>This is a div</div>";
list.insertAdjacentHTML("beforeend", newDiv);

for (let i = 0; i < arrayList.length; i++) {
	list.insertAdjacentElement("beforeend", arrayList[i]);
}
