import { Size } from "@/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async () : Promise<Size[]> => {
    // caching olmasın dedim
    const response = await fetch(Url,{ cache: 'no-store' });

    return response.json();
}

export default getSizes;
