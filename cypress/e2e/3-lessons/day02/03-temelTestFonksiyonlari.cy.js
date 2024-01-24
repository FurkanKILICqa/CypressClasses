describe('Temel Test Fonksiyonlari', () => {
    it('visit(), get(), click(),type(),should() foknsiyonlari kullanimi', () => {
        cy.visit('url');
        //Visit verilen url ye gider
        cy.get('locator').click
        cy.get('locator').type('Metin').should('Doğrulayici','Doğrulanacak metin')//Accepted ve actual gibi
        //Her adımda doğrulama yapabiliriz
        //type fonksiyonu sendkeys ile aynıdır
        //should assert ile aynıdır
        //cy.xpath methodu ile xpath locate i alınır
        cy.xpath('')
    });
});