import { add as addToCart } from './cart';

export function add(product){
    /**
     * Add a product item to the shopping list
     */
    const list =document.getElementById('shopping-list');

    // creat card element
    const card=document.createElement('div');
    card.className ='list-item card m-3 text-center';

    // creat card image 
    const cardImage = document.createElement('div');
    cardImage.className = 'view overlay';
    cardImage.innerHTML = `
    <img class="card-img-top" src="${product.image}" alt="${product.name}">
    <div class="mask rgba-white-slight"></div>
    `;

    //creat card body

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // creat card title
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = product.name;

    // creat card text

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = `
    <h5 class="pink-text"><i class="fas fa-utensils mr-2"></i>${product.material}</h5>
    <span class="badge badge-secondary">${product.adjective}</span>
    <span class="badge badge-primary">${product.price}$</span>
    `;

    // creat card button
    const cardButton = document.createElement('button');
    cardButton.className = 'btn btn-unique btn-block btn-sm waves-effect waves-light';
    cardButton.innerHTML = '<i class="fas fa-plus mr-2"></i> Add to cart';
    cardButton.addEventListener('click' , () => {
        addToCart(product);
    });


    // add card's title , text and button elements to card's body element
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    // add card's image and body elements to card element
    card.appendChild(cardImage);
    card.appendChild(cardBody);

    list.appendChild(card);

}