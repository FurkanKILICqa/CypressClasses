

describe('Uygulama-03', () => {
    it('Temel Fonksiyonlarin kullaniimi', () => {
        //Kullanici https://webdriveruniversity.com/Contact-Us/contactus.html sayfasina gider
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Furkan').should('have.value','Furkan')
        cy.get('[name="last_name"]').type('Klc').should('have.value', 'Klc')
        cy.get('[name="email"]').type('fkrn@fmail.com').should('have.value', 'fkrn@fmail.com')
        cy.get('textarea.feedback-input').type('Sa').should('have.value','Sa')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('contain','Thank You')
        
        
    });
});