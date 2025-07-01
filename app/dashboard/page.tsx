'use client'
import KPICards from '../components/KPICards'
import RevenueChart from '../components/RevenueChart'
import SalesByCategoryChart from '../components/SalesByCategoryChart'
import TrafficSourcesChart from '../components/TrafficSourcesChart'
import WebsiteTrafficChart from '../components/WebsiteTrafficChart'
import PerformanceSummary from '../components/PerformanceSummary'
import OrdersTable from '../components/OrdersTable'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Panel de Control Analítico</h1>
          <p className="text-gray-600">Monitorear la performance del negocio</p>
        </div>

        <div className="mb-8">
          <KPICards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RevenueChart />
          <SalesByCategoryChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TrafficSourcesChart />
          <WebsiteTrafficChart />
        </div>

        <div className="mt-8">
          <PerformanceSummary />
        </div>

        <div className="mt-8">
          <OrdersTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
