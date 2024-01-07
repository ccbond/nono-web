"use client"
import CustomLink from "@/components/custom-link"
import packageJSON from "../package.json"
import React from "react"
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons"
import { LikeOutlined, ReadOutlined, StarOutlined } from "@ant-design/icons"
import { Card, Avatar, Statistic, Row, Col, List, Space } from "antd"
import { SessionProvider } from "next-auth/react"

interface DataType {
  key: string
  title: string
  description: string
  view: string
  like: string
}

const contents = [
  {
    key: "1",
    href: "https://mp.weixin.qq.com/s?__biz=MzkyOTYwMzA3OQ==&mid=2247484017&idx=1&sn=a9bb46b6c73ced05ee35e65b1467c3a1&chksm=c2064919f571c00f126fbfe193ad4d8f0e7e08fee74aece581ce175ec1b4ef6fcaabdeca5fa8&token=1753102742&lang=zh_CN#rd",
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=2`,
    title: "今天和nono说话了吗",
    description: "nono支持语音聊天啦",
    content:
      "喜欢用声音交流的朋友们，有好消息啦！现在可以用 语音 和nono聊天啦！快来体验一下~ 只需轻轻一说，问题立刻得解",
    view: "2",
    like: "4",
    img: "/speak.jpeg",
  },
  {
    key: "2",
    href: "https://mp.weixin.qq.com/s?__biz=MzkyOTYwMzA3OQ==&mid=2247483668&idx=1&sn=aa0532f660b97f2f563466328b7d7bc6&chksm=c2064a7cf571c36a91f281081da9849ab1c46305d44ee8e363490918f7a9f5294d6fd83d1708&token=1753102742&lang=zh_CN#rd",
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=2`,
    title: "屠鸭利器！nono教你写出9分作文",
    description: "听说你还在找高质量的雅思作文在线修改？",
    content:
      "很多用户请nono帮忙修改英语翻译、雅思作文，人狠话不多的语糖AI立刻对该项功能进行了升级优化，特别推出“雅思作文润色”服务！包含作文打分、作文润色、范文参考、原生翻译、各类咨询等功能。",
    view: "472",
    like: "6",
    img: "/ielts.jpeg",
  },
  {
    key: "3",
    href: "https://mp.weixin.qq.com/s?__biz=MzkyOTYwMzA3OQ==&mid=2247483656&idx=1&sn=01c9ce14b9bf1bed7d312fd3e8593024&chksm=c2064a60f571c3769c02dcf329349997f1761bfc9589423c8603c1ddabf329690b3c5953ad90&token=1753102742&lang=zh_CN#rd",
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=2`,
    title: "Nono国产第一情感聊天机器人",
    description:
      "非常荣幸地向大家介绍我们的新星——Nono，一款智能国产AI情感聊天机器人",
    content:
      "在这次的史诗级升级中，我们的技术团队——语糖Team——凭借无与伦比的技术实力，让Nono变得更加强大。我们不仅引入了最先进的向量检索技术和思维链模型，让Nono拥有了几乎无所不能的记忆和理解能力。简而言之，Nono是情感智能机器人领域的佼佼者，无人能出其右。   ",
    view: "162",
    like: "3",
    img: "nono.jpg",
  },
]
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

export default function Index() {
  return (
    <div className="space-y-1">
      <h1 className="text-3xl font-bold">NONO Running Dashboard</h1>
      <div
        style={{ background: "#f5f5f5", padding: "20px", marginTop: "20px" }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="NONO AI"
              style={{ padding: 10 }}
              extra={<Avatar src="/nono.jpg" />}
            >
              <p>
                A domestic all-powerful AI assistant that can communicate with
                voice, integrates a knowledge base and an emotional healing
                expert. Always be there for you.
              </p>
            </Card>
          </Col>
          <Col span={16}>
            <Card>
              <Row>
                <Col span={12}>
                  <Statistic title="number of users" value={12569} />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="user growth"
                    value={10}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Statistic title="readings of yesterday" value={97} />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Rangeability"
                    value={60}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Statistic title="sharings of yesterday" value={6} />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Rangeability"
                    value={500}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Statistic title="new concerns of yesterday" value={4} />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Rangeability"
                    value={90}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          {/* More cards for other statistics */}
        </Row>
      </div>
      <div
        style={{ background: "#f5f5f5", padding: "20px", marginTop: "20px" }}
      >
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page)
            },
            pageSize: 3,
          }}
          dataSource={contents}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={ReadOutlined}
                  text={item.view}
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text={item.like}
                  key="list-vertical-like-o"
                />,
              ]}
              extra={<img width={150} alt="bg" src={item.img} />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}
