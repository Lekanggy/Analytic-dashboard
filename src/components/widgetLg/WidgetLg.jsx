import './widgetLg.css'

const WidgetLg = () => {
    const Button = ({ type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1488869154849-3547ed9ed8dd?dpr=1&auto=compress,format&fit=crop&w=1534&h=&q=80&cs=tinysrgb&crop="
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Sususy Cally</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">N50000</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1488869154849-3547ed9ed8dd?dpr=1&auto=compress,format&fit=crop&w=1534&h=&q=80&cs=tinysrgb&crop="
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Sususy Cally</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">N50000</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1488869154849-3547ed9ed8dd?dpr=1&auto=compress,format&fit=crop&w=1534&h=&q=80&cs=tinysrgb&crop="
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Sususy Cally</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">N50000</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1488869154849-3547ed9ed8dd?dpr=1&auto=compress,format&fit=crop&w=1534&h=&q=80&cs=tinysrgb&crop="
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Sususy Cally</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">N50000</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
