import { CheckSquareOutlined, EditOutlined, EyeOutlined, MailOutlined, PrinterOutlined } from "@ant-design/icons";
import { Tooltip, Space, Table  } from "antd";

const TableData = () => {
    const columns = [
        {
            title: 'CUSTOMER NAME',
            dataIndex: 'name',
            className: 'col-edit'
        },
        {
            title: 'DATE',
            dataIndex: 'date',
            className: 'col-edit'
        },
        {
            title: 'JOB NUMBER',
            dataIndex: 'jobno',
            className: 'col-edit'
        },
        {
            title: 'MOBILE NUMBER',
            dataIndex: 'mbno',
            className: 'col-edit'
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            className: 'col-edit ellipsis',
        },
        {
            title: 'ACTIONS',
            dataIndex: 'actions',
            render: () => (
                <Space size="middle">
                    <Tooltip placement="top" title={'Edit'} color="#F87060">
                        <EditOutlined className="edit pen" style={{
                            color: '#F87060',
                            fontSize: '18px'
                        }} />
                    </Tooltip>
                    <Tooltip placement="top" title={'View'} color="#F87060">
                        <EyeOutlined className="edit eye" style={{
                            color: '#F87060',
                            fontSize: '18px'
                        }} />
                    </Tooltip>
                    <Tooltip placement="top" title={'Delete'} color="#F87060">
                        <CheckSquareOutlined className="edit square" style={{
                            color: '#F87060',
                            fontSize: '18px'
                        }} />
                    </Tooltip>
                    <Tooltip placement="top" title={'Mail'} color="#F87060">
                        <MailOutlined className="edit mail" style={{
                            color: '#F87060',
                            fontSize: '18px'
                        }} />
                    </Tooltip>
                    <Tooltip placement="top" title={'Print'} color="#F87060">
                        <PrinterOutlined className="edit printer" style={{
                            color: '#F87060',
                            fontSize: '18px',
                        }} />
                    </Tooltip>
                </Space>
            ),
            className: 'col-edit'
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobno: 'ABC000006',
            mbno: '0661425689',
            status: 'Completed',
            actions: ''
        },
        {
            key: '2',
            name: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobno: 'ABC000006',
            mbno: '0661425689',
            status: 'Completed',
            actions: ''
        },
        {
            key: '3',
            name: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobno: 'ABC000006',
            mbno: '0661425689',
            status: 'Completed',
            actions: ''
        },
        {
            key: '4',
            name: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobno: 'ABC000006',
            mbno: '0661425689',
            status: 'Completed',
            actions: ''
        },
        {
            key: '5',
            name: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobno: 'ABC000006',
            mbno: '0661425689',
            status: 'Completed',
            actions: ''
        },
        {
            key: '6',
            name: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobno: 'ABC000006',
            mbno: '0661425689',
            status: 'Completed',
            actions: ''
        },
        {
            key: '7',
            name: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobno: 'ABC000006',
            mbno: '0661425689',
            status: 'Completed',
            actions: ''
        },
    ];
    return (<>
        <Table
            className="table-edit"
            rowSelection={{
                type: "radio",

                // ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            // tableLayout="fixed"
            pagination={{
                position: ['bottomCenter'],
            }}
        />
    </>)
}

export default TableData;