export function addToCArt(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}
