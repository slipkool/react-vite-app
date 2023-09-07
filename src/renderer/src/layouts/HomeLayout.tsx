import Sidebar from '@renderer/components/Sidebar Section/Sidebar'

interface HomeLayourProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayourProps): React.JSX.Element => {
  return (
    <div className="dashboard flex">
      <div className="dashboardContainer flex">
        <Sidebar />
        <>{children}</>
      </div>
    </div>
  )
}

export default HomeLayout
