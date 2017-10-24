import data from '@/data/data'

const getOrdered = async (orderKey) => {
  const ordered = await data.getOrdered(orderKey)
  return ordered.val()
}

export default {
  getOrdered
}
