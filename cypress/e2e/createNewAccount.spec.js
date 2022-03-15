/// <reference types="cypress" />

import MainPage from '../support/pages/MainPage';
import AuthenticationPage from '../support/pages/AuthenticationPage'
import CommonPage from '../support/pages/CommonPage'
import CreateAccountPage from '../support/pages/CreateAccountPage'



var mainPage = new MainPage();
var authPage = new AuthenticationPage();
var common = new CommonPage();
var createAccountPage = new CreateAccountPage();

describe('Create new account', () => {
  beforeEach(() => {
    cy.visit('index.php');
  })


  it('Create new account: fill in only mandatory fields', () => {
    mainPage.clickSignInBtn();
   
    common.pageIsDisplayed('Authentication');
    authPage.fillInEmailField('test@test.com' + Math.floor(Date.now() / 1000));
    authPage.clickCreateBtn();
    common.wait(5000);
   
    common.pageIsDisplayed('Create an account');
    createAccountPage.fillInMandatoryFields('TestName', 'TestSurname', 'TestPassword', 'Test Address',
    'Test City', 'Alaska', '12345', '+12345678')
    createAccountPage.clickRegisterBtn();
    
    common.pageIsDisplayed('My account')

  })
})