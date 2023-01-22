export default class Pages{

    get path() {return cy.location('pathname')}
    open(path){
        return cy.visit(path)
    }


}
