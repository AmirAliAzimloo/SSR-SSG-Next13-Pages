import "@/styles/Product.module.css";

import Comments from "@/components/templates/Product/Comments";
import ProductsDetails from "@/components/templates/Product/ProductDetails";
import { CommentsTypes, MenuTypes } from "@/types/serverTypes";

interface ProductProps{
  product:MenuTypes,
  comments:CommentsTypes[]
}

const Product = ({ product , comments}:ProductProps) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
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


  
  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const comments:CommentsTypes[] = await commentsResponse.json();

  const productComments = comments.filter(
    (comment) => comment.productID === +params.id
  );

  return {
    props: {
      product,
      comments: productComments,
    },
    revalidate: 60 * 60 * 12 // 12h
  };
}

export default Product;
