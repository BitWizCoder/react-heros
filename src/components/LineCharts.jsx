import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function LineCharts() {
  const blogStats = [
    {
      id: 1,
      date: "2023-01-01",
      pageViews: 1000,
      uniqueVisitors: 800,
      bounceRate: 500,
    },
    {
      id: 2,
      date: "2023-01-02",
      pageViews: 1200,
      uniqueVisitors: 950,
      bounceRate: 400,
    },
    {
      id: 3,
      date: "2023-01-03",
      pageViews: 1400,
      uniqueVisitors: 1100,
      bounceRate: 340,
    },
    {
      id: 4,
      date: "2023-01-04",
      pageViews: 1250,
      uniqueVisitors: 980,
      bounceRate: 800,
    },
    {
      id: 5,
      date: "2023-01-05",
      pageViews: 1100,
      uniqueVisitors: 900,
      bounceRate: 700,
    },
    {
      id: 6,
      date: "2023-01-06",
      pageViews: 1350,
      uniqueVisitors: 1050,
      bounceRate: 200,
    },
    {
      id: 7,
      date: "2023-01-07",
      pageViews: 1600,
      uniqueVisitors: 1250,
      bounceRate: 200,
    },
    {
      id: 8,
      date: "2023-01-08",
      pageViews: 1450,
      uniqueVisitors: 1150,
      bounceRate: 41,
    },
    {
      id: 9,
      date: "2023-01-09",
      pageViews: 1300,
      uniqueVisitors: 1020,
      bounceRate: 45,
    },
    {
      id: 10,
      date: "2023-01-10",
      pageViews: 1100,
      uniqueVisitors: 900,
      bounceRate: 500,
    },
    {
      id: 11,
      date: "2023-01-11",
      pageViews: 1000,
      uniqueVisitors: 800,
      bounceRate: 48,
    },
    {
      id: 12,
      date: "2023-01-12",
      pageViews: 1200,
      uniqueVisitors: 950,
      bounceRate: 500,
    },
  ];
  return (
    <div>
      <AreaChart width={500} height={400} data={blogStats}>
        <Area
          type="monotone"
          dataKey="bounceRate"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pageViews"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="uniqueVisitors"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </div>
  );
}

export default LineCharts;
