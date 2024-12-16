
import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line'
const Linecom = ({isdash = false}) => {
    const theme = useTheme()
    const data =[
        {
          "id": "japan",
          "color": "hsl(51, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 230
            },
            {
              "x": "helicopter",
              "y": 127
            },
            {
              "x": "boat",
              "y": 116
            },
            {
              "x": "train",
              "y": 174
            },
            {
              "x": "subway",
              "y": 214
            },
            {
              "x": "bus",
              "y": 77
            },
            {
              "x": "car",
              "y": 261
            },
            {
              "x": "moto",
              "y": 0
            },
            {
              "x": "bicycle",
              "y": 160
            },
            {
              "x": "horse",
              "y": 67
            },
            {
              "x": "skateboard",
              "y": 267
            },
            {
              "x": "others",
              "y": 88
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(18, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 124
            },
            {
              "x": "helicopter",
              "y": 116
            },
            {
              "x": "boat",
              "y": 104
            },
            {
              "x": "train",
              "y": 284
            },
            {
              "x": "subway",
              "y": 108
            },
            {
              "x": "bus",
              "y": 13
            },
            {
              "x": "car",
              "y": 237
            },
            {
              "x": "moto",
              "y": 204
            },
            {
              "x": "bicycle",
              "y": 293
            },
            {
              "x": "horse",
              "y": 104
            },
            {
              "x": "skateboard",
              "y": 245
            },
            {
              "x": "others",
              "y": 103
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(13, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 150
            },
            {
              "x": "helicopter",
              "y": 213
            },
            {
              "x": "boat",
              "y": 159
            },
            {
              "x": "train",
              "y": 181
            },
            {
              "x": "subway",
              "y": 265
            },
            {
              "x": "bus",
              "y": 276
            },
            {
              "x": "car",
              "y": 115
            },
            {
              "x": "moto",
              "y": 175
            },
            {
              "x": "bicycle",
              "y": 53
            },
            {
              "x": "horse",
              "y": 285
            },
            {
              "x": "skateboard",
              "y": 288
            },
            {
              "x": "others",
              "y": 151
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(52, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 73
            },
            {
              "x": "helicopter",
              "y": 211
            },
            {
              "x": "boat",
              "y": 207
            },
            {
              "x": "train",
              "y": 257
            },
            {
              "x": "subway",
              "y": 280
            },
            {
              "x": "bus",
              "y": 179
            },
            {
              "x": "car",
              "y": 114
            },
            {
              "x": "moto",
              "y": 48
            },
            {
              "x": "bicycle",
              "y": 39
            },
            {
              "x": "horse",
              "y": 232
            },
            {
              "x": "skateboard",
              "y": 50
            },
            {
              "x": "others",
              "y": 68
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(57, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 118
            },
            {
              "x": "helicopter",
              "y": 133
            },
            {
              "x": "boat",
              "y": 99
            },
            {
              "x": "train",
              "y": 116
            },
            {
              "x": "subway",
              "y": 108
            },
            {
              "x": "bus",
              "y": 287
            },
            {
              "x": "car",
              "y": 104
            },
            {
              "x": "moto",
              "y": 63
            },
            {
              "x": "bicycle",
              "y": 283
            },
            {
              "x": "horse",
              "y": 235
            },
            {
              "x": "skateboard",
              "y": 9
            },
            {
              "x": "others",
              "y": 29
            }
          ]
        }
      ]
    return (
        <Box height={isdash?'280px' :'75vh'}>
          
             <ResponsiveLine
             theme={{
        
                "text": {
                    "fontSize": 11,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 12,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": "#dddddd",
                        "strokeWidth": 0
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": "#333333",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": "#333333",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": "#333333",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": "#000000",
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": "#000000",
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "symbol": {
                        "fill": "#000000",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    }
                },
                "tooltip": {
                    "wrapper": {},
                    "container": {
                        "background": "#ffffff",
                        "color": "#333333",
                        "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                }
            }
            }
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
          curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isdash?null:'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isdash?null:'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        colors={{ scheme: 'dark2' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        </Box>
    );
}

export default Linecom;
