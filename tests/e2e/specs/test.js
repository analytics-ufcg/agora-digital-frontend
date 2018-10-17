describe('Test proposicoes view', () => {
  it('Test meio ambiente proposicoes', () => {
    const props_meio_ambiente = ['PL do Veneno', 'Lei do Licenciamento Ambiental', 'Lei para Acabar Zona de Amortecimento',
      'Política Nacional de Redução de Agrotóxico', 'Estatuto do Índio']
    cy.visit('/#/temas/Meio Ambiente')

    props_meio_ambiente.forEach(prop => {
      cy.contains(prop)
    })
  })

  it('Test agenda nacional proposicoes', () => {
    const props_meio_ambiente = ['Lei do Teto Remuneratório', 'Modernização da Lei de Licitações e Contratos', 'Lei do Cadastro Positivo',
      'Lei da Qualidade Fiscal']
    cy.visit('/#/temas/Agenda Nacional')

    props_meio_ambiente.forEach(prop => {
      cy.contains(prop)
    })
  })

  it('Test filter apreciacao', () => {
    cy.visit('/#/temas/Meio Ambiente')
    const apreciacoes = ['Plenário', 'Conclusiva']
    cy.contains('Apreciação').click()
    apreciacoes.forEach(apreciacao => {
      cy.get('#tags > span').should('contain', apreciacao)
      cy.contains('.is-checked', apreciacao).click()
      cy.get('#tags > span').should('not.contain', apreciacao)
      cy.contains('span', apreciacao).click()
      cy.get('#tags > span').should('contain', apreciacao)
    })
  })

  it('Test filter regime', () => {
    cy.visit('/#/temas/Meio Ambiente')

    const regimes = ['Ordinária', 'Prioridade']
    cy.contains('Regime de tramitação').click()
    regimes.forEach(regime => {
      cy.get('#tags > span').should('contain', regime)
      cy.contains('.is-checked', regime).click()
      cy.get('#tags > span').should('not.contain', regime)
      cy.contains('span', regime).click()
      cy.get('#tags > span').should('contain', regime)
    })
  })

  it('Detalhe Proposicao', () => {
    cy.visit('/#/temas/Meio Ambiente')
    cy.get('.tooltip').should('not.be.visible')
  })
})
