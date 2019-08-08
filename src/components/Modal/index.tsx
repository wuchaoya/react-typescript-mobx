import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import shortid from 'shortid';
import './style.less';
import File from './File';

export interface ButtonPropTypes {
  onClick?: React.MouseEventHandler<HTMLElement>,
  label?: string,
  isStyleDefault?: boolean,
  isStyleCancel?: boolean,
  isStyleDestructive?: boolean,
}

export interface OptionsPropTypes extends Omit<React.MouseEventHandler<HTMLElement>, 'onOverlayClicked'> {
  title?: string,
  message?: string,
  buttons?: React.ReactNode[] // 按钮组
  closeButton?: boolean
  animated?: boolean
  centered?: boolean
  large?: boolean
  overlayClose?: boolean
  keyboardClose?: boolean
  onOverlayClicked?: () => void
  onEscapeKeyDown?: () => void
  onShow?: () => void
  onHide?: () => void
}

export interface ModalPropTypes {
  isModalVisible: boolean
  hide: () => void
  options: OptionsPropTypes
  children: React.ReactNode,
}

const Button: React.FC<ButtonPropTypes> = props => {
  
  const {onClick, label, isStyleDefault = false, isStyleCancel = false, isStyleDestructive = false} = props;
  const buttonClass = classNames({
    'modali-button': true,
    'modali-button-cancel': isStyleCancel,
    'modali-button-default': isStyleDefault,
    'modali-button-destructive': isStyleDestructive,
  });
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
    >
      {label}
    </button>
  );
};



const Modal: React.FC<ModalPropTypes> = ({isModalVisible, hide, options, children}) => {
  
  
  // 点击蒙层是否关闭处理
  function handleOverlayClicked( e: any ) {
    if (e.target.className !== 'modali-wrapper') {
      return;
    }
    if (options === undefined) {
      hide();
    } else {
      if (options.overlayClose !== false) {
        hide();
      }
      if (options.onOverlayClicked) {
        options.onOverlayClicked();
      }
    }
  }
  
  function renderBody() {
    if (children) {
      return children;
    } if (options && options.message) {
      return (
        <div className="modali-body-style">
          {options.message}
        </div>
      );
    }
    return false;
  }
  
  function renderFooter() {
    const { buttons = [] } = options;
    return (
      <div className="modali-footer">
        {buttons.map((button: React.ReactNode) => (
          <React.Fragment
            key={shortid.generate()}
          >
            {button}
          </React.Fragment>
        ))}
      </div>
    );
  }
  
  const modaliWrapperClass = classNames({
    'modali-wrapper': true,
    'modali-wrapper-centered': options && options.centered,
  });
  
  const modaliClass = classNames({
    modali: true,
    'modali-size-large': options && options.large,
    'modali-size-regular': !options || (options && !options.large),
    'modali-animated modali-animation-fade-in': options && options.animated,
  });
  
  return isModalVisible ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modali-overlay" />
      <div className={modaliWrapperClass} aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={handleOverlayClicked}>
        <div className={modaliClass}>
          <div className="modali-content">
            {options !== undefined && options.closeButton === false ? null : (
              <div className="modali-header">
                {options !== undefined && options.title !== undefined && (
                  <div className="modali-title">
                    {options.title}
                  </div>
                )}
                <button type="button" className="modali-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            <div className="modali-body">
              {renderBody()}
            </div>
            {options && options.buttons && options.buttons.length > 0 && renderFooter()}
          </div>
        </div>
      </div>
    </React.Fragment>, document.body,
  ) : null;
};

const Modali = () => {};
Modali.Button = Button;
Modali.Modal = Modal;
Modali.File = File;
export default Modali;

export const useModali = (options: OptionsPropTypes ):
  [{
    isShown: boolean,
    isModalVisible: boolean,
    hide: () => void, options: OptionsPropTypes,
  } // 返回类型
 ,() => void] => {
  const [hasToggledBefore, setHasToggledBefore] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const isModalVisibleRef = useRef(isModalVisible);
  isModalVisibleRef.current = isModalVisible;
  let timeoutHack: NodeJS.Timeout | NodeJS.Timeout;
  
  function toggle() {
    timeoutHack = setTimeout(() => {
      setIsModalVisible(!isModalVisibleRef.current);
      clearTimeout(timeoutHack);
    }, 10);
    setIsShown(!isShown);
    setHasToggledBefore(true);
  }
  
  const handleKeyDown = (event: { keyCode: number; }) => {
    if (event.keyCode !== 27 || (options && options.keyboardClose === false)) return;
    toggle();
    if (options && options.onEscapeKeyDown) {
      options.onEscapeKeyDown();
    }
  }
  
  useEffect(() => {
    if (isShown) {
      if (options && options.onShow) {
        options.onShow();
      }
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modali-open');
    }
    if (!isShown && hasToggledBefore) {
      if (options && options.onHide) {
        options.onHide();
      }
      document.body.classList.remove('modali-open');
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [isShown, hasToggledBefore, options]);
  
  return [
    {
      isShown,
      isModalVisible,
      hide: toggle,
      options,
    },
    toggle,
  ];
};