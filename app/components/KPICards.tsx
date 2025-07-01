'use client'
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card'
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, BarChart } from 'lucide-react'

const KPICards = () => {
  //const { t } = useTranslation()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
          <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
            <DollarSign className="h-4 w-4 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">$561,000</div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+12.5% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">24,582</div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+8.2% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
          <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
            <ShoppingCart className="h-4 w-4 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">12,847</div>
          <div className="flex items-center text-sm text-red-600 mt-1">
            <TrendingDown className="h-3 w-3 mr-1" />
            <span>-2.1% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
          <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
            <BarChart className="h-4 w-4 text-orange-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">3.24%</div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+0.3% from last month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default KPICards
