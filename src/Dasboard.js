import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row,Space } from "antd";
import TableData from "./TableData";

const Dashboard = ()=>{
    return(<>
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Row justify="end">
        <Col span={6}>
            <Input style={{ width: 155,
            border: '2px solid #F87060',
            color: '#F87060',
            float: 'right'}} size='large' className='input-search' prefix={<SearchOutlined />} enterButton={false} placeholder="Search ..." />
        </Col>
    </Row>
    <Row>
        <TableData></TableData>
    </Row>
    </Space>
    </>)
}

export default Dashboard;