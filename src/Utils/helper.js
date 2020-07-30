export function mergeCartData(apiProductList, localStorageCartData) {
  console.log("local storage in helper", localStorageCartData);
  console.log("cart data in helper", apiProductList);
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
  console.log("data after merge", concatProductData);
  uniqueCartData = concatProductData.reduce((product, currentProduct) => {
    console.log("product", product);
    console.log("current Data", currentProduct);
    const isProduct = product.find(
      (item) => item.product_id == currentProduct.product_id
    );
    console.log("isProduct", isProduct);
    if (!isProduct) {
      return product.concat([currentProduct]);
    } else {
      return product;
    }
  }, []);

  console.log("unique ", uniqueCartData);
  return uniqueCartData;
}
