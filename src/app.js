import  faker from 'faker' ;
import { add } from './list';

function fillShoppingCart() {
    for(let i=0 ;i<21 ;i++){
        const product ={
            name:faker.commerce.productName(),
            image:faker.random.image(),
            material:faker.commerce.productMaterial(),
            price:parseFloat(faker.commerce.price()),
            adjective:faker.commerce.productAdjective()
        };
        add(product);
    }

}

fillShoppingCart();