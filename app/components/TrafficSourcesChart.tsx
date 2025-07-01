import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './common/card'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { pieData } from '../data/chartData'

const TrafficSourcesChart = () => {
  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Traffic Sources</CardTitle>
        <CardDescription>Visitor distribution by device type</CardDescription>
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
              {pieData.map((entry, index) => (
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
          {pieData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">
                {item.name}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TrafficSourcesChart
