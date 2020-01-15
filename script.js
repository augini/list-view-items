let init = () => {
    const listItems = document.getElementsByTagName("li");
    const overlay = document.getElementById('overlay')


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


//Button functions to add and remove a list item
//Add new item
let addItem = () => {
        var ol = document.getElementById("dynamic-list");

        var newItem = document.getElementById("newItem");
        var li = document.createElement("li");
        li.setAttribute("id", newItem.value);
        li.appendChild(document.createTextNode(newItem.value));
        ol.appendChild(li);
        init();
    }
    //Remove the item
let removeItem = () => {
    let ol = document.getElementById("dynamic-list");
    ol.removeChild(ol.lastChild);
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

//Initializing the code
init();