export const amount = state => state.amount

export const items = state => state.items

export const orderKey = state => state.orderKey

export const totalPrice = state => {
  let price = 0
  state.cart.orders.forEach((o) => {
    price += (o.amount * o.price)
  })
  state.cart.ordered.forEach((o) => {
    price += (o.amount * o.price)
  })
  return price
}
