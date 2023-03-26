describe('Funding and supprt model test suite',function(){
    it('Housing/Service provider',function(){
        cy.visit("https://www.hud.govt.nz/")
        cy.contains(' Looking for funding & support? ')
        cy.contains('I am')
        cy.get('.last-word-and-arrow').should('exist').click()    
        cy.get('ul').eq(0).find('li').should('have.length', 7)
        cy.get('ul').eq(0).find('li').eq(0).click()
        cy.contains('looking for ')
        cy.contains('select').click()
        cy.get('ul').eq(0).find('li').should('have.length', 3)
        cy.get('ul').eq(0).find('li').eq(1).click()
        cy.get('.button').contains('What are my options?').click()

         // Assert  the funding result count 
        cy.get('.funding-results-count').should('have.text','6 Results');
    })

    // it('Failing test cases -Housing/Service provider',function(){
    //     cy.visit("https://www.hud.govt.nz/")
    //     cy.contains(' Looking for funding & support? ')
    //     cy.contains('I am')
    //     cy.get('.last-word-and-arrow').should('exist').click()    
    //     cy.get('ul').eq(0).find('li').should('have.length', 7)
    //     cy.get('ul').eq(0).find('li').eq(1).click()
    //     cy.contains('looking for ')
    //     cy.contains('select').click()
    //     cy.get('ul').eq(0).find('li').should('have.length', 3)
    //     cy.get('ul').eq(0).find('li').eq(1).click()
    //     cy.get('.button').contains('What are my options?').click()

    //      // Assert  the funding result count 
    //     cy.get('.funding-results-count').should('have.text','6 Results');
    // })
})