"use client"

import {LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer, Tooltip} from "recharts"

const data = [
    {value: 25, date:"2/20"},
    {value: 10, date:"2/21"},
    {value: 40, date:"2/22"},
]

export default function Plot() {
    return ( 
        <div class="chart">
            <ResponsiveContainer width="30%" minWidth={300} minHeight={200}>
                <LineChart data={data} width={300} height={200}>
                    <CartesianGrid/>
                    <XAxis dataKey="date" name="Date"/>
                    <YAxis dataKey="value" name="Revenue in dollar"/>
                    <Tooltip/>
                    <Line dataKey="value" type="monotone" name="Revenue" stroke="#82ca9d"></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
        
    )
}
