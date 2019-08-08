import React from 'react';
import { Row, Col, Table } from 'antd';
import {TableProps,ColumnProps} from 'antd/lib/table/interface';
import classnames from 'classnames';
import './style.less';

interface PropsType {
  prefixCls?: string
  
}

const File: React.FC<PropsType & TableProps<ColumnProps<any>>> = props => {
  
  const columns = [
    {
      title: '游戏名称',
      dataIndex: 'appName',
    },
    {
      title: '文件名称',
      dataIndex: 'fileName',
    },
    {
      title: '包名称',
      dataIndex: 'bundleId',
    },
    {
      title: '版本号',
      dataIndex: 'versionName',
    },
    {
      title: '文件大小',
      dataIndex: 'appSize',
    },
  ];
  
  
  const { prefixCls = 'gc-modal-file', dataSource = [] } = props;
  console.log(dataSource);
  return (
    <>
      <Row className={classnames(prefixCls)}>
        <Col className={classnames(`${prefixCls}-header`)}>
          <span className={classnames(`${prefixCls}-title`)}>管理文件</span>
          <span className={classnames(`${prefixCls}-size`)}>(8.06M/2G)</span>
          <span className={classnames(`${prefixCls}-tips`)}>友情提示：文件上传中, 刷新网页时会中断文件上传。</span>
          <span className={classnames(`${prefixCls}-link`)}>上次记录</span>
        </Col>
        <Col>
          <Table {...props} rowKey='id' columns={columns} dataSource={dataSource} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </Col>
      </Row>
    </>
  )
  
}

export default File;
