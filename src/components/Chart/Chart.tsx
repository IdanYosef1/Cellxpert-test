import { observer } from "mobx-react";
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar } from "recharts";
import { LetterStoreProps } from "../../interfaces/interfaces";
import { ChartDiv } from "./Chart.styled";

const Chart = observer(({ store: { result } }: LetterStoreProps) => {
  return (
    <ChartDiv>
      <BarChart
        width={220}
        height={300}
        margin={{ top: 25, right: 50, bottom: 10, left: 10 }}
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
        <Legend />
        <Bar label={true} dataKey="Answer" fill="#37D171" />
      </BarChart>
    </ChartDiv>
  );
});

export default Chart;
