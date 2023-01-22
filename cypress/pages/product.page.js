import Pages from "./pages";

class ProductPage extends Pages{
    get linkCart() {return cy.get('#shopping_cart_container')}
}
export default new ProductPage()
