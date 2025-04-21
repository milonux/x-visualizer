import React from "react";
import BarChart from "../../../../components/BarChart";
import Card from "../../../../components/Card";

const Statistics = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <Card style={{ height: "100%" }}>
            <BarChart />
          </Card>
        </div>
        <div className="col-span-6">
          <Card style={{ height: "100%" }}>
            <BarChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
