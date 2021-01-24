import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'ยินดีต้อนรับ ไพบูลย์ดอกไม้ผ้า',
  description: 'เราขายส่งดอกไม้ประดิษฐ์,ดอกไม้ผ้า',
  keywords: 'ดอกไม้ประดิษฐ์, ดอกไม้ผ้า, ขายส่งดอกไม้ผ้า',
}

export default Meta
