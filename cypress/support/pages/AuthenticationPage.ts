class AuthenticationPage{

  fillInEmailField(email: string) {
    cy.get('#email_create').type(email);
  }

  clickCreateBtn() {
    cy.get('#SubmitCreate').click();
  }

}
export default AuthenticationPage;