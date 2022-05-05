import React, { useState } from 'react'
import './styles.module.scss'

function Tooltip(props) {
  const [visibleData, setVisibleData] = useState(false)
  const [childrenXPos, setChildrenXPos] = useState(0)
  const [childrenWidth, setChildrenWidth] = useState(0)
  const [tooltipWidth, setTooltipWidth] = useState(0)
  const [tooltipXPos, setTooltipXPos] = useState(0)
  const [tooltipFrameClassName, setTooltipFrameClassName] = useState(
    'tooltip__frame__data__top-middle'
  )
  const [compLeft, setCompLeft] = useState()

  const childrenMouseOver = () => {
    setVisibleData(true)
  }
  const childrenMouseOut = () => {
    setVisibleData(false)
  }

  return (
    <div
      className='tooltip__frame'
      onMouseEnter={childrenMouseOver}
      onMouseLeave={childrenMouseOut}
    >
      <div
        className={`tooltip__frame__data ${
          !visibleData ? 'hide' : ''
        } ${tooltipFrameClassName}`}
        ref={(el) => {
          if (!el) return
          setTooltipWidth(el.getBoundingClientRect().width / 2)
          setTooltipXPos(
            el.parentNode.getBoundingClientRect().top -
              el.getBoundingClientRect().height
          )
          let value = childrenXPos - tooltipWidth + childrenWidth
          if (value < 0) {
            value = childrenXPos
            setTooltipFrameClassName('tooltip__frame__data__top-left')
          }
          setCompLeft(value)
        }}
        style={{
          left: compLeft,
          top: tooltipXPos
        }}
      >
        <div className='tooltip__frame__data__cover'>{props.data}</div>
        <div className='tooltip__frame__data__arrow' />
      </div>
      <div
        className='tooltip__frame__children'
        ref={(el) => {
          if (!el) return
          setChildrenXPos(el.getBoundingClientRect().x)
          setChildrenWidth(el.getBoundingClientRect().width / 2)
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Tooltip
