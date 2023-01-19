import React from 'react'
import Logo from './Logo'
import { DashboardOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'

const { Header, Content, Footer, Sider } = Layout

interface Props {
  children: JSX.Element[]
}

const App = ({ children }: Props): JSX.Element => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div style={{ margin: '24px', display: 'flex' }}>
            <Logo />
            <h1 style={{ color: 'white', marginLeft: '18px', fontSize: '32px' }}>EIGEN</h1>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={['1']}
          items={[DashboardOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: 'Dashboard'
            })
          )}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App
