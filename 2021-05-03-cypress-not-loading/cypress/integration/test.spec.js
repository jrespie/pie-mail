describe('Customer ID tests', () =>{
    beforeEach('Open the page', () => {
        cy.visit('http://localhost:8080');
    })
    it('Should find the correct id on the page', () => {
        cy.get('#CustomerId').should('contain','25824');
        
    })
    it('Should find the correct id inside the frame', () => {
        getIframeBody().find('#CustomerId').should('contain', '25824');
    })
})

const getIframeDocument = () => {
    return cy
    .get('iframe')
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }