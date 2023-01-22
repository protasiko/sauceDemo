import AuthPage from "../pages/auth.page";
import ProductPage from "../pages/product.page";

describe('Authentication', () => {
  beforeEach(() => {
    AuthPage.open()
  })
  it('login with valid credentials', () => {

    AuthPage.inputUsername.type(Cypress.env('username'))
    AuthPage.inputPassword.type(Cypress.env('password'))
    AuthPage.buttonLogin.click()

    ProductPage.path.should('eq', '/inventory.html')
    ProductPage.linkCart.should('be.visible')

  })
})
