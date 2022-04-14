// https://www.chartjs.org/


window.function = function (data, labels, width, height, title, tooltip, unit) {

  // data
  data = data.value;
  labels = labels.value;
  width = width.value;
  height = height.value;
  title = title.value;
  tooltip = tooltip.value;
  unit = unit.value ?? "";

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-trendline"></script>
  </head>
  <body>
  <div class="chart-container" style="position: relative; height:${height}vh; width:${width}vw">
  <canvas id="gr1"></canvas>
</div>
    <script>

const image = new Image(20,20);
image.src = "https://i.imgur.com/Bo7rl1y.png";

    let config = {
  "type": "line",
  "data": {
    "datasets": [
      {
        "label": "TPO",
        "backgroundColor": "#55B6C3",
        "borderColor": "#55B6C3",
        "data": [${data}],
	trendlineLinear: {
	style: "rgba(255,105,180, .8)",
	lineStyle: "dotted",
	width: 2
	},
        "fill": false,
        "spanGaps": false,
        "lineTension": 0,
        "pointRadius": 3,
        "pointHoverRadius": 3,
        "pointStyle": image,
        "borderDash": [
          0,
          0
        ],
        "barPercentage": 0.9,
        "categoryPercentage": 0.8,
        "type": "line",
        "borderWidth": 3,
        "hidden": false,
        "yAxisID": "Y1"
      }
    ],
    "labels": [${labels}]
  },
  "options": {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            bottom: 20
        }
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                return '${tooltip}: ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '${unit}';
            }
        }
    },
    "title": {
      "display": true,
      "text": "${title}",
      "position": "top",
      "fontSize": 20,
      "fontFamily": "BlinkMacSystemFont",
      "fontColor": "#111111",
      "fontStyle": "700",
      "padding": 20,
      "lineHeight": 1.2
    },
    "legend": {
      "display": false,
      "position": "top",
      "align": "center",
      "fullWidth": true,
      "reverse": false,
      "labels": {
        "fontSize": 12,
        "fontFamily": "sans-serif",
        "fontColor": "#666666",
        "fontStyle": "normal",
        "padding": 10
      }
    },
    "scales": {
      "xAxes": [
        {
          "id": "X1",
          "display": true,
          "position": "bottom",
          "type": "category",
          "stacked": false,
          "time": {
            "unit": false,
            "stepSize": 1,
            "displayFormats": {
              "millisecond": "h:mm:ss.SSS a",
              "second": "h:mm:ss a",
              "minute": "h:mm a",
              "hour": "hA",
              "day": "MMM D",
              "week": "ll",
              "month": "MMM YYYY",
              "quarter": "[Q]Q - YYYY",
              "year": "YYYY"
            }
          },
          "distribution": "linear",
          "gridLines": {
            "display": true,
            "color": "rgba(0, 0, 0, 0.1)",
            "borderDash": [
              0,
              0
            ],
            "lineWidth": 1,
            "drawBorder": true,
            "drawOnChartArea": true,
            "drawTicks": true,
            "tickMarkLength": 10,
            "zeroLineWidth": 1,
            "zeroLineColor": "rgba(0, 0, 0, 0.25)",
            "zeroLineBorderDash": [
              0,
              0
            ]
          },
          "angleLines": {
            "display": true,
            "color": "rgba(0, 0, 0, 0.1)",
            "borderDash": [
              0,
              0
            ],
            "lineWidth": 1
          },
          "pointLabels": {
            "display": true,
            "fontColor": "#666",
            "fontSize": 10,
            "fontStyle": "normal"
          },
          "ticks": {
            beginAtZero: true,
            "display": true,
            "fontSize": 10,
            "fontFamily": "sans-serif",
            "fontColor": "#666666",
            "fontStyle": "normal",
            "padding": 0,
            "stepSize": null,
            "minRotation": 0,
            "maxRotation": 50,
            "mirror": false,
            "reverse": false
          },
          "scaleLabel": {
            "display": false,
            "labelString": "Axis label",
            "lineHeight": 1.2,
            "fontColor": "#666666",
            "fontFamily": "sans-serif",
            "fontSize": 12,
            "fontStyle": "normal",
            "padding": 4
          }
        }
      ],
      "yAxes": [
        {
          "id": "Y1",
          "display": true,
          "position": "left",
          "type": "linear",
          "stacked": false,
          "time": {
            "unit": false,
            "stepSize": 1,
            "displayFormats": {
              "millisecond": "h:mm:ss.SSS a",
              "second": "h:mm:ss a",
              "minute": "h:mm a",
              "hour": "hA",
              "day": "MMM D",
              "week": "ll",
              "month": "MMM YYYY",
              "quarter": "[Q]Q - YYYY",
              "year": "YYYY"
            }
          },
          "distribution": "linear",
          "gridLines": {
            "display": true,
            "color": "rgba(0, 0, 0, 0.1)",
            "borderDash": [
              0,
              0
            ],
            "lineWidth": 1,
            "drawBorder": true,
            "drawOnChartArea": true,
            "drawTicks": true,
            "tickMarkLength": 10,
            "zeroLineWidth": 1,
            "zeroLineColor": "rgba(0, 0, 0, 0.25)",
            "zeroLineBorderDash": [
              0,
              0
            ]
          },
          "angleLines": {
            "display": true,
            "color": "rgba(0, 0, 0, 0.1)",
            "borderDash": [
              0,
              0
            ],
            "lineWidth": 1
          },
          "pointLabels": {
            "display": true,
            "fontColor": "#666",
            "fontSize": 10,
            "fontStyle": "normal"
          },
          "ticks": {
            beginAtZero: true,
            "display": true,
            "fontSize": 12,
            "fontFamily": "sans-serif",
            "fontColor": "#666666",
            "fontStyle": "normal",
            "padding": 0,
            "stepSize": null,
            "minRotation": 0,
            "maxRotation": 50,
            "mirror": false,
            "reverse": false
          },
          "scaleLabel": {
            "display": false,
            "labelString": "Axis label",
            "lineHeight": 1.2,
            "fontColor": "#666666",
            "fontFamily": "sans-serif",
            "fontSize": 12,
            "fontStyle": "normal",
            "padding": 4
          }
        }
      ]
    },
    "plugins": {
    legend: {
      display: true
    },
      "datalabels": {
        "display": false,
        "align": "center",
        "anchor": "center",
        "backgroundColor": "#eee",
        "borderColor": "#ddd",
        "borderRadius": 6,
        "borderWidth": 1,
        "padding": 4,
        "color": "#666666",
        "font": {
          "family": "sans-serif",
          "size": 10,
          "style": "normal"
        }
      },
      "tickFormat": ""
    },
  }
}
;

    var canv = document.getElementById('gr1');
    var ctx = canv.getContext('2d');
    let graph1 = new Chart(ctx, config);
    </script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
