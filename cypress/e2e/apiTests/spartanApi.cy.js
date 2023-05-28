describe('Spartan API tests', { baseUrl: 'http://54.226.211.37:8000/'}, () => {

it('POST one spartan test', () => {
    cy.request({
        method: 'POST',
        url: 'api/spartans',
        body: {
            "gender": "Male",
            "name": "Sasha",
            "phone": 2345234522
        }
    }
    ).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.success).to.equal('A Spartan is Born!');
        expect(response.body.data.name).to.equal('Sasha');
    })
})
})
