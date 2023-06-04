import React from "react";
import styled from "styled-components";
// import barChart from "../../asset/Section.png";
// import pieChart from "../../asset/graph2.png";
import Barchart from "./BarChart";
import RadarChart from "./RadarChart";

const ChartBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .plot-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
    }
    .plot-box{
        display: flex;
        flex-direction: row;
    }
`

const Chart = () => {
    return (
        <ChartBox>
            <div className="plot-text">
                지원자님은 긍정적 마인드가 돋보여요!
            </div>
            <div className="plot-box">
                <Barchart />
                <RadarChart />
                {/* <Piechart /> */}
                {/* <img src={barChart} alt="막대차트" width="250px" /> */}
                {/* <img src={pieChart} alt="원형차트" width="250px" /> */}
            </div>
        </ChartBox>
    )
}

export default Chart;