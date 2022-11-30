describe('Basic tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })
  it('Self gets the cake', () => {
    cy.get('.p-selectable-row').first().click();
    cy.get('.p-selectable-row').first().find('[data-cy="first-name-cell"]')
      .should('contain', '🎂');
  })
  it('Opens up Customer Details', () => {
    cy.get('.p-selectable-row').first().click();
    cy.get('.p-dialog-header').find('span')
      .should('have.text', 'Customer Details');
  })
  it('Deletes a row', () => {
    cy.get('.p-selectable-row').first().then((row) => {
      row.find('button').trigger('click');
      cy.get('.p-selectable-row').first()
        .should('not.contain', row.find('[data-cy="first-name-cell"]').text().trim()) 
    })
  })
})