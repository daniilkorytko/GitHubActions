class CreateAccount {

  fillInMandatoryFields(firstName: string, lastName: string, password: string, address: string, city: string,
    state: string, zipCode: string, mobile: string,) {
    cy.get('#customer_firstname').type(firstName);
    cy.get('#customer_lastname').type(lastName);
    cy.get('#passwd').type(password);
    cy.get('#address1').type(address);
    cy.get('#city').type(city);

    cy.get('#id_state').select(state);
    cy.get('#postcode').type(zipCode);
    cy.get('#phone_mobile').type(mobile);
  }
  
  clickRegisterBtn() {
    cy.get('#submitAccount').click();
  }

}
export default CreateAccount;