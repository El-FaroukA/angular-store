export interface Cart {
    items: CartItem[];
}

export interface CartItem {
    product: string,
    name: string,
    quantity: number,
    price: number,
    id: number
}