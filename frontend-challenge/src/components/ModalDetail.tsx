import React, { useState } from 'react'
import { Button, Modal, Typography, Descriptions, Image } from 'antd'

const { Link } = Typography
const { Item } = Descriptions

interface Source {
  id: string
  name: string
}

interface Props {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

const ModalDetail = ({ source, author, title, description, url, urlToImage, publishedAt, content }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button data-testid='test-button-modal' type="primary" onClick={() => { setOpen(true) }}>
        Detail Article
      </Button>
      <Modal
        centered
        data-testid='test-modal'
        open={open}
        onOk={() => { setOpen(false) }}
        onCancel={() => { setOpen(false) }}
        width={1000}
      >
        <Descriptions
          title="Detail Article"
          bordered
          column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          <Item label="Author">{author}</Item>
          <Item label="From">{source.name}</Item>
          <Item label="Published At" style={{ whiteSpace: 'pre' }}>{publishedAt}</Item>
          <Item label="Title">{title}</Item>
          <Item label="Source"><Link href={url} target="_blank">{url}</Link></Item>
          <Item label="Image">
            <Image
              width={100}
              src={`${urlToImage}?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
            />
          </Item>
          <Item label="Description">{description}</Item>
          <Item label="Content">{content}</Item>
        </Descriptions>
      </Modal>
    </>
  )
}

export default ModalDetail
