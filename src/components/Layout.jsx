import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;


const { Header, Content, Sider } = Layout;




const menuItems = [
  { key: "home", label: "Home" },
  { key: "admin", label: "Admin" },
  { key: "logout", label: "Logout" },
];
const submenuItems = [
  {
    icon: DashboardOutlined,
    label: "Dashboard",
    childLabels: ["Profile", "Messages"],
  },
  {
    icon: UserOutlined,
    label: "New Visitor",
    childLabels: ["Registration", "Model 1"],
  },
  {
    icon: LaptopOutlined,
    label: "Records",
    childLabels: ["Daily Stats", "Weekly Stats", "Monthly Stats"],
  },
  { icon: NotificationOutlined, label: "Notification", childLabels: ['Email', 'SMS'] },
];

const items1 = menuItems.map(({ key, label }) => ({
  key,
  label,
}));

const items2 = submenuItems.map(({ icon, label, childLabels }, index) => {
  const parentKey = `sub${index + 1}`;
  return {
    key: parentKey,
    icon: React.createElement(icon),
    label,
    children: childLabels.map((childLabel, j) => {
      const subKey = index * childLabels.length + j + 1;
      return {
        key: subKey,
        label: childLabel,
      };
    }),
  };
});

const LayOut = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space between",

          borderRadius: "5px",
        }}
      >
        <Link to="/" className="">
          <img
            src="/src/assets/images/VMS-logo.png"
            alt="logo"
            className="w-12 mr-[1100px] "
          />
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={
            {
              // background: colorBgContainer,
            }
          }
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              //   background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="flex gap-10 mt-16 flex-wrap">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://th.bing.com/th/id/OIP.yeC-UG9Q5yquQwuJJmJvjAHaHa?rs=1&pid=ImgDetMain"
                  />
                }
              >
                <Meta
                  title="DEFENCE HQ"
                  description=""
                  className="text-bolder font-mono text-2xl tracking-wide text-center"
                />
              </Card>
              {/* ************************** */}
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://th.bing.com/th/id/OIP.dAemFMwFQej8O7XGWl0knAHaHa?w=538&h=538&rs=1&pid=ImgDetMain"
                  />
                }
              >
                <Meta
                  title="ARMY HQ"
                  description=""
                  className="text-bolder font-mono text-2xl tracking-wide text-center"
                />
              </Card>

              {/* ************************************* */}
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://th.bing.com/th/id/OIP.VjLOR0tn2Ln9gKum_aJJAAAAAA?rs=1&pid=ImgDetMain"
                    className="h-30"
                  />
                }
              >
                <Meta
                  title="NAVAL HQ"
                  description=""
                  className="text-bolder font-mono text-2xl tracking-wide text-center"
                />
              </Card>

              {/* ***************************************** */}

              <Card
                hoverable
                style={{
                  width: 240,
                  textShadow: 5,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://th.bing.com/th/id/OIP.LrTVHtltfFYtNsxbLYG1qwHaHr?rs=1&pid=ImgDetMain"
                  />
                }
              >
                <Meta
                  title="HQ NAF"
                  description=""
                  className="text-bolder font-mono text-2xl tracking-wide text-center"
                />
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayOut;
