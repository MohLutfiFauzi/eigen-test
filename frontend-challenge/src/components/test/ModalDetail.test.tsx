/**
 * skenario testing
 *
 * - ModalDetail component
 *   - should show modal when button detail clicked
 *   - should not show modal when button Cancel clicked
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ModalDetail from '../ModalDetail'

describe('ModalDetail test', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })
  })

  it('should show modal when buton clicked', async () => {
    // arrange
    const dummyArticle = {
      source: {
        id: 'cnn',
        name: 'CNN'
      },
      author: 'Eric Levenson, Elizabeth Wolfe, Jason Carroll',
      title: 'Brian Walshe, charged with murdering his wife Ana Walshe, expected to be arraigned today - CNN',
      description: "Brian Walshe killed and dismembered his wife Ana Walshe and disposed of her body in dumpsters across suburban Boston, a prosecutor with the Norfolk district attorney's office said at his arraignment on Wednesday.",
      url: 'https://www.cnn.com/2023/01/18/us/brian-walshe-murder-charge-arraignment-ana-walshe-wednesday/index.html',
      urlToImage: 'https://media.cnn.com/api/v1/images/stellar/prod/230117101359-02-brian-walshe-court-0109.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-01-18T14:42:00Z',
      content: '[Breaking news update, published at 9:41 a.m. ET]\r\nBrian Walshe killed and dismembered his wife Ana Walshe and disposed of her body in dumpsters across suburban Boston, a prosecutor with the Norfolk … [+6082 chars]'
    }

    render(<ModalDetail source={dummyArticle.source} author={dummyArticle.author} title={dummyArticle.title} description={dummyArticle.description} url={dummyArticle.url} urlToImage={dummyArticle.urlToImage} publishedAt={dummyArticle.publishedAt} content={dummyArticle.content} />)
    const btnModal = screen.getByTestId('test-button-modal')

    // action
    fireEvent.click(btnModal)

    // assert
    expect(btnModal).toBeInTheDocument()
    const modal = screen.getByTestId('test-modal')

    expect(modal).toBeInTheDocument()
  })

  it('should not show modal when button Cancel clicked', async () => {
    // arrange
    const dummyArticle = {
      source: {
        id: 'cnn',
        name: 'CNN'
      },
      author: 'Eric Levenson, Elizabeth Wolfe, Jason Carroll',
      title: 'Brian Walshe, charged with murdering his wife Ana Walshe, expected to be arraigned today - CNN',
      description: "Brian Walshe killed and dismembered his wife Ana Walshe and disposed of her body in dumpsters across suburban Boston, a prosecutor with the Norfolk district attorney's office said at his arraignment on Wednesday.",
      url: 'https://www.cnn.com/2023/01/18/us/brian-walshe-murder-charge-arraignment-ana-walshe-wednesday/index.html',
      urlToImage: 'https://media.cnn.com/api/v1/images/stellar/prod/230117101359-02-brian-walshe-court-0109.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-01-18T14:42:00Z',
      content: '[Breaking news update, published at 9:41 a.m. ET]\r\nBrian Walshe killed and dismembered his wife Ana Walshe and disposed of her body in dumpsters across suburban Boston, a prosecutor with the Norfolk … [+6082 chars]'
    }

    render(<ModalDetail source={dummyArticle.source} author={dummyArticle.author} title={dummyArticle.title} description={dummyArticle.description} url={dummyArticle.url} urlToImage={dummyArticle.urlToImage} publishedAt={dummyArticle.publishedAt} content={dummyArticle.content} />)
    const btnModal = screen.getByTestId('test-button-modal')

    // action
    fireEvent.click(btnModal)

    // assert
    expect(btnModal).toBeInTheDocument()
    const modal = screen.getByTestId('test-modal')

    expect(modal).toBeInTheDocument()

    const btnCancel = screen.getByRole('button', { name: 'Cancel' })

    fireEvent.click(btnCancel)

    expect(modal).toBeVisible()
  })
})
