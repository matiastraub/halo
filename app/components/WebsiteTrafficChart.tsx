import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/common/card'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { trafficData } from '../data/chartData'

const WebsiteTrafficChart = () => {
  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Website Traffic</CardTitle>
        <CardDescription>Real-time visitor activity throughout the day</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#06b6d4"
              fillOpacity={0.6}
              fill="url(#colorGradientArea)"
            />
            <defs>
              <linearGradient id="colorGradientArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default WebsiteTrafficChart
