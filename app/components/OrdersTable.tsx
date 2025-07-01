'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/common/card'
import { Badge } from '../components/common/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../components/common/table'
import { ArrowUpAZ, ArrowDownZA } from 'lucide-react'
import { useState } from 'react'
import { tableData } from '../data/chartData'

type SortField = 'customer' | 'amount' | 'status' | 'date'
type SortDirection = 'asc' | 'desc'

const OrdersTable = () => {
  const [sortField, setSortField] = useState<SortField | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortedData = [...tableData].sort((a, b) => {
    if (!sortField) return 0

    let aValue = a[sortField]
    let bValue = b[sortField]

    // Convert to comparable values
    if (sortField === 'amount') {
      aValue = Number(aValue)
      bValue = Number(bValue)
    } else if (sortField === 'date') {
      aValue = new Date(aValue as string).getTime()
      bValue = new Date(bValue as string).getTime()
    } else {
      aValue = String(aValue).toLowerCase()
      bValue = String(bValue).toLowerCase()
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null
    return sortDirection === 'asc' ? (
      <ArrowUpAZ className="h-4 w-4 ml-1" />
    ) : (
      <ArrowDownZA className="h-4 w-4 ml-1" />
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-500 text-white">Completed</Badge>
      case 'Processing':
        return <Badge className="bg-blue-500 text-white">Processing</Badge>
      case 'Pending':
        return <Badge className="bg-yellow-500 text-white">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">Recent Orders</CardTitle>
        <CardDescription>
          Latest customer orders and transaction details - Click column headers to sort
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => handleSort('customer')}
              >
                <div className="flex items-center">
                  Customer
                  {getSortIcon('customer')}
                </div>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Product</TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center">
                  Amount
                  {getSortIcon('amount')}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  Status
                  {getSortIcon('status')}
                </div>
              </TableHead>
              <TableHead
                className="text-right cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center justify-end">
                  Date
                  {getSortIcon('date')}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">
                  #{order.id.toString().padStart(3, '0')}
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="text-muted-foreground">{order.email}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell className="font-semibold">${order.amount.toLocaleString()}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell className="text-right">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default OrdersTable
