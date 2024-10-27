describe('Home Test', () => {
    it('should navigate to the home page', () => {
        // Check Home
        cy.visit('http://localhost:3000/')
        cy.contains('Mar Template')

        // Check Links
        cy.contains('Home').click();
        cy.contains('About')
        cy.contains('Home')

        // Check Button for services with dropdown links
        cy.contains('Services').click();
        cy.contains('Web Development');
        cy.contains('Digital Marketing');
        cy.contains('SEO Optimization');
        cy.contains('Services').click();

        // cy.get('#switch').click();
        // cy.get('button').should('be.enabled').click();
    })
})

// describe('Navigation', () => {
//     it('should navigate to the home page', () => {
//         // Start from the index page
//         cy.visit('http://localhost:3000/')

//         // Check Home
//         cy.contains('Home').click();
//         cy.url().should('include', '/')

//         // About
//         cy.contains('About').click();

//         // The new url should include "/about"
//         cy.url().should('include', '/about')

//         // The new page should contain an h1 with "About"
//         // cy.get('h1').contains('About')

//     })
// })

