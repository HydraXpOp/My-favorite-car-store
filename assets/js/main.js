
let products = [
    { id: 1, name: "bmw M4", stock: 3, price: 114100, images: "assets/img/m4.jpg" },
    { id: 2, name: "bmw i8", stock: 0, price: 79990, images: "assets/img/i8.jpg" },
    { id: 3, name: "Lambo Revuelto", stock: 1, price: 990000, images: "assets/img/lambomansory.webp" },
];

const grid = document.getElementById("car-grid");
const hint = document.querySelector(".empty-hint");

function createCard(product) {
    const soldOut = product.stock === 0;

    return `
        <div class="col">
            <article class="car-card d-flex flex-column ${soldOut ? "opacity-50" : ""}">
                <div class="ratio ratio-16x9">
                    <img src="${product.images}"
                         style="object-fit: cover;" loading="lazy">
                </div>

                <div class="p-3 d-flex flex-column gap-2 flex-grow-1">
                    <h3 class="h5 mb-0">${product.name}</h3>
                    <span class="car-price fs-5">${product.price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
    })}</span>








                    <small class="text-secondary">
                        ${soldOut ? "ناموجود" : `موجودی: ${product.stock} دستگاه`}
                    </small>
                    <button class="btn btn-info btn-sm mt-auto" ${soldOut ? "disabled" : ""}>
                        ${soldOut ? "ناموجود" : "مشاهده جزئیات"}
                    </button>
                    <button onclick="remove(event, ${product.id})" class=" btn text-danger btn-sm mt-auto">
                    حذف محصول
                    </button>
                </div>
            </article>
        </div>
    `;
};


grid.innerHTML = products.map(createCard).join("");

if (hint) hint.remove();



document.querySelectorAll("#list li")[0].innerText
function search(ev) {
    let inputText = ev.currentTarget.value.toLowerCase()
    let listitems = document.querySelectorAll("#list li")
    listitems.forEach(element => {
        let itemtext = element.innerText.toLowerCase()
        if (itemtext.includes(inputText)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }

    });
}

document.a
// add product
let nameproduct = document.querySelector('#nameproduct');
let priceproduct = document.querySelector('#priceproduct')
let stockproduct = document.querySelector('#stock')
let addproduct = document.querySelector('#submit')
let productlist = document.querySelector('#car-grid')

let nextid = 4


addproduct.addEventListener("click", function () {
    const name = nameproduct.value.trim();
    const price = priceproduct.value.trim();
    const stocks = stockproduct.value.trim();


    nameproduct.classList.remove("danger");
    priceproduct.classList.remove("danger");
    stockproduct.classList.remove("danger");




    if (name === "") {
        nameproduct.classList.add("danger")
    };
    if (price === "") {
        priceproduct.classList.add("danger")
    };
    if (stocks === "") {
        stockproduct.classList.add("danger")
    };
    if (name === "" || price === "" || stocks === "") {
        return;
    };

    const Nprice = Number(price);
    const Nstocks = Number(stocks);


    const newproduct = {
        id: nextid,
        name: name,
        price: Nprice,
        stock: Nstocks,
        images: "assets/img/maclaren].jpg"
    };
    products.push(newproduct);
    nextid++;
    productlist.innerHTML = products.map(createCard)
    nameproduct.value = ""
    priceproduct.value = ""
    stockproduct.value = ""
});
function remove(ev, idProduct) {
    debugger
    ev.currentTarget.parentElement.parentElement.parentElement.remove()
    products = products.filter(item => item.id != idProduct)
}


