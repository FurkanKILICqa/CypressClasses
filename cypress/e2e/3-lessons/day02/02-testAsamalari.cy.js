describe('Test Aşamalari', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com/')//Given-->Test için ön hazıllık
        cy.contains('üye ol').click()//When--> Eylemi gerçekleştirme 
        cy.url().should('contain','account/register')//Then --> Testi Doğrulama
    });
});