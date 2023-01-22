import Pages from "./pages";

class AuthPage extends Pages{
    get inputUsername() {
        return cy.get('[data-test="username"]')}
    get inputPassword() {
        return cy.get('[data-test="password"]')}
    get buttonLogin() {
        return cy.get('[data-test="login-button"]')}
    open() {
        return super.open('/')
    }
}

export default new AuthPage()
