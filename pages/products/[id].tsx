import "@/styles/Product.module.css";

import Comments from "@/components/templates/Product/Comments";
import ProductsDetails from "@/components/templates/Product/ProductDetails";
import { MenuTypes } from "@/types/serverTypes";

interface ProductProps{
  product:MenuTypes
}

const Product = ({ product }:ProductProps) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments />
    </>
  );
};

export async function getStaticPaths(context:any) {
  const res = await fetch(`http://localhost:4000/menu`);
  const products:MenuTypes[] = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context:any) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product:MenuTypes = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
