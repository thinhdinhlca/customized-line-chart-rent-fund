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
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>
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
        "label": "${tooltip}",
        "backgroundColor": "#55B6C3",
        "borderColor": "#55B6C3",
        "data": [${data}],
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
        trendlineLinear: {
        style: "red",
        lineStyle: "solid",
        width: 2
        }
      }
    ],
    "labels": [${labels}]
  },
  "options": {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
     padding: {
           left: 5,
           right: 5,
           top: 15,
           bottom: 15
     }
    },
    "scales": {
        yAxis: {
          beginAtZero: true,
          type: 'linear',
          grace: '10%'
        },
        xAxis: {
          beginAtZero: true,
          offset: true,
          ticks: {
            maxTicksLimit: 7
          }
        }
    },
    plugins: {
    tooltip: {
        displayColors: false,
        callbacks: {
            label: function(context) {
                    return context.dataset.label + ": " + context.parsed.y + '%';
            }
        }
    },
    title: {
      "display": true,
      "text": "${title}",
      font: {
      "size": 20,
      "family": "BlinkMacSystemFont",
      "color": "#111111",
      "weight": "700",
      "lineHeight": 1.2
    }
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
    }
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
