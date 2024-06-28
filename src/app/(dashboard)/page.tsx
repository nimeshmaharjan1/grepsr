import { redirect } from "next/navigation";
import React from "react";

const Index = () => {
  return redirect("/datasets");
  return <div>Index</div>;
};

export default Index;
