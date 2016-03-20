/**
 * Created by Alexander on 20/03/2016.
 */
(function(){
    var app = angular.module('home',[]);

    app.controller('StoreController',function(){
        this.products = gems;
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

