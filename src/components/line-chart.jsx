import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const LineChart = ({category, data, name, xaxis, yaxis, isLoaded  }) => {

    const chartConfigs = ({
        type: 'mscombi2d',// The chart type
        // width: '700', // Width of the chart
        // height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            "chart": {
                "caption": name,
                "xAxisname": xaxis,
                "yAxisName": yaxis,
                "divlineColor": "#999999",
                "divLineIsDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5",
                "theme": "fusion"
            },
            "categories": [{
                "category": category
            }],
            "dataset": [{
                "data": data
            }
        ],
        }
    }
    )

    if (!isLoaded) {
        return <>LOADING</>;
    } else  {

        return (
                <ReactFC
                    {...chartConfigs} />
        );
    }
}

export default LineChart;