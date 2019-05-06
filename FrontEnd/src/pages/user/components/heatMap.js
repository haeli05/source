import React from 'react'
import { Group } from '@vx/group'
import { genBins } from '@vx/mock-data'
import { scaleLinear } from '@vx/scale'
import { HeatmapCircle } from '@vx/heatmap'
import { extent, min, max } from 'd3-array'

const data = genBins(52, 7)

// accessors
const x = d => d.bin
const y = d => d.bins
const z = d => d.count
let settings = {
  width: 500,
  height: 120,
  events: false,
  margin: {
    top: 10,
    left: 20,
    right: 20,
    bottom: 20
  }
}

// bounds
// const size =  settings.width > (settings.margin.left + settings.margin.right)
//  ? settings.width - settings.margin.left - settings.margin.right
//  : settings.width;
const xMax = settings.width - settings.margin.left
// const yMax = settings.height - settings.margin.bottom;
const dMin = min(data, d => min(y(d), x))
const dMax = max(data, d => max(y(d), x))
const dStep = dMax / data[0].bins.length
// const bwidth = xMax / data.length;
// const bHeight = yMax / data[0].bins.length;
const colorMax = max(data, d => max(y(d), z))

// scales
const xScale = scaleLinear({
  range: [0, xMax],
  domain: extent(data, x)
})
const yScale = scaleLinear({
  /*  */
  range: [100, 1],
  domain: [dMin, dMax]
})
const colorScale = scaleLinear({
  range: ['#d0deed', '#5b9ee5'],
  domain: [0, colorMax]
})
// const colorScale2 = scaleLinear({
//  range: ['#122549', '#b4fbde'],
//  domain: [0, colorMax]
// });
const opacityScale = scaleLinear({
  range: [1, 1],
  domain: [0, colorMax]
})

class HeatMap extends React.Component {
  render () {
    if (settings.width < 10) return null
    return (
      <div className='HeatMapJS'>
        <svg width={settings.width} height={settings.height}>
          <rect
            x={0}
            y={0}
            width={settings.width}
            height={settings.height}
            rx={6}
            fill='white'
          />
          <Group top={settings.margin.top} >
            <HeatmapCircle
              data={data}
              xScale={xScale}
              yScale={yScale}
              colorScale={colorScale}
              opacityScale={opacityScale}
              radius={8.5}
              step={dStep}
              gap={4}
              onClick={data => event => {
                if (!settings.events) return
                alert(`clicked: ${JSON.stringify(data.bin)}`)
              }}
            />
          </Group>
        </svg>
      </div>
    )
  }
}

export default HeatMap
