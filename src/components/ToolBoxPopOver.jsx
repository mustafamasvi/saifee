import React from 'react';
import { FaClose } from 'react-icons/lib/fa/';
import Avatar from '../components/Avatar';

const ToolBoxPopOver = ({
  top,
  bottom,
  left,
  right,
  modifierClasses,
  description,
  comment,
  image,
  onClick }) => {
  return (
    <div
      className={`c-toolbox-popover ${modifierClasses}`}
      style={{
        bottom: bottom,
        top: top,
        left: left,
        right: right
      }}
    >
      <button
        className="c-toolbox-popover__close"
        onClick={onClick}
      >
        <FaClose />
      </button>
        <div className="c-toolbox-popover__text">
        <div className="c-toolbox-popover__description">
          <img src={image} className="c-toolbox-popover__image"/>
          <p
            dangerouslySetInnerHTML={{__html: description}}
          />
        </div>
        {comment &&
          <div className="c-toolbox-popover__footer">
            <div className="c-toolbox-popover__avatar">
              <Avatar
                modifierClasses="c-avatar--as-author"
              />
            </div>
            <span
              className="c-toolbox-popover__comment"
              dangerouslySetInnerHTML={{ __html: comment }}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default ToolBoxPopOver;