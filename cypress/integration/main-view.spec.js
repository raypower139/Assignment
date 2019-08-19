describe("Main View ", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get(".card").eq(1).as("targetcard")
            .find(".card-footer")
            .find("button")
            .as("cardbuttons");
    });

    it("loads the list of movies", () => {
        cy.get(".badge").should("contain", 20);
        cy.get(".card").should("have.length", 20);
    });

    describe("Delete operation", () => {
        it("allows a movie be deleted", () => {
            cy.get(".badge").should("contain", 20);
            cy.get("@cardbuttons")
                .contains("Delete")
                .click();
            cy.get("@cardbuttons")
                .contains("Confirm")
                .click();
            cy.get(".badge").should("contain", 19);
        });

        it("allows a delete operation be canceled", () => {
            cy.get("@cardbuttons")
                .contains("Delete")
                .click();
            cy.get("@cardbuttons")
                .contains("Cancel")
                .click();
            cy.get(".badge").should("contain", 20);
        });
    });

    describe("Edit operation", () => {
        it("allows a contact be edited", () => {
            cy.get("@cardbuttons")
                .contains("Edit")
                .click();
            cy.get("@targetcard")
                .find(".card-body")
                .should("have.css", "background-color")
                .and("eq", "rgba(0, 0, 0, 0)");
            cy.get("@targetcard")
                .find("input")
                .first()
                .clear()
                .type("test@example.com");
            cy.get("@cardbuttons")
                .contains("Save")
                .click();
            cy.get("@targetcard")
                .find("[data-icon=film]")
                .next()
                .should("contain", "test@example.com");
        });

        it("allows an edit be cancelled", () => {
            cy.get("@targetcard")
                .find("[data-icon=film]")
                .next()
                .invoke("text")
                .then($text => {
                    cy.get("@cardbuttons")
                        .contains("Edit")
                        .click();
                    cy.get("@targetcard")
                        .find("input")
                        .first()
                        .clear()
                        .type("test@example.com");
                    cy.get("@cardbuttons")
                        .contains("Cancel")
                        .click();
                    cy.get("@targetcard")
                        .find("[data-icon=film]")
                        .next()
                        .should("contain", $text);
                });
        });
    });

    describe("Filtering", () => {
        it("filters the movies by name", () => {
            cy.get("span")
                .contains("Filter")
                .next()
                .type("al");
            cy.get(".card").each($el => {
                cy.wrap($el)
                    .find(".card-title")
                    .contains("al");
            });
        });
});


});