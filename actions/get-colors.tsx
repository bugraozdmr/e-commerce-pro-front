import { Color } from "@/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async () : Promise<Color[]> => {
    // caching olmasın dedim
    const response = await fetch(Url,{ cache: 'no-store' });

    return response.json();
}

export default getColors;
