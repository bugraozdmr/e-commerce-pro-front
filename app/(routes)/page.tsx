import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import Container from "@/components/ui/container";


export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured : true });
    const billboard = await getBillboard("e3e70a58-d380-4fdd-9054-ec82b7c427c6");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                {/* burda caching yapsak fena olmazdı belli bir süreliğine */}
                <Billboard 
                data={billboard}
                />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList 
                    title='Featured Products'
                    items={products}
                    />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;