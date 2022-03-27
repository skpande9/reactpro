import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import Layout from "./components/layout";
import EditProduct from "./components/product/edit.component";
import ProductList from "./components/product/list.component";
import CreateProduct from "./components/product/create.component";
import CategoryList from "./components/category/list.component";

function App() {
  return (
    <Router>
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route exact path='/' element={<ProductList />} />
                <Route path="/product/create" element={<CreateProduct />} />
                <Route path="/product/edit/:id" element={<EditProduct />} />
                <Route path='/category/list' element={<CategoryList />} />
              </Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
