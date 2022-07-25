import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map( dataPoint=> dataPoint.value )
    const tolalMax = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map( dataPoint =>
                <ChartBar
                    key = {dataPoint.label}
                    value = {dataPoint.value}
                    maxValue = {tolalMax}
                    label = {dataPoint.label}
                />
            )}
        </div>
    );
}

export default Chart;