/**
 * Created by Alexander on 20/03/2016.
 */
(function(){
    var app = angular.module('home',[]);

    app.controller('StoreController',function(){
        this.products = gems;
        this.addingEnabled = false;
        this.changeAddingEnabled = function(){
            this.addingEnabled  = !this.addingEnabled;
        }
        this.newproduct = null;
        this.addProduct = function(){
            this.products[this.products.length] = {
                name: this.newproduct.name,
                price: this.newproduct.price,
                description: this.newproduct.description,
                canPurchase: this.newproduct.canPurchase,
            };
        };
    });

    var gems = [
        {
            name:'Dodecahedron',
            price:2.95,
            description: '...',
            canPurchase: false,
        },
        {
            name:'pentagonal Gem',
            price:5.26,
            description: '...',
            canPurchase: true,
        }
    ];

})();

