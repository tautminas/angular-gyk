enum Category {
  Food = "Food",
  Electronics = "Electronics",
  Clothing = "Clothing",
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category | Category[];
  discount?: number | string;
}

class StoreSystem {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProductsByCategory(category: Category): Product[] {
    return this.products.filter((product) =>
      Array.isArray(product.category)
        ? product.category.includes(category)
        : product.category === category
    );
  }

  removeProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  showProducts(): void {
    console.log(this.products);
  }

  updateProduct(id: number, updatedProduct: Partial<Product>): void {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
    }
  }

  searchByCriteria<T>(criteria: (product: Product) => boolean): T[] {
    return this.products.filter(criteria) as T[];
  }
}

const store = new StoreSystem();

// Adding products
store.addProduct({
  id: 1,
  name: "Apple",
  price: 1.2,
  category: Category.Food,
});
store.addProduct({
  id: 2,
  name: "Laptop",
  price: 1000,
  category: Category.Electronics,
  discount: "10%",
});
store.addProduct({
  id: 3,
  name: "T-Shirt",
  price: 20,
  category: Category.Clothing,
});
store.addProduct({
  id: 4,
  name: "Smartphone",
  price: 800,
  category: [Category.Electronics, Category.Clothing],
  discount: 5,
});

console.log("All products:");
store.showProducts();

console.log("Electronics products:");
console.log(store.getProductsByCategory(Category.Electronics));

store.removeProduct(3);

console.log("Products after removing T-Shirt:");
store.showProducts();

store.updateProduct(2, { price: 950, discount: "15%" });

console.log("Products after updating the Laptop:");
store.showProducts();

const expensiveProducts = store.searchByCriteria<Product>(
  (product) => product.price > 500
);
console.log("Expensive products:");
console.log(expensiveProducts);
