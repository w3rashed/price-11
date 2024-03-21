import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 90 },
    { id: 2, name: "Bob", math: 78, physics: 82, chemistry: 85 },
    { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 94 },
    { id: 4, name: "David", math: 65, physics: 70, chemistry: 75 },
    { id: 5, name: "Emma", math: 70, physics: 75, chemistry: 80 },
    { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 90 },
    { id: 7, name: "Grace", math: 75, physics: 72, chemistry: 78 },
    { id: 8, name: "Henry", math: 83, physics: 80, chemistry: 85 },
    { id: 9, name: "Isabel", math: 95, physics: 90, chemistry: 98 },
    { id: 10, name: "Jack", math: 80, physics: 75, chemistry: 82 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentMarks}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"physics"} stroke="green"></Line>
        <Line dataKey={"chemistry"} stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
