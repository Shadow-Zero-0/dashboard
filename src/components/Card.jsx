import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

const Card = ({data,incrass,icon,subtitle,title,scheme}) => {
    const theme = useTheme() 
    return (
       
        <Paper sx={{
            flexGrow:1,
            minWidth:'277px',
            display:'flex', 
            alignItems:'center',
            justifyContent:'space-between'
            }}>
    <Stack sx={{
        p:1.5,
        gap:1
    }}>
        {icon}
        <Typography variant="body1" >{title}</Typography>
         <Typography variant="body1" >{subtitle}</Typography>
    </Stack>
    <Stack alignItems={'center'} sx={{
               p:1.5,
               gap:0.5
    }}>
        <Box  sx={{height:'80px',width:'80px', }}>
        <ResponsivePie
        
        data={data}
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
        
        
        }}
        enableArcLinkLabels={false}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLabels={false}
        colors={{ scheme: scheme }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
    
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
       
        
    />
        </Box>
        <Typography variant="body1" >{incrass} %</Typography>
        </Stack>
        </Paper>
    );
}

export default Card;
