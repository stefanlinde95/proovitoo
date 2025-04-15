"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

interface SalaryChartProps {
  years: string[];
  salaries: number[];
}

export default function SalaryChart({ years, salaries }: SalaryChartProps) {
  const data = {
    labels: years,
    datasets: [
      {
        label: "Brutokuupalk (€)",
        data: salaries,
        borderColor: "#ef4444", // .text-red-500
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        position: "right",
        ticks: {
          stepSize: 200,
          callback: (value: number | string) => `${value}€`,
          color: "#6b7280",
        },
        title: {
          display: false,
          text: "Brutokuupalk (€)",
          color: "#6b7280",
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
          align: "start",
        },
        title: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `Brutokuupalk: ${Number(context.raw)}€`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full aspect-video max-h-96 bg-white">
      <Line data={data} options={options} />
    </div>
  );
}
