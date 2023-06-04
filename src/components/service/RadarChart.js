// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/radar
import { ResponsiveRadar } from '@nivo/radar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const RadarChart = ({ answer }) => {

    console.log(answer)
    const data = [
        {
            "skill": "열정",
            "value": answer ? (answer[0] ? answer[0] : 0) : 0,
        },
        {
            "skill": "협업능력",
            "value": answer ? (answer[1] ? answer[1] : 0) : 0,
        },
        {
            "skill": "도전정신",
            "value": answer ? (answer[2] ? answer[2] : 0) : 0,
        },
        {
            "skill": "문제해결",
            "value": answer ? (answer[3] ? answer[3] : 0) : 0,
        },
        {
            "skill": "리더십",
            "value": answer ? (answer[4] ? answer[4] : 0) : 0,
        },
        {
            "skill": "IT역량",
            "value": answer ? (answer[5] ? answer[5] : 0) : 0,
        },
    ]

    return (
        <div style={{ width: '350px', height: '300px', margin: '0 auto' }}>
            <ResponsiveRadar
                data={data}
                keys={['value']}
                indexBy="skill"
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                // borderColor={{ from: 'color' }}
                borderColor="blue"
                gridLabelOffset={30}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                // colors={{ scheme: 'nivo' }}
                colors="blue"
                blendMode="multiply"
                motionConfig="wobbly"
            // legends={[
            //     {
            //         anchor: 'top-left',
            //         direction: 'column',
            //         translateX: -50,
            //         translateY: -40,
            //         itemWidth: 80,
            //         itemHeight: 20,
            //         itemTextColor: '#999',
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemTextColor: '#000'
            //                 }
            //             }
            //         ]
            //     }
            // ]}
            />
        </div>
    );
}

export default RadarChart;