//https://automationteststore.com sitesine git
//'Contact Us' bağlantısına tıkla
//Kayıt formunu tamamla
//Kaydın gerçekleştiğini doğrula

describe('Ornek', () => {
    it('ZincirlemeTest', () => {
        //https://automationteststore.com sitesine git
        cy.visit('https://automationteststore.com')
        //'Contact Us' bağlantısına tıkla
        cy.get('.info_links_footer').contains('Contact Us').click();
        //Kayıt formunu tamamla
        cy.get('#ContactUsFrm').within(() => {
            cy.get('#ContactUsFrm_first_name').type('Furkan')
            cy.get('#ContactUsFrm_email').type('furkan@furkan.com')
            cy.get('#ContactUsFrm_enquiry').type('Selamlar')
            cy.get('[title="Submit"]').click()
            cy.get('.mb40').find('p').should('exist').and('be.visible').and('have.text', 'Your enquiry has been successfully sent to the store owner!')
        })
    });
});
