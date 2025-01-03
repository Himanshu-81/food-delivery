import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Homepage from "@/pages/Homepage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>UserProfile</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
