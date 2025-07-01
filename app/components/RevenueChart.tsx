import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/common/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { revenueData } from '../data/chartData.ts'

const RevenueChart = () => {
  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Revenue & Profit Trends
        </CardTitle>
        <CardDescription>Monthly revenue and profit over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default RevenueChart
