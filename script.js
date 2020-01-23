let init = () => {
    const listItems = document.getElementsByTagName("li");
    const overlay = document.getElementById('overlay')

    //Eventlisteners to list items 
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("mouseover", callback1(listItems[i], listItems[i - 1], listItems[i + 1]));
        listItems[i].addEventListener("mouseout", callback2(listItems[i], listItems[i - 1], listItems[i + 1]));
        listItems[i].addEventListener("click", () => {
            listItems[i].setAttribute("class", "modal");
            listItems[i].innerHTML = listItems[i].innerText;
            openModal(listItems[i])
        });
    };

}

//Callback function to slide right when mouseover 
function callback1(item, itemUp, itemDown) {
    return function() {
        item.style.marginLeft = "40px";
        if (typeof(itemUp) != "undefined") {
            itemUp.style.marginLeft = "20px";
        }
        if (typeof(itemDown) != "undefined") {
            itemDown.style.marginLeft = "20px";
        }
    }
}

//Callback function to return to previous state
function callback2(item, itemUp, itemDown) {
    return function() {
        item.style.marginLeft = "0px";
        if (typeof(itemUp) != "undefined") {
            itemUp.style.marginLeft = "0px";
        }
        if (typeof(itemDown) != "undefined") {
            itemDown.style.marginLeft = "0px";
        }
    }
}
//Function to open PopUp
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
//Function to close PopUp
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active', 'modal')
    overlay.classList.remove('active')
}
//Eventlistener to close the overlay when mouse is clicked outside the overlay
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})


//Button functions to add and remove a list item
//Add new item
let addItem = () => {
    var ol = document.getElementById("dynamic-list");
    var newItem1 = document.getElementById("newItem");
    var li = document.createElement("li");
    li.setAttribute("id", newItem1.value);
    li.appendChild(document.createTextNode(newItem1.value));
    ol.appendChild(li);

    let arrayOl = [document.getElementsByTagName("li")];

    let newItem = arrayOl[0][arrayOl[0].length - 1];
    let newItemUp = arrayOl[0][arrayOl[0].length - 2];
    let newItemDown = arrayOl[0][arrayOl[0].length];

    newItem.addEventListener("mouseover", callback1(newItem, newItemUp, newItemDown));
    newItem.addEventListener("mouseout", callback2(newItem, newItemUp, newItemDown));
    newItem.addEventListener("click", () => {
        newItem.setAttribute("class", "modal");
        newItem.innerHTML = newItem.innerText;
        openModal(newItem)
    });
}

//Remove the item
let removeItem = () => {
    let ol = document.getElementById("dynamic-list");
    ol.removeChild(ol.lastChild);
}

//Initializing the code
init();