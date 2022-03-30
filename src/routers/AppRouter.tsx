import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPages } from "../components/pages/contact/ContactPages";
import { HomePages } from "../components/pages/home/HomePages";
import { Layout } from "./Layout";
import { ProductsPages } from '../components/pages/product/ProductsPages';
import ScrollToTop from "../helpers/ScrollToTop";
import { StorePages } from '../components/pages/store/StorePages';
import { DetailLayout } from "../components/layouts/details/DetailLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route
              path="tienda"
              element={
                <StorePages
                />
              }
            />
            <Route
              path="joyeros"
              element={
                <ProductsPages
                  title="joyeros"
                  category="joyeros"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route path="joyeros/:name" element={<DetailLayout />} />
            <Route
              path="peluches"
              element={
                <ProductsPages
                  title="peluches"
                  category="peluches"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route path="peluches/:name" element={<DetailLayout />} />
            
            <Route
              path="muebles"
              element={
                <ProductsPages
                  title="muebles"
                  category="muebles"
                  categoryTitle="bloqueador solar"
                />
              }
            />
            <Route path="muebles/:name" element={<DetailLayout />} />

            <Route
              path="para-el-hogar"
              element={
                <ProductsPages
                  title="para el hogar"
                  category="para-el-hogar"
                  categoryTitle="para el hogar"
                />
              }
            />
            <Route path="para-el-hogar/:name" element={<DetailLayout />} />

            <Route
              path="para-el-escritorio"
              element={
                <ProductsPages
                  title="para el escritorio"
                  category="para-el-escritorio"
                  categoryTitle="para el escritorio"
                />
              }
            />
            <Route path="para-el-escritorio/:name" element={<DetailLayout />} />

            <Route
              path="para-la-cocina"
              element={
                <ProductsPages
                  title="para la cocina"
                  category="para-la-cocina"
                  categoryTitle="para la cocina"
                />
              }
            />
            <Route path="para-la-cocina/:name" element={<DetailLayout />} />
            
            <Route path="contacto" element={<ContactPages />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
