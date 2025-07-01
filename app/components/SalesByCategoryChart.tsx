import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/common/card'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { salesData } from '../data/chartData'

const SalesByCategoryChart = () => {
  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Sales by Category</CardTitle>
        <CardDescription>Performance across different product categories</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="category" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="sales" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.6} />
              </linearGradient>
            </defs>
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default SalesByCategoryChart
