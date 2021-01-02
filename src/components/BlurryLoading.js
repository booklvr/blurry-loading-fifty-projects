import React, { Fragment, useState, useEffect } from 'react'

const BlurryLoading = () => {
  const [load, setLoad] = useState(0)

  let interval

  useEffect(() => {
    loadImage()
  }, [])

  const loadImage = () => {
    interval = setInterval(() => {
      setLoad((oldValue) => {
        if (oldValue > 99) {
          clearInterval(interval)
        }
        const newValue = oldValue + 1
        return newValue
      })
    }, 30)
  }

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  return (
    <Fragment>
      <section
        className='bg'
        style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}
      ></section>
      <div
        className='loading-text'
        style={{ opacity: `${scale(load, 0, 100, 1, 0)}` }}
      >
        {load}%
      </div>
    </Fragment>
  )
}

export default BlurryLoading
