import ShoppingCartItem from "./ShoppingCartItem";

export default class ShoppingCart {
    items: readonly ShoppingCartItem[];
    readonly totalPrice: number;

    constructor(items: ShoppingCartItem[]) {
        this.items = items;
        this.totalPrice = this.calculatePrice(items);
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

    editItem(item: ShoppingCartItem): ShoppingCart {
        const newItems = this.items.map((oldItem) => {
            if (oldItem.id === item.id) {
                return { ...oldItem, quantity: item.quantity };
            } else {
                return oldItem;
            }
        });

        return new ShoppingCart(newItems);
    }

    private calculatePrice(items: ShoppingCartItem[]): number {
        return +items.reduce((accumulator, item) =>
            accumulator + (item.quantity * item.price), 0).toFixed(2);
    }
}

