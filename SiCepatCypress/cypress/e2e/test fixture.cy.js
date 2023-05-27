
describe('Test', () => {
    
    it('visit standard_user', () => {

        let username = "standard_user"
        let password = "secret_sauce"
        let harga = "$29.99"

        cy.visit('https://www.saucedemo.com/')
        
            cy.get("#user-name").type(username);
            cy.get("#password").type(password);
    
            cy.get('input#login-button.submit-button.btn_action').click()
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.inventory_item_price')
            .then(($element) => {
            const price = $element.text().trim();
            expect("$29.99").to.equal(harga);
                
              });
            cy.get('.shopping_cart_link').click()
            cy.get('#checkout').click()
            cy.get('#first-name').type('a')
            cy.get('#last-name').type('a')
            cy.get('#postal-code').type('a')
            cy.get('#continue').click()

            cy.get('.summary_subtotal_label') 
            .then(($element) => {
            const price = $element.text().trim();
            expect("$29.99").to.equal(harga);

            cy.get('#finish').click()
        });
    });
});

    