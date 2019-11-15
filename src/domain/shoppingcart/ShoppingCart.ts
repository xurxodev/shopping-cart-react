import ShoppingCartItem from "./ShoppingCartItem";

export default class ShoppingCart {
    items: readonly ShoppingCartItem[];
    readonly totalPrice: number;
    readonly totalItems: number;

    constructor(items: ShoppingCartItem[]) {
        this.items = items;
        this.totalPrice = this.calculateTotalPrice(items);
        this.totalItems = this.calculateTotalItems(items);
    }

    static createEmpty(): ShoppingCart {
        return new ShoppingCart([]);
    }

    addItem(item: ShoppingCartItem): ShoppingCart {
        const existedItem = this.items.find(i => i.id === item.id);

        if (existedItem) {
            const newItems = this.items.map((oldItem) => {
                if (oldItem.id === item.id) {
                    return { ...oldItem, quantity: oldItem.quantity + item.quantity };
                } else {
                    return oldItem;
                }
            });

            return new ShoppingCart(newItems);
        } else {
            const newItems = [...this.items, item];

            return new ShoppingCart(newItems);
        }
    }

    removeItem(item: ShoppingCartItem): ShoppingCart {
        const newItems = this.items.filter(i => i.id !== item.id);

        return new ShoppingCart(newItems);
    }

    editItem(item: ShoppingCartItem, quantity: number): ShoppingCart {
        const newItems = this.items.map((oldItem) => {
            if (oldItem.id === item.id) {
                return { ...oldItem, quantity: quantity };
            } else {
                return oldItem;
            }
        });

        return new ShoppingCart(newItems);
    }

    private calculateTotalPrice(items: ShoppingCartItem[]): number {
        return +items.reduce((accumulator, item) =>
            accumulator + (item.quantity * item.price), 0).toFixed(2);
    }

    private calculateTotalItems(items: ShoppingCartItem[]): number {
        return +items.reduce((accumulator, item) =>
            accumulator + item.quantity, 0);
    }
}

