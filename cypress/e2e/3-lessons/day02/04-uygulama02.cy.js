describe('Uygulama-02', () => {
    it('Temel Fonksiyonların kullaniimi', () => {
        //https://www.amazon.com/ sitesine git
        cy.visit('https://www.amazon.com')
        //Arama motorunda Iphone arat
        cy.get('#twotabsearchtextbox').type('Iphone')

        cy.get('#nav-search-submit-button').click()

        cy.get('.a-color-state').should('contain','Iphone')
        //Burada Iphone yazısında tırnak işareti olduğu için contains kullandık tırnak işaretlerinide karakte olarak algılıyordu



    });
});