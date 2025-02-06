import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Dell XPS 13", price: 85, total: 70, rating: 4.5 },
  { name: "Dell XPS 13", price: 50, total: 60, rating: 4.2 },
  { name: "Dell XPS 13", price: 80, total: 85, rating: 4.7 },
  { name: "Dell XPS 13", price: 45, total: 50, rating: 4.0 },
  { name: "Dell XPS 13", price: 75, total: 65, rating: 4.3 },
  { name: "Dell XPS 13", price: 85, total: 90, rating: 4.8 },
  { name: "Dell XPS 13", price: 90, total: 95, rating: 4.9 },
  { name: "Dell XPS 13", price: 95, total: 100, rating: 5.0 },
  { name: "Dell XPS 13", price: 98, total: 98, rating: 4.9 },
  { name: "Dell XPS 13", price: 88, total: 92, rating: 4.6 },
];

const ReChart = () => {
  return (
    <div className=" bg-gray-100 rounded-2xl shadow-lg ">
      <div>
        <div className=" bg-purple-600 text-center px-6 py-[40px] text-white mb-[40px]">
          <h1 className="md:text-5xl text-2xl font-bold leading-tight">
          Statistics
          </h1>
          <p className="mt-4 text-lg">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <h2 className=" text-3xl font-semibold mb-10">Statistics</h2>
        <div className="bg-white p-4 rounded-xl">
          <ResponsiveContainer width="100%" height={700}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#A855F7" />
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#A855F7"
                  fill="#A855F7"
                  opacity={0.3}
                />
              </AreaChart>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReChart;
