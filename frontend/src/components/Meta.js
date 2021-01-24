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
  title: 'ยินดีต้อนรับสู่ ไพบูลย์ดอกไม้ผ้า',
  description: 'ดอกไม้ปลอม ดอกไม้ประดิษฐ์ ในราคาส่ง',
  keywords: 'ดอกไม้ปลอม, ดอกไม้แห้ง, ต้นไม้ปลอม, หญ้าเทียม, เชียงใหม่, ทั่วประเทศ, ดอกไม้ประดิษฐ์',
}

export default Meta
