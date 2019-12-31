import { getFormated, getStackMap } from 'v-charts/src/utils'
import 'echarts/lib/chart/line'
import Core from './core'
// import Core from 'v-charts/src/core'

// import { isArray } from 'utils-lite'

function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]'
}

function getLineXAxis(args) {
  const { dimension, rows, xAxisName, axisVisible, xAxisType, xAxisFormatter } = args;
  return dimension.map((item, index) => ({
    type: xAxisType,
    nameLocation: 'middle',
    nameGap: 22,
    name: xAxisName[index] || '',
    axisTick: { show: true, lineStyle: { color: '#eee' } },
    axisLabel: { formatter: xAxisFormatter || undefined },
    data: rows.map(row => row[item]),
    show: axisVisible
  }))
}

function getLineSeries(args) {
  const {
    rows,
    axisSite,
    metrics,
    area,
    stack,
    nullAddZero,
    labelMap,
    label,
    itemStyle,
    lineStyle,
    areaStyle,
    dimension,
    multipleYAxis
  } = args;
  let series = [];
  const dataTemp = {};
  const stackMap = stack && getStackMap(stack);
  metrics.forEach(item => {
    dataTemp[item] = []
  });
  rows.forEach(row => {
    metrics.forEach(item => {
      let value = null;
      if (row[item] != null) {
        value = row[item]
      } else if (nullAddZero) {
        value = 0
      }
      dataTemp[item].push([row[dimension[0]], value])
    })
  });
  let count = 0;
  metrics.forEach(item => {
    let seriesItem = {
      name: labelMap[item] != null ? labelMap[item] : item,
      type: 'line',
      data: dataTemp[item]
    };

    if (area) seriesItem.areaStyle = { normal: {} };
    if (axisSite.right) {
      seriesItem.yAxisIndex = ~axisSite.right.indexOf(item) ? 1 : 0
    }

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item];

    if (label) seriesItem.label = label;
    if (itemStyle) seriesItem.itemStyle = itemStyle;
    if (lineStyle) seriesItem.lineStyle = lineStyle;
    if (areaStyle) seriesItem.areaStyle = areaStyle;

    if (multipleYAxis) {
      if (count) seriesItem.yAxisIndex = count;
    }
    count++;
    series.push(seriesItem)
  });
  return series
}

function getLineYAxis(args) {
  const {
    yAxisName,
    yAxisPosition,
    yAxisType,
    axisVisible,
    scale,
    min,
    max,
    digit,
    yAxisFormatter,
    multipleYAxis,
  } = args;
  const yAxisBase = {
    type: 'value',
    axisTick: {
      show: false
    },
    show: axisVisible
  };

  let yAxis = [];
  if (multipleYAxis) {
    let count_left = 0;
    let count_right = 0;

    for (let i = 0; i < yAxisName.length; i++) {
      if (typeof yAxisFormatter == 'function') {
        yAxis[i] = Object.assign({}, yAxisBase, {
          axisLabel: {
            formatter(val, index) {
              return yAxisFormatter(val, index, yAxisType[i]);
            }
          }
        })
      } else if (yAxisType[i]) {
        yAxis[i] = Object.assign({}, yAxisBase, {
          axisLabel: {
            formatter(val) {
              return getFormated(val, yAxisType[i], digit)
            }
          }
        })
      } else {
        yAxis[i] = Object.assign({}, yAxisBase)
      }
      yAxis[i].name = yAxisName[i] || '';
      yAxis[i].scale = scale[i] || false;
      yAxis[i].min = min[i] || null;
      yAxis[i].max = max[i] || null;
      if (yAxisPosition.length > 0) {
        yAxis[i].position = yAxisPosition[i] || 'left';
        if (yAxis[i].position === 'left') {
          yAxis[i].offset = (count_left - 1) * 50;
          count_left++;
        } else if (yAxisPosition[i] === 'right') {
          yAxis[i].offset = (count_right - 1) * 50;
          count_right++;
        } else {
          // wrong value, default to left
          console.error('yAxisPosition数据错误', yAxisPosition);
        }
      } else {
        if (i < 1) {
          yAxis[i].position = 'left';
        } else {
          yAxis[i].position = 'right';
          yAxis[i].offset = (i - 1) * 50;
        }
      }
    }
  } else {
    for (let i = 0; i < 2; i++) {
      if (yAxisType[i]) {
        yAxis[i] = Object.assign({}, yAxisBase, {
          axisLabel: {
            formatter(val) {
              return getFormated(val, yAxisType[i], digit)
            }
          }
        })
      } else {
        yAxis[i] = Object.assign({}, yAxisBase)
      }
      yAxis[i].name = yAxisName[i] || '';
      yAxis[i].scale = scale[i] || false;
      yAxis[i].min = min[i] || null;
      yAxis[i].max = max[i] || null
    }
  }
  return yAxis
}

function getLineTooltip(args) {
  const { axisSite, yAxisType, digit, labelMap, tooltipFormatter } = args;
  const rightItems = axisSite.right || [];
  const rightList = labelMap
    ? rightItems.map(item => {
      return labelMap[item] === undefined ? item : labelMap[item]
    })
    : rightItems;
  return {
    trigger: 'axis',
    formatter(items) {
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }
      let tpl = [];
      const { name, axisValueLabel } = items[0];
      const title = name || axisValueLabel;
      tpl.push(`${title}<br>`);
      items.forEach(({ seriesName, data, marker }) => {
        let showData;
        const type = ~rightList.indexOf(seriesName) ? yAxisType[1] : yAxisType[0];
        const itemData = isArray(data) ? data[1] : data;
        showData = getFormated(itemData, type, digit);
        tpl.push(marker);
        tpl.push(`${seriesName}: ${showData}`);
        tpl.push('<br>')
      });
      return tpl.join('')
    }
  }
}

function getLegend(args) {
  const { metrics, legendName, labelMap } = args;
  if (!legendName && !labelMap) return { data: metrics };
  const data = labelMap
    ? metrics.map(item => (labelMap[item] == null ? item : labelMap[item]))
    : metrics;
  return {
    data,
    formatter(name) {
      return legendName[name] != null ? legendName[name] : name
    }
  }
}

const line = (columns, rows, settings, extra) => {
  rows = isArray(rows) ? rows : [];
  columns = isArray(columns) ? columns : [];
  const {
    axisSite = {},
    yAxisType = ['normal', 'normal'],
    xAxisType = 'category',
    yAxisPosition = [],
    dimension = [columns[0]],
    xAxisName = [],
    axisVisible = true,
    area,
    stack,
    scale = [false, false],
    min = [null, null],
    max = [null, null],
    nullAddZero = false,
    digit = 2,
    legendName = {},
    labelMap = {},
    label,
    itemStyle,
    lineStyle,
    areaStyle
  } = settings;
  const {
    tooltipVisible,
    legendVisible,
    tooltipFormatter,
    xAxisFormatter,
    yAxisFormatter,
    multipleYAxis,
  } = extra;

  let yAxisName;
  if (multipleYAxis) {
    yAxisName = columns.slice(1)
  } else {
    yAxisName = [settings.yAxisName];
  }

  let metrics = columns.slice();

  if (axisSite.left && axisSite.right) {
    metrics = axisSite.left.concat(axisSite.right)
  } else if (axisSite.left && !axisSite.right) {
    metrics = axisSite.left
  } else if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }

  const legend = legendVisible && getLegend({ metrics, legendName, labelMap });
  const tooltip = tooltipVisible && getLineTooltip({
    axisSite,
    yAxisType,
    digit,
    labelMap,
    xAxisType,
    tooltipFormatter
  });
  const xAxis = getLineXAxis({
    dimension,
    rows,
    xAxisName,
    axisVisible,
    xAxisType,
    xAxisFormatter
  });
  const yAxis = getLineYAxis({
    yAxisName,
    yAxisPosition,
    yAxisType,
    axisVisible,
    scale,
    min,
    max,
    digit,
    yAxisFormatter,
    multipleYAxis
  });
  const series = getLineSeries({
    rows,
    axisSite,
    metrics,
    area,
    stack,
    nullAddZero,
    labelMap,
    label,
    itemStyle,
    lineStyle,
    areaStyle,
    xAxisType,
    dimension,
    multipleYAxis,
  });
  return { legend, xAxis, series, yAxis, tooltip }
};

export default Object.assign({}, Core, {
  name: 'VeLineMultiple',
  data() {
    this.chartHandler = line;
    return {}
  }
})
