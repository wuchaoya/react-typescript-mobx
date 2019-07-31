import React from 'react';
import { Row, Col, Table } from 'antd';
import classnames from 'classnames';

interface PropsType {
  prefixCls?: string
}

const File: React.FC<PropsType> = props => {
  
  const columns = [
    {
      title: '游戏名称',
      dataIndex: 'gameName',
      width: 150,
    },
    {
      title: '文件名称',
      dataIndex: 'fileName',
      width: 150,
    },
    {
      title: '包名称',
      dataIndex: 'pkgName',
    },
    {
      title: '版本号',
      dataIndex: 'vName',
    },
    {
      title: '文件大小',
      dataIndex: 'fileSize',
    },
  ];
  
  const data: any[] = [];
  
  const { prefixCls = 'gc-modal-file' } = props;
  
  return (
    <>
      <Row className={classnames(prefixCls)}>
        <Col>
          <h2>管理文件</h2>
          <span>(8.06M/2G)</span>
          <span>友情提示：文件上传中, 刷新网页时会中断文件上传。</span>
          <span>上次记录</span>
        </Col>
        <Col>
          <Table key='id' columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </Col>
      </Row>
    </>
  )
  
}

export default File;
