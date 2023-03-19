import { useEffect, useRef, useMemo } from 'react'
import { useTheme } from 'context/themeProvider'

import styled from 'styled-components'

export default function Wave() {
  const themeMode = useTheme()
  const canvasTarget = useRef(null)
  const currentMode = themeMode[0] === 'light'
  const slowness = 1
  const colorObject = useMemo(() => {
    return {
      foregroundLeftColor: currentMode
        ? 'rgba(102, 51, 255, 0.8)'
        : 'rgba(255, 255, 255, 0.3)',
      foregroundRightColor: currentMode
        ? 'rgba(0, 153, 204, 0.3)'
        : 'rgba(255, 255, 255, 0.8)',
      backgroundLeftColor: currentMode
        ? 'rgba(102, 51, 255, 0.3)'
        : 'rgba(255, 255, 255, 0.5)',
      backgroundRightColor: currentMode
        ? 'rgba(0, 153, 204, 0.8)'
        : 'rgba(255, 255, 255, 0.3)',
    }
  }, [currentMode])

  useEffect(() => {
    const canvas = canvasTarget.current
    const canvasWidth = window.innerWidth
    const canvasHeight = window.innerHeight * 0.3
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const ctx = canvas.getContext('2d')
    const pi = Math.PI
    let time = 0

    const getWaveHeights = (
      revsPerCanvas,
      waveSpeed,
      waveHeight,
      time,
      startAngle
    ) => {
      var amplitude = (waveHeight * canvasHeight) / 4
      var frequency = revsPerCanvas / canvasWidth
      var heightArray = []
      waveSpeed /= slowness
      for (let x = 0; x <= canvasWidth; x += 1) {
        var y =
          Math.sin(x * frequency * 2 * pi - waveSpeed * time + startAngle) *
          amplitude
        heightArray.push(y)
      }
      return heightArray
    }

    const drawing = (summedHeights, colorLeft, colorRight) => {
      ctx.beginPath()
      ctx.moveTo(0, 0)

      for (let x = 0; x <= canvasWidth; x += 1) {
        ctx.lineTo(x, canvasHeight / 2 + summedHeights[x])
      }
      ctx.lineTo(canvasWidth, canvasHeight)
      ctx.lineTo(0, canvasHeight)
      ctx.closePath()
      var gradient = ctx.createLinearGradient(0, 0, canvasWidth, 0)
      gradient.addColorStop(0, colorLeft)
      gradient.addColorStop(1, colorRight)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      var wave1B = getWaveHeights(1, 0.01, 1, time, 3)
      var wave2B = getWaveHeights(2, 0.005, 0.5, time, 3.5)
      var sumWavesB = wave1B.map((value, index) => value + wave2B[index])
      drawing(
        sumWavesB,
        colorObject.backgroundLeftColor,
        colorObject.backgroundRightColor
      )

      var wave1F = getWaveHeights(1, 0.007, 0.75, time, 0)
      var wave2F = getWaveHeights(2, 0.003, 0.25, time, 0.5)
      var sumWavesF = wave1F.map((value, index) => value + wave2F[index])
      drawing(
        sumWavesF,
        colorObject.foregroundLeftColor,
        colorObject.foregroundRightColor
      )
      time++
      requestAnimationFrame(loop)
    }

    loop()
  }, [colorObject])

  return (
    <CanvasWrapper>
      <canvas ref={canvasTarget}></canvas>
    </CanvasWrapper>
  )
}

const CanvasWrapper = styled.div`
  canvas {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`
