(function() {
  var app = angular.module('coffeeStore', []);

  app.controller('StoreController', function(){
    this.products = coffees;
  });

  var coffees = [
  	{id: 1, title: "Filter Coffee", price: 2.90, count: 12},
  	{id: 2, title: "Capuccino", price: 2.40, count: 13},
  	{id: 3, title: "Grande Capuccino", price: 3.20, count: 11},
  	{id: 4, title: "Espresso", price: 2.30, count: 10},
  	{id: 5, title: "Affogato", price: 2.90, count: 40},
  	{id: 6, title: "Caff\u00e8 Americano", price: 2.60, count: 18},
  	{id: 7, title: "Caff\u00e8 latte", price: 2.75, count: 123},
  	{id: 8, title: "Caff\u00e8 Marocchino", price: 2.60, count: 50},
  	{id: 9, title: "Caf\u00e9 de olla", price: 3.10, count: 156},
  	{id: 10, title: "Caf\u00e9 Cubano", price: 1.50, count: 186},
  	{id: 11, title: "Espresso Romano", price: 1.90, count: 0},
  	{id: 12, title: "Greek frapp\u00e9 coffee", price: 4.10, count: 1},
  	{id: 13, title: "Irish Coffee", price: 4.95, count: 100},
  	{id: 14, title: "Iced Coffee", price: 1.40, count: 1},
  	{id: 15, title: "Flat white", price: 2.30, count: 189},
  	];
})();
