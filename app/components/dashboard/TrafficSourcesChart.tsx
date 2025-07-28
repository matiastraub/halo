import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from 'app/components/common/card'
import { CandidatoPieChartData } from 'app/types/chartData'

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const TrafficSourcesChart = (props: { data: CandidatoPieChartData[] }) => {
  const pieData = props.data
  console.log('%c pieData', 'color: orange', pieData)
  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Preferencia</CardTitle>
        <CardDescription>Preferencia de los candidatos</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center space-x-4 mt-4">
          {pieData.map((item, index: number) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">
                {item.candidato}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TrafficSourcesChart
