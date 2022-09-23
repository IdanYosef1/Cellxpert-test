import { observer } from "mobx-react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { LetterStoreProps } from "../../interfaces/interfaces";
import { ChartDiv } from "./Chart.styled";

const Chart = observer(({ store: { result } }: LetterStoreProps) => {
  return (
    <ResponsiveContainer width="100%">
      <ChartDiv>
        <ResponsiveContainer minWidth={150} height={300}>
          <BarChart
            margin={{ top: 25, right: 45, bottom: 10, left: 10 }}
            data={[
              {
                name: "Answer",
                Answer: result,
              },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={false} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Answer" fill="#37D171" />
          </BarChart>
        </ResponsiveContainer>
      </ChartDiv>
    </ResponsiveContainer>
  );
});

export default Chart;
