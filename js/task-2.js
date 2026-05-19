class Storage {
  // Приватна властивість оголошується з символом #
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Повертає масив поточних товарів
  getItems() {
    return this.#items;
  }

  // Додає новий товар до масиву
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Видаляє товар з масиву, якщо він там є
  removeItem(itemToRemove) {
    const itemIndex = this.#items.indexOf(itemToRemove);
    
    if (itemIndex !== -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

// Код для перевірки
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]