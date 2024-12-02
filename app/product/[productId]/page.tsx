import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
// import { product } from "@/utils/product";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IParams {
  productId: string;
}

const Product = async ({ params }: { params: IParams }) => {
  // console.log(params);
  // console.log(products);
  const productId = await params.productId;

  const product = products.find((item) => item.id === productId);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
