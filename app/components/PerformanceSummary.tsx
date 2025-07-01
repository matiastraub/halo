'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/common/card'
import { Badge } from '../components/common/badge'

const PerformanceSummary = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Performance Summary</CardTitle>
        <CardDescription className="text-blue-100">
          Your business is performing exceptionally well this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">98.5%</div>
            <div className="text-blue-100">Uptime</div>
            <Badge variant="secondary" className="mt-2 bg-green-500 text-white">
              Excellent
            </Badge>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2.3s</div>
            <div className="text-blue-100">Avg Response Time</div>
            <Badge variant="secondary" className="mt-2 bg-yellow-500 text-white">
              Good
            </Badge>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">92%</div>
            <div className="text-blue-100">Customer Satisfaction</div>
            <Badge variant="secondary" className="mt-2 bg-green-500 text-white">
              Outstanding
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PerformanceSummary
