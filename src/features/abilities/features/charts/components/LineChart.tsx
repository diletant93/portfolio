import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { trafficAccidentsData } from '../constants/chartsData';
import CustomTooltip from './CustomTooltip';
export default function LineChart() {

    return (
        <div className="flex-1 flex-center">
            <ResponsiveContainer width='100%' height='70%'>
                <AreaChart width={200} height={200} data={trafficAccidentsData}>
                    <YAxis />
                    <XAxis dataKey='name' />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{
                            padding: '10px',
                            fontSize: '14px',
                            textAlign:'right',
                            marginLeft:'16px'
                        }}
                        iconSize={10}
                    />
                    <CartesianGrid strokeDasharray='5 5' />
                    <Area
                        dataKey="carAccidents"
                        name="Car accidents"
                        type="monotone"
                        stroke="#1a73e8"
                        fill="rgba(26, 115, 232, 0.3)"
                        stackId="1"
                    />
                    <Area
                        dataKey="bikeAccidents"
                        name="Bike accidents"
                        type="monotone"
                        stroke="#ea4335"
                        fill="rgba(234, 67, 53, 0.3)"
                        stackId="1"
                    />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
