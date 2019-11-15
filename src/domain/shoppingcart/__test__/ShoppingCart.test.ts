import ShoppingCart from "../ShoppingCart";
import ShoppingCartItem from "../ShoppingCartItem";

describe('shopping cart', () => {

  describe('constructor', () => {

    it('should return totalPrice 0 and empty items if shopping cart is created using constructor with empty items', () => {
      const shoppingCart = new ShoppingCart([]);

      expect(shoppingCart.items).toEqual([]);
      expect(shoppingCart.totalPrice).toEqual(0);
    });

    it('should return totalPrice equal to item price and item if shopping cart is created using constructor with 1 item', () => {
      const items = [givenAShoppingCartItem(1, 29.99)];
      const shoppingCart = new ShoppingCart(items);

      expect(shoppingCart.items).toEqual(items);
      expect(shoppingCart.totalPrice).toEqual(29.99);
    });

    it('should return expected totalPrice and items if shopping cart is created using constructor with 2 items with quantity = 1', () => {
      const items = [givenAShoppingCartItem(1, 29.99), givenAShoppingCartItem(1, 39.94)];
      const shoppingCart = new ShoppingCart(items);

      expect(shoppingCart.items).toEqual((items));
      expect(shoppingCart.totalPrice).toEqual(69.93);
    });

    it('should return expected totalPrice and items if shopping cart is created using constructor with 2 items witn quantity > 1', () => {
      const items = [givenAShoppingCartItem(2, 29.99), givenAShoppingCartItem(5, 39.94)];
      const shoppingCart = new ShoppingCart(items);

      expect(shoppingCart.items).toEqual(items);
      expect(shoppingCart.totalPrice).toEqual(259.68);
    });

  });

  describe('createEmpty', () => {
    it('should return totalPrice 0 and empty items if shopping cart is created using create empty', () => {
      const shoppingCart = ShoppingCart.createEmpty();

      expect(shoppingCart.items).toEqual([]);
      expect(shoppingCart.totalPrice).toEqual(0);
    });
  });

  describe('addItem', () => {
    it('should return expected totalPrice and items if item with quantity 1 is added', () => {
      const items = [givenAShoppingCartItem(1, 29.99)];
      const shoppingCart = new ShoppingCart(items);
      const newShoppingCart = shoppingCart.addItem(givenAShoppingCartItem(39.94, 1));

      expect(newShoppingCart.items).toHaveLength(2);
      expect(newShoppingCart.totalPrice).toEqual(69.93);
    });


    it('should return expected totalPrice and items if item with quantity > 1 is added', () => {
      const items = [givenAShoppingCartItem(1, 29.99)];
      const shoppingCart = new ShoppingCart(items);
      const newShoppingCart = shoppingCart.addItem(givenAShoppingCartItem(3, 39.94));

      expect(newShoppingCart.items).toHaveLength(2);
      expect(newShoppingCart.totalPrice).toEqual(149.81);
    });

    it('should increment quantity to existed item and totalPrice if add a existed item again', () => {
      const items = [givenAShoppingCartItem(1, 29.99)];
      const shoppingCart = new ShoppingCart(items);
      const newShoppingCart = shoppingCart.addItem(items[0]);

      expect(newShoppingCart.items).toHaveLength(1);
      expect(newShoppingCart.totalPrice).toEqual(59.98);
    });
  });

  describe('removeItem', () => {
    it('should return totalPrice 0 and empty items if remove unique item', () => {
      const items = [givenAShoppingCartItem(1, 29.99)];
      const shoppingCart = new ShoppingCart(items);
      const newShoppingCart = shoppingCart.removeItem(items[0]);


      expect(newShoppingCart.items).toEqual([]);
      expect(newShoppingCart.totalPrice).toEqual(0);
    });


    it('should return expected totalPrice and items if remove item', () => {
      const items = [givenAShoppingCartItem(1, 29.99), givenAShoppingCartItem(5, 39.94)];
      const shoppingCart = new ShoppingCart(items);
      const newShoppingCart = shoppingCart.removeItem(items[1]);

      expect(newShoppingCart.items).toHaveLength(1);
      expect(newShoppingCart.totalPrice).toEqual(29.99);
    });
  });

  describe('editItem', () => {
    it('should return expected totalPrice and items if edit quantity to unique item', () => {
      const items = [givenAShoppingCartItem(1, 29.99)];
      const shoppingCart = new ShoppingCart(items);

      const newShoppingCart = shoppingCart.editItem(items[0],2);

      expect(newShoppingCart.items).toHaveLength(1)
      expect(newShoppingCart.totalPrice).toEqual(59.98);
    });


    it('should return expected totalPrice and items if edit quantity to a item', () => {
      const items = [givenAShoppingCartItem(1, 29.99), givenAShoppingCartItem(5, 39.94)];
      const shoppingCart = new ShoppingCart(items);

      const newShoppingCart = shoppingCart.editItem(items[0],2);

      expect(newShoppingCart.items).toHaveLength(2)
      expect(newShoppingCart.totalPrice).toEqual(259.68);
    });
  });
});

function givenAShoppingCartItem(quantity: number = 1, price: number = 0): ShoppingCartItem {
  return {
    id: Math.random().toString(36).substr(2, 9),
    image: "Fake image",
    title: "Fake title",
    price: price,
    quantity: quantity
  }
}
