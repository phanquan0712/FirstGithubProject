import React from "react";
import './table.scss'
import useFecth  from '../customize/fecth';
import moment from 'moment';
const Table = () => {
    let date = new Date();
    let curDate = moment(date).format('YYYY-MM-DD');
    let piorDate = moment(curDate).subtract(30, 'days').format('YYYY-MM-DD');
    const {data , isLoading, isError} = useFecth(`https://api.covid19api.com/country/vietnam?from=${piorDate}T00:00:00Z&to=${curDate}T00:00:00Z`);
    let newData = new Array;
    for(let i = data.length - 1; i >= 0; i--){
        newData.push(data[i]);
    }
    console.log(newData);
    return (
        <>
            <h2>Covid 19 API VIET NAM</h2>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newData && newData.length > 0 && isLoading === false ?
                            newData.map(
                                (item, index) => (
                                    <tr key={index}>
                                        <td>{moment(item.Date).format('DD/MM/YYYY')}</td>
                                        <td>{item.Confirmed}</td>
                                        <td>{item.Active}</td>
                                        <td>{item.Deaths}</td>
                                        <td>{item.Recovered}</td>
                                    </tr>
                                )
                            )
                            :
                            isError === false ?
                                <tr>
                                    <td colSpan="5" style={{ 'textAlign': 'center' }}>Loading...</td>
                                </tr>
                                :
                                <tr>
                                    <td colSpan="5" style={{ 'textAlign': 'center' }}>Something Wrong...</td>
                                </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;