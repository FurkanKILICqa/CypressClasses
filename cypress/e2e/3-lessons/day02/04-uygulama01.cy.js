/*
https://www.kitapyurdu.com/ sitesine git
'Üye ol' bağlantısına tıkla
Kayıt formunda 'Ad' alanına isim yaz ve doğrula
*/

describe('Uygulama-01', () => {
    it('Temel Fonksiyonların kullaniimi', () => {
        //https://www.kitapyurdu.com/ sitesine git
        cy.visit('www.kitapyurdu.com/')
        //'Üye ol' bağlantısına tıkla
        cy.get('.register > a').click()
        //Kayıt formunda 'Ad' alanına isim yaz ve doğrula
        cy.get('#register-name').type('Furkan').should('have.value','Furkan')
         
    });
});