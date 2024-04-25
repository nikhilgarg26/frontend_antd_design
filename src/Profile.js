import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Row } from "antd";

const Profile = () => {
    return (<>
        <Row align={"middle"} justify={"space-between"} gutter={16}>
            <Col span={6}>
                <Avatar size={42} icon={<UserOutlined />} style={{
                    border: '3px solid #F87060',
                }} />
            </Col>
            <Col span={18}>
                <h5 style={{
                    margin: 0
                }}>User 2158</h5>
                <h6 style={{
                    margin: 0
                }}>user2158@gmail.com</h6>
            </Col>
        </Row>
        <Divider style={{
            margin: '16px 0'
        }}></Divider>
        <Button type="primary" icon={<LogoutOutlined />}>Sign Out</Button>

    </>)
}

export default Profile;