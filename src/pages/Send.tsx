import React, { useEffect, useRef, Fragment, useCallback, useState } from 'react'
import Pressure from 'pressure'
import { useSvgDrawing } from 'react-hooks-svgdrawing'
const Sketchbook = () => {
  const [divRef, { instance, changePenColor, changePenWidth, getSvgXML, download, undo, clear }] = useSvgDrawing({
    penWidth: 3,
    penColor: '#000',
  })
  const [penMode, setPenMode] = useState<string>('normal')
  const [penWidth, setPenWidth] = useState<number>(5)
  const [penThinnerWidth, setPenThinnerWidth] = useState<number>(0)
  // -----------------------------------------------
  const handlePenWidth = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPenWidth(Number(e.target.value))
      changePenWidth(Number(e.target.value))
    },
    [changePenWidth]
  )
  // -----------------------------------------------
  const handleChangeMode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPenMode(e.target.value)
  }, [])

  // -----------------------------------------------
  const handleClickDownload = useCallback(
    (ext: 'svg' | 'png' | 'jpg') => () => {
      download(ext)
    },
    [download]
  )
  const pressureChange = useCallback(
    (force: any, event: any) => {
      setPenThinnerWidth(30 - Math.floor(force * 40))
    },
    [setPenThinnerWidth]
  )

  useEffect(() => {
    if (penMode === 'normal') return

    const stopId = setInterval(() => {
      if (penMode == 'thinner') {
        changePenWidth(penThinnerWidth)
      }
    }, (instance && instance.delay) || 20)
    return () => clearInterval(stopId)
  }, [penMode, changePenWidth, changePenColor, instance, penThinnerWidth])

  // Pressure -> https://github.com/stuyam/pressure
  useEffect(() => {
    if (!divRef.current) return
    Pressure.set(divRef.current, {
      change: pressureChange,
    })
  }, [divRef, pressureChange])
  return (
    <>
      <fieldset>
        <label>
          <input type="checkbox" checked={penMode === 'normal'} value="normal" onChange={handleChangeMode} />
          Normal pen.
        </label>
        <label>
          <input type="checkbox" checked={penMode === 'thinner'} value="thinner" onChange={handleChangeMode} />
          Pen becoming thinner.
        </label>

        {['normal'].includes(penMode) && (
          <div>
            pen width
            <input type="range" value={penWidth} min={1} max={50} onChange={handlePenWidth} />
          </div>
        )}
      </fieldset>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flexWrap',
        }}
      >
        <div>
          <div
            ref={divRef}
            style={{
              width: 300,
              height: 600,
              border: '1px solid #eee',
              margin: 'auto',
            }}
          />
          <button onClick={undo}>Undo</button>
          <button onClick={clear}>Clear</button>
          <button onClick={handleClickDownload('svg')}>Download SVG</button>
          <button onClick={handleClickDownload('png')}>Download PNG</button>
          <button onClick={handleClickDownload('jpg')}>Download JPG</button>
        </div>
        <div
          style={{
            fontSize: '8px',
          }}
        ></div>
      </div>
    </>
  )
}
function Send() {
  return (
    <div>
      <Sketchbook />
    </div>
  )
}

export default Send
