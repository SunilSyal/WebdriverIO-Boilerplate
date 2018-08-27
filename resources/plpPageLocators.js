module.exports = {
  searchItem: ".product-list-heading",
  searchHeading: ".product-list-heading",
  productImage: ".product-list-image",
  quickView: ".plp-quickview--container",
  quickViewContainer: ".plp-quickview--modal-container",
  sizeLink: ".size-link",
  addToBasketCTA: ".plp-quickview--add-to-basket-cta",
  addToBasketCTABtn: ".plp-quickview--add-to-basket-cta button",

  // You can directly extract the element here in case you don't need selector only
  get addToBasketCTABtnElement() {
    return browser.element(".plp-quickview--add-to-basket-cta button");
  }
};
