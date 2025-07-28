'use client'
import { useEffect, useState } from 'react'
import KPICards from '../../components/KPICards'
import SalesByCategoryChart from 'app/components/dashboard/SalesByCategoryChart'
import TrafficSourcesChart from 'app/components/dashboard/TrafficSourcesChart'
import WebsiteTrafficChart from '../../components/WebsiteTrafficChart'
import PerformanceSummary from '../../components/PerformanceSummary'
import OrdersTable from '../../components/OrdersTable'
import { getPieChartData, getResultados } from 'app/lib/candidatos'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [pie, setPie] = useState<{ candidato: string; votos: number; rate?: number }[]>([])
  const [resultados, setResultados] = useState<{ candidato: string; votos: number }[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/ultravox/encuesta')
        const data = await res.json()
        setData(data.results || [])
        const results =
          data.results.map((item: { shortSummary: string }) => item?.shortSummary) || []
        const getRes = getResultados(results || [])
        setResultados(getRes)
        const pieData = getPieChartData(getRes)
        setPie(pieData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
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

        <div className="mb-8">
          <SalesByCategoryChart data={resultados as { candidato: string; votos: number }[]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TrafficSourcesChart data={pie} />
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
