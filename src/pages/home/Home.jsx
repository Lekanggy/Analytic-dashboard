import Chart from '../../components/charts/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { userData } from '../../data'

import './home.css'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytic" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
