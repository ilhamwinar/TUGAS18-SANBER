//positif test 1

describe('template spec',() => {
    it('passes',() =>{
        cy.visit('https://the-internet.herokuapp.com/login')

    })
})

//Positif test 2
describe('Login True', () => {

    it('input valid username dan password then Login', () => {

      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('#username').type("tomsmith")

      cy.get('#password').type("SuperSecretPassword!")

      cy.contains(' Login').click()
      cy.wait(2000)

    })

  })

//Positif test 3
describe('Logout True', () => {

    it('input valid username dan password then Login', () => {

      cy.visit('https://the-internet.herokuapp.com/login')

      cy.contains(' Logout').click()
      cy.wait(2000)

    })

  })


//negatif test 1
describe('Click element without enter pass', () => {

    it('clicks the button "login"', () => {

      cy.visit('https://the-internet.herokuapp.com/login')
      cy.contains(" Login").click()

    })

  })

//negatif test 2
describe('Login Wrong Password', () => {

    it('input valid username dan password then Login', () => {

      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('#username').type("standard_user")

      cy.get('#password').type("secret_sauce")

      cy.contains(" Login").click()

    })

  })