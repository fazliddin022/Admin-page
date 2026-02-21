import { Route, Routes } from "react-router-dom";
import { PATH } from "../components";
import { Category, Home, LikeProducts, NotFound, Products, ProductsCrud, ProductsMore } from "../pages";
import { Header, SiteBar } from "../modules";

const Dashboard = () => {
  const dashboardList = [
    { id: 1, path: PATH.home, element: <Home /> },
    { id: 2, path: PATH.products, element: <Products /> },
    { id: 3, path: PATH.category, element: <Category /> },
    { id: 4, path: PATH.notFound, element: <NotFound /> },
    { id: 5, path: PATH.productsCreate, element: <ProductsCrud/> },
    { id: 6, path: PATH.productsMore, element: <ProductsMore/> },
    { id: 7, path: PATH.productsUpdate, element: <ProductsCrud/> },
    { id: 8, path: PATH.likeList, element: <LikeProducts/> }
  ];
  return (
    <div className="flex">
      <SiteBar />
      <div className="w-[78%] h-screen overflow-y-auto">
        <Header/>
        <Routes>{dashboardList.map((item) => (<Route key={item.id} path={item.path} element={item.element} />))}</Routes>
      </div>
    </div>
  );
};

export default Dashboard;
