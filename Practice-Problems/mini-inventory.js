// Build a simple inventory management system that is composed of an item
// creator, an items manager, and a reports manager.

/*

Item Creator:
  - Makes sure all necessary information is present and valid

  Required information for an item:
    - SKU code: Unique identifier for a product. Consists of first 3 letters
      of the item and first 2 letters of the category. If name consists of two
      words and first word is two letters, the next letter is taken from next
      word.
    - Item name: Name of item. Must consist of a minimum 5 characters, not
      counting spaces.
    - Category: Category item belongs to. Must consist of a minimun 5 chars
      and be only one word.
    - Quantity: Quantity in stock of an item. Must not be blank. Assume valid
      number provided.

Item Manager:
  - Responsible for creating items
  - Updating information about items
  - Deleting items
  - Querying information about items

  Methods that the items manager can perform:
    - create: Method creates a new item. Returns false if creation not
      successful.
    - update: Method accepts a SKU code and an object as arguments and updates
      any of the information on an item. Assume valid values provided.
    - delete: Method accepts a SKU code and deletes item from the list. Assume
      valid SKU provided.
    - items: Property contains a list of all items.
    - inStock: Method lists all items that have a quantity greater than 0.
    - itemsInCategory: Method lists all the items for given category.

Report Manager:
  - Generates reports for a specific item or ALL items
  - Reports for specific items are generated from report objects created from
    the report manager.
  - Responsible for reports for all items

  Methods on the reports managers:
    - init: Method accepts ItemManager object as argument and assigns it to
      the items property.
    - createReporter: Method accepts a SKU code as argument and returns an
      object:
        Returned object has one method, itemInfo. This logs to console all
        properties of an object as 'key:value' pairs (one per line). No other
        properties or methods are on returned object.
    - reportInStock: Logs to concole the item names of all items that are in
      stock as comma separated values.

*/

let ItemCreator = (function () {
  function makeSKU(item, category) {
    let firstThree = item.split(' ').join('').slice(0, 3).toUpperCase();
    let lastTwo = category.slice(0, 2).toUpperCase();

    return firstThree + lastTwo;
  }

  function isItemValid(item, category) {
    let itemCheck = item.split(' ').join('').length >= 5;
    let categoryCheck = category.length >= 5 && !category.includes(' ');

    return itemCheck && categoryCheck;
  }

  return function (item, category, quantity) {
    if (isItemValid(item, category) && quantity !== undefined) {
      this.skuCode = makeSKU(item, category);
      this.itemName = item;
      this.category = category;
      this.quantity = quantity;
      return this;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],

  create: function (item, category, quantity) {
    let newItem = new ItemCreator(item, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(newItem);
      return undefined;
    }
  },

  update: function (skuCode, obj) {
    let selectedObj = this.getObjWithSKU(skuCode);
    let key = Object.keys(obj)[0];

    selectedObj[key] = obj[key];
  },

  delete: function (skuCode) {
    let objToRemove = this.getObjWithSKU(skuCode);
    let indexOfObj = this.items.indexOf(objToRemove);
    this.items.splice(indexOfObj, 1);
  },

  inStock: function () {
    return this.items.filter((item) => {
      return item.quantity > 0;
    });
  },

  itemsInCategory: function (itemCategory) {
    return this.items.filter((item) => {
      return item.category === itemCategory;
    });
  },

  // makeSKU: function (item, category) {
  //   let firstThree = item.split(' ').join('').slice(0, 3).toUpperCase();
  //   let lastTwo = category.slice(0, 2).toUpperCase();

  //   return firstThree + lastTwo;
  // },

  // isItemValid: function (item, category) {
  //   let itemCheck = item.split(' ').join('').length >= 5;
  //   let categoryCheck = category.length >= 5 && !category.includes(' ');

  //   return itemCheck && categoryCheck;
  // },

  getObjWithSKU: function (skuCode) {
    return this.items.filter((obj) => obj.skuCode === skuCode)[0];
  },
};

let ReportManager = {
  items: null,

  init: function (itemManagerObj) {
    this.items = itemManagerObj;
  },

  createReporter: function (skuCode) {
    let objWithSKU = this.items.getObjWithSKU(skuCode);

    return {
      itemInfo: function () {
        let keys = Object.keys(objWithSKU);

        keys.forEach((key) => {
          console.log(`${key}: ${objWithSKU[key]}`);
        });
      },
    };
  },

  reportInStock: function () {
    let itemsInStock = this.items.inStock().map((item) => {
      return item.itemName;
    });

    console.log(itemsInStock.join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0); // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5); // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3); // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3); // valid item

// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);

// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });

// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');

// returns list the remaining 3 valid items (soccer ball is removed from the
// list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');

kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });

kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
