// TYPE DATA STRUCTURE

export type SELECT = 'SELECT'
export type NEW = 'NEW'
export type FINISHED = 'FINISHED'

export type ItemStatus = SELECT | NEW | FINISHED

export type Item = {
   amount: number,
   id: string,
   image: string,
   name: string,
   price: number,
   status: ItemStatus
}

export type Cart = {
   orders: [Item],
   ordered: [Item]
}

export type IDLE = 'IDLE'
export type UNPAID = 'UNPAID'
export type PAID = 'PAID'

export type OrderStatus = IDLE | UNPAID | PAID

export type Order = {
  desk: string,
  items: [Item],
  price: number,
  status: OrderStatus,
  time: Date
}

export type Cook = {
  wholeOrders: [Order]
}
