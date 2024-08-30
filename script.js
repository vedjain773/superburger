const cart_items = document.querySelector(".cart-items");
const cart_cont = document.querySelector(".cart-cont")
const targetButtons = document.querySelectorAll(".atc");
const noItems = document.querySelector(".no");
const cart = document.querySelector("#cart");
const litems = document.getElementsByClassName("lItem");

/**
 * 
 * @param {Event} event 
 */

cart.addEventListener("click", () => {
    if (cart_cont.style.display == "none") {
        cart_cont.style.display = "block";
    } else {
        cart_cont.style.display = "none";
    }

})

let items = [];

const addItem = (event) => {
    noItems.style.display = "none";

    const name = event.currentTarget.parentElement.children[1].textContent;

    if (items.includes(name)) {
        for (i = 0; i < litems.length; i++) {
            const toCheck = litems[i].firstChild.firstChild.textContent;
            if (toCheck == name) {
                let currentEleText = (litems[i].firstChild.lastChild.textContent);
                const currentNo = parseInt(currentEleText);
                litems[i].firstChild.lastChild.textContent = currentNo + 1;
            }
        }
    } else {
        items.push(name);
        const cont = document.createElement("div");

        const name_node = document.createTextNode(name);
        const name_ele = document.createElement("div");
        name_ele.appendChild(name_node);
        cont.appendChild(name_ele)

        const quantity_node = document.createTextNode("1");
        const quantity_ele = document.createElement("span");
        quantity_ele.appendChild(quantity_node);
        cont.appendChild(quantity_ele);

        const del_node = document.createTextNode("Del");
        const del_ele = document.createElement("button");
        del_ele.appendChild(del_node);

        del_ele.addEventListener("click", (ev) => {
            const target_item = ev.currentTarget.previousSibling.children[0].textContent;

            items = items.filter((item) => {
                return item != target_item;
            })

            ev.currentTarget.parentElement.remove();

            if (cart_items.children.length == 1) {
                noItems.style.display = "block";
            }
        })

        const lItem = document.createElement("div");
        lItem.appendChild(cont);
        lItem.appendChild(del_ele);

        lItem.className = "lItem";

        cart_items.appendChild(lItem);

    }
}

for (i = 0; i < targetButtons.length; i++) {
    targetButtons[i].addEventListener("click", addItem)
}