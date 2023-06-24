import { useState } from "react"
import { Layout, Menu, Button, theme, Typography } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { menu } from "../core/lib/constants"
import Image from "next/image"
import fisdasLogo192Src from "../public/img/logo192.png"

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography

export default function AppPage() {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken()

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0}
        style={{
          paddingRight: collapsed ? 0 : "8px",
          paddingLeft: collapsed ? 0 : "8px",
          paddingTop: "16px",
          paddingBottom: "8px",
          overflow: "auto",
          height: "100vh",
          // position: "fixed",
          // left: 0,
          // top: 0,
          // bottom: 0,
        }}
        width={256}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            paddingLeft: "24px",
          }}
        >
          <Image
            src={fisdasLogo192Src}
            width={36}
            height={36}
            alt="Fisdas logo"
            style={{
              flexShrink: 0,
            }}
          />
          <Title level={4} style={{ marginBottom: 0 }}>
            Fisdas Lab
          </Title>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menu.map((m, index) => ({
            key: index.toString(),
            icon: <FontAwesomeIcon icon={m.faIconName} />,
            label: m.name,
          }))}
          style={{
            borderInlineEnd: "none",
            marginTop: "8px",
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            paddingLeft: "16px",
            paddingRight: "16px",
            // background: colorBgContainer,
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Button
            type="text"
            icon={
              <FontAwesomeIcon
                icon={"angles-left"}
                rotation={collapsed ? 180 : undefined}
              />
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: 36,
              height: 36,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 720,
            background: colorBgContainer,
            borderRadius: "16px",
          }}
        >
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
          <Text>Lorem ipsum dolor sit amet. Constectitut</Text>
        </Content>
      </Layout>
    </Layout>
  )
}
