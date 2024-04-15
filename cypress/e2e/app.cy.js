describe('service is available', function () {
  const modal = '[data-testid="close-modal"]'
  const firstBun = 'ul li:first'
  const firstMain = 'ul:last li:first'

  const dragAndDrop = () => {
    const dnd = new DataTransfer()
    cy.get(firstBun).trigger('dragstart', { dnd })
    cy.get('[data-testid="drop-target"]').trigger('drop', { dnd })
    cy.get(firstMain).trigger('dragstart', { dnd })
    cy.get('[data-testid="drop-target"]').trigger('drop', { dnd })
  }

  beforeEach(() => {
    cy.intercept("GET", "api/ingredients", { fixture: "ingredients.json" })

    window.localStorage.setItem('refreshToken', JSON.stringify('test-refreshToken'))
    window.localStorage.setItem('accessToken', JSON.stringify('test-accessToken'))

    cy.visit('http://localhost:3000')
  })

  afterEach(() => {
    cy.clearLocalStorage()
  })

  it('should open and close modal', () => {
    cy.get(firstBun).click()
    cy.get('[data-testid="modal-ingredient-name"]').should('have.text', 'Ингредиент 1')
    cy.get(modal).click()
    cy.get('[data-testid="modal-window"]').should('not.exist')
  })

  it('should drag and drop works', () => {
    dragAndDrop()
  })

  it('should create order', () => {
    dragAndDrop()
    cy.get('[data-testid="create-order-btn"]').should('be.enabled').click()

    cy.location('pathname').then(path => {
      if (path == '/login') {
        cy.contains('Войти')
      } else {
        cy.get(modal).should('exist')
        cy.contains('Ваш заказ начали готовить')
      }
    })
  })
})

describe('user auth', function () {
  it('should user auth', () => {
    const inputEmail = '[data-testid="email"]'
    const inputPassword = '[data-testid="password"]'
    const user = {
      "email": "test@yandex.ru",
      "password": "qwerty"
    }

    cy.visit('http://localhost:3000/login')
    cy.get(inputEmail).click().type(user.email)
    cy.get(inputPassword).click().type(user.password)
    cy.contains('button', 'Войти').click()
    cy.intercept("POST", "api/auth/login")
    cy.location('pathname').should('eq', '/')
  })
})