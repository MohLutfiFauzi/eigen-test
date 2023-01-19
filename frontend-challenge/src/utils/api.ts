const api = (() => {
  const API_KEY = 'e44df19d4d05402cae202ee0b9653d15'
  const BASE_URL = 'https://newsapi.org/v2/everything'

  async function getArticles (query: string, sortBy: string) {
    const response = await fetch(`${BASE_URL}?q=${query}&sortBy=${sortBy}&apiKey=${API_KEY}`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status === 'error') {
      throw new Error(message)
    }

    const { articles } = responseJson

    return articles
  }

  return {
    getArticles
  }
})()

export default api
