describe('Home Page', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.contains('Software Engineer'); // Replace with actual text from your home page
    cy.contains('What and Why I do it');
    cy.contains('What I Do');
    cy.contains('Why I Do It');
    cy.contains('Main stepping stones to success');
    cy.contains('Time Management');
    cy.contains('Communication');
    cy.contains('Identity');
  });
});

describe('Resume Page', () => {
  it('Loads page successfully', () => {
    cy.visit('/resume');
  });
  it('Finds all headings successfully', () => {
    cy.visit('/resume');
    cy.contains('Profile Summary');
    cy.contains('Professional Experience');
    cy.contains('Education');
    cy.contains('Technical Skills');
  });
});

describe('Expertise Page', () => {
  it('Loads page successfully', () => {
    cy.visit('/expertise');
  });
  it('Responsiveness works correctly', () => {
    cy.visit('/expertise');
    cy.get('.expertise-description').should('not.be.visible');
    cy.get('.unorderedList').should('not.be.visible');
    cy.get('.expertise-image').should('not.be.visible');
  });
});

describe('Experience Page', () => {
  it('Loads page successfully', () => {
    cy.visit('/experience');
  });
});

describe('Contact Page', () => {
  it('Loads page successfully', () => {
    cy.visit('/contact');
  });
});
