import ProductBoard from "./components/ProductBoard";
import Story from "./components/Story";

export default function Products() {
    return (
        <div  class="section" id="products">
            <Story />
            <ProductBoard />
        </div>
    );
}