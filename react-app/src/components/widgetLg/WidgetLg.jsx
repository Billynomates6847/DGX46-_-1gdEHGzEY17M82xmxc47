import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
           <h3 className="widgetLgTitle">Latest Transactions</h3>
           <table className="widgetLgTable">
               <tr className="widgetLgTr">
                   <th className="widgetLgTh">Customer</th>
                   <th className="widgetLgTh">Date</th>
                   <th className="widgetLgTh">Amount</th>
                   <th className="widgetLgTh">Status</th>
               </tr>

               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Billy No Mates</span>
                   </td>
                   
                   <td className="widgetLgDate">3 Dec 2021</td>
                   <td className="widgetLgAmount">£3.48</td>
                   <td className="widgetLgStatus"> <Button type="Approved"/> </td>
               </tr>

               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Neyrox</span>
                   </td>
                   
                   <td className="widgetLgDate">19 Nov 2021</td>
                   <td className="widgetLgAmount">£0.01</td>
                   <td className="widgetLgStatus"> <Button type="Declined"/> </td>
               </tr>

               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Pab</span>
                   </td>
                   
                   <td className="widgetLgDate">1 Dec 2021</td>
                   <td className="widgetLgAmount">£103.99</td>
                   <td className="widgetLgStatus"> <Button type="Pending"/> </td>
               </tr>
           </table>
        </div>
    )
}