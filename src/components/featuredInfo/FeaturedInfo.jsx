import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">N5000</span>
                    <span className="featuredMoneyRate">-90.50 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">N4000</span>
                    <span className="featuredMoneyRate">-10.50 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">N1000</span>
                    <span className="featuredMoneyRate">+100.50 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
