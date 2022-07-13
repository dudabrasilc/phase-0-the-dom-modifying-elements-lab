// Write your code 

// const div = document.createElement('div')
// document.body.append(div)
// const ul = document.createElement('ul')
// document.body.append(ul)

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
//   }

// div.append(ul)

// const element = document.getElementById("main")
// element.style.height = "300px"
// element.style.backgroundColor = "#27647B"
// element.textContent = "You've changed what's on the screen!";

// element.style.fontSize = "24px"
// element.style.marginLeft = "30px"
// element.style.lineHeight = 2

// element.className = "pet-listing dog";

// element.classList.remove("dog")
// element.classList.add("cat", "sale")


// const secondChild = ul.querySelector()

const m = document.querySelector("main");
m.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "Duda is the champion";
document.body.append(newHeader);