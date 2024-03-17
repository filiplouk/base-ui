import styles from "./dashboard.module.css";
import { test } from "@/@services/test/test.service";

const getData = async () => {
  const res = await test.checkUser();
  if (!res.ok) {
    throw new Error(res.message);
  }
  return res.json();
};

const Dashboard = async () => {
  const data = await getData();

  return (
    <main>
      <div>
        <button>{data}</button>
      </div>
    </main>
  );
};

export default Dashboard;
