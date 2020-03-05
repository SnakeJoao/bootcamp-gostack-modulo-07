export function addToCArt(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateAmount(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT', id, amount };
}
