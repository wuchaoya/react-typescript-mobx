/**
 *  HOC 用户相关的背景组件
 */
import React from 'react';
import classnames from 'classnames';
import './style.less';

// 外部props
export interface HocProps {

}

// 默认props
export interface Props {
  prefixCls?: string;
}

export default <P extends HocProps>(Component: React.ComponentType<P & Props>) =>
  class extends React.PureComponent<P & Props> {
    render() {
      const {prefixCls = 'gc-view'} = this.props;
      return (
        <div className={classnames(prefixCls)}>
          <div className={classnames(`${prefixCls}-bg`)}>
            <div className={classnames(`${prefixCls}-box`)}>
              <Component
                {...this.props}
              />
            </div>
          </div>
        </div>
      );
    }
  };

