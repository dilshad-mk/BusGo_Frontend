import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { day: "Mon", Bookings: 45 },
    { day: "Tue", Bookings: 52 },
    { day: "Wed", Bookings: 60 },
    { day: "Thu", Bookings: 55 },
    { day: "Fri", Bookings: 70 },
    { day: "Sat", Bookings: 85 },
    { day: "Sun", Bookings: 75 },
];

function BookingTrands() {
    return (
        <div className="bg-[#0b1220] tablet:p-6 rounded-2xl py-5 px-2 border-[1px] border-neutral-800 shadow-lg w-full">
            <h2 className="text-white text-lg font-semibold mb-4">
                Booking Trends
            </h2>

            <ResponsiveContainer width="100%" height={300} >
                <BarChart data={data}>
                    <XAxis
                        dataKey="day"
                        stroke="#9ca3af"
                        tick={{ fill: "#9ca3af" }}
                    />
                    <YAxis
                        stroke="#9ca3af"
                        tick={{ fill: "#9ca3af" }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1f2937",
                            border: "none",
                            borderRadius: "8px",
                            color: "#fff",
                        }}
                    />
                    <Bar
                        dataKey="Bookings"
                        fill="#3b82f6"
                        radius={[8, 8, 0, 0]} // rounded top like your UI
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                 
                
                </BarChart>
            </ResponsiveContainer>
        </div>)
}

export default BookingTrands