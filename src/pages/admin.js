import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../../layout/AdminLayout"
import Orden from '../../components/Orden'

export const admin = () => {
    
    const fetcher = () => axios('api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})
    
  return (
    <AdminLayout pagina={'Admin'}>
        
        {data && data.length ? data.map(orden =>
            <Orden
                key={orden.id}
                orden={orden}
                />
            ) : 'No hay pedidos todavia'}
    </AdminLayout>
  )
}

export default admin