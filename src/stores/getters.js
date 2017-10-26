export const amount = state => state.amount

export const items = state => state.items

export const orders = state => state.cart.orders

export const ordered = state => state.cart.ordered

export const totalPrice = state => {
  let price = 0
  state.cart.orders.forEach((o) => {
    price += (o.amount * o.price)
  })
  return price
}
