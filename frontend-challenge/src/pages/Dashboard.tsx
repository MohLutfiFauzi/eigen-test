import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Space, Table, Select } from 'antd'
import ModalDetail from '../components/ModalDetail'
import SearchInput from '../components/SearchInput'
import api from '../utils/api'

const { Column } = Table

interface Source {
  id: string
  name: string
}

interface DataType {
  key: string
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

const Dashboard: React.FC = () => {
  const [query, setQuery] = useState('bitcoin')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortBy, setSortBy] = useState('publishedAt')

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const response = await api.getArticles(query, sortBy)
        setArticles(response)
      } catch (error) {
        window.alert(error)
        setQuery('bitcoin')
      }
      setLoading(false)
    }

    fetch()
  }, [query, sortBy])

  const onSortByChange = (value: string) => {
    setSortBy(value)
  }

  return (
    <Layout>
      <Space style={{ marginBottom: '16px' }}>
        <SearchInput setQuery={setQuery} query={query}/>
        <Select
          defaultValue={sortBy}
          onChange={onSortByChange}
          options={[
            {
              value: 'relevancy',
              label: 'Relevancy'
            },
            {
              value: 'popularity',
              label: 'Popularity'
            },
            {
              value: 'publishedAt',
              label: 'PublishedAt'
            }
          ]}
        />
      </Space>
        {
          loading
            ? <p>Loading...</p>
            : (
        <Table dataSource={articles} rowKey='url'>
          <Column
            title="Soure"
            key="source"
            dataIndex="source"
            render={(source: Source) => (
              <Space size="small">
                {source.name}
              </Space>
            )}
          />
          <Column title="Author" dataIndex="author" key="author" />
          <Column title="Title" dataIndex="title" key="title" />
          <Column
            title="Action"
            dataIndex="action"
            key="action"
            render={(_: any, { source, author, title, description, url, urlToImage, publishedAt, content }: DataType) => (
              <Space size="middle">
                <ModalDetail source={source} author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}/>
              </Space>
            )}
          />
        </Table>
              )
        }
    </Layout>
  )
}

export default Dashboard
