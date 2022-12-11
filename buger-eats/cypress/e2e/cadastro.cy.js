describe('Cadastro', ()=> {
  it('usuário deve se tornar um entregador', ()=> {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
  
      
    /**massa de teste*/
    var entregador = {
      nome: 'Érika Santana',
      cpf: '00000014114',
      email: 'erikatester@gmail.com',
      whatsapp: '91988882020',
      endereco: {
        cep: '66025190',
        rua: 'Osvaldo de caldas brito',
        numero: '269',
        complemento: 'Portal da Amazônia',
        bairro: 'Jurunas',
        cidade_uf: 'Belém/PA'
      }
    }

    cy.get('input[name="name"]').type(entregador.nome)
    cy.get('input[name="cpf"]').type(entregador.cpf)
    cy.get('input[name="email"]').type(entregador.email)
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

    cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
  })
})
