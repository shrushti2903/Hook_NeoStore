export function mergeCartData(apiProductList, localStorageCartData) {
  let uniqueCartData = [];
  const requiredProductData =
    apiProductList &&
    apiProductList.map((value) => {
      return {
        product_name: value.product_id.product_name,
        product_stock: value.product_id.product_stock,
        product_image: value.product_id.product_image,
        product_cost: value.product_id.product_cost,
        product_id: value.product_id.product_id,
        quantity: value.quantity,
        total: value.total_productCost,
        _id: value._id,
      };
    });
  const concatProductData = localStorageCartData.concat(requiredProductData);
  uniqueCartData = concatProductData.reduce((product, currentProduct) => {
    const isProduct = product.find(
      (item) =>
        item && item.product_id === currentProduct && currentProduct.product_id
    );
    if (!isProduct) {
      return product.concat([currentProduct]);
    } else {
      return product;
    }
  }, []);
  return uniqueCartData;
}
