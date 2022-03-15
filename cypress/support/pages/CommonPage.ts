
class CommonPage {

  pageIsDisplayed(pageName: string) {
    cy.get('.page-heading').each($el => {
      var text = $el.text();
      expect(pageName).to.equal(text);
    })
  }

  wait(time: number) {
    cy.wait(time);
  }
} export default CommonPage;