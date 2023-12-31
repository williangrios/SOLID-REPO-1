type CartItem = {
  name: string,
  price: number
}
type OrderStatus = 'open' | 'closed'
export class ShoppingCartLegacy{
  private readonly _items: CartItem[]=[]
  private _orderStatus: OrderStatus = 'open'

  addItem(item: CartItem): void{
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }

  get orderStatus(): OrderStatus{
    return this._orderStatus
  }

  total(): number{
    return Number(this._items.reduce((total, item ) => total + item.price, 0).toFixed(2));
  }

  checkout(): void{
    if(this.isEmpty()){
      console.log('Your shoppingCart is empty')
    }
    this._orderStatus = 'closed'
    this.sendMessage( `Your order was received. Total ${this.total()}`)
    this.saveOrder()
    this.clear();
  }

  isEmpty(): boolean{
    return this._items.length === 0
  }

  sendMessage(message: string): void{
    console.log('Sent message', message);
  }

  saveOrder(): void{
    console.log('Order saved');
  }

  clear(): void{
    this._items.length = 0;
  }

}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({name: 'T-shirt', price: 50.34})
shoppingCart.addItem({name: 'Short', price: 55.22})
shoppingCart.addItem({name: 'Hat', price: 40})
console.log(shoppingCart.orderStatus);


console.log(shoppingCart.items)
console.log(shoppingCart.total())
shoppingCart.checkout()

console.log(shoppingCart.orderStatus);


