import ProductRepository from "../domain/ProductRepository";
import Product from "../domain/Product";

const products = [
    {
        image:
            "https://m.media-amazon.com/images/I/81oKhu2bsgL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Blazin LS tee Shirt, Hombre",
        price: "19,95 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/81HnHYik58L._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Vertical SS tee Shirt, Hombre",
        price: "21,95 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/81ZYZ9yl1hL._AC_UL640_FMwebp_QL65_.jpg",
        title: 'Element Skater Backpack Mohave 15" Saison ',
        price: "52,45 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/61-DwEh1zrL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Indiana Logo N1SSA5ELP9",
        price: "18,90 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/71MG0EzCU4L._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element L1ssa8 Camiseta, Hombre",
        price: "27,95 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/81giLCXfxIL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element N2ssa2 Camiseta, Niños",
        price: "13,90 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/81oKhu2bsgL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Blazin LS tee Shirt, Hombre",
        price: "19,95 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/7119OAEE+gL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Alder Light 2 Tones",
        price: "68,35 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/71dp5f24TbL._AC_UL640_FMwebp_QL65_.jpg",
        title: 'Element Skater Backpack Mohave 15" Season',
        price: "52,84 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/71Kj-jV5v8L._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Vertical SS Camiseta, Niños",
        price: "13,90 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/71jlppwpjmL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Alder Heavy Puff TW Chaqueta, Hombre, Verde Oliva, M EU",
        price: "168,75 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/71BSdq6OzDL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Hombre Meridian Block Sudadera Mid Grey HTR",
        price: "47,50 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/81RAeKF-8wL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Sudadera - para Hombre",
        price: "64,94 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/717tHbEHDnL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Hombre Camiseta t-Shirt Signature",
        price: "29,84 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/81rOs3LA0LL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Section' Pre-Built Complete - 7.50\"",
        price: "99,00 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/61-xQZORAKL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Camiseta - para hombre",
        price: "27,06 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/71RUdoglJML._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Alder Light",
        price: "86,52 €"
    },
    {
        image:
            "https://m.media-amazon.com/images/I/714tTmj4KvL._AC_UL640_FMwebp_QL65_.jpg",
        title: "Element Chaqueta Alder Puff TW Negro",
        price: "73,50 €"
    }
];

export default class ProductInMemoryRepository implements ProductRepository {
    get(filter: string): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (filter) {
                    const filteredProducts = products.filter((p: Product) => {
                        return (p.title.toLowerCase().includes(filter.toLowerCase()));
                    });

                    resolve(filteredProducts);
                } else {
                    resolve(products);
                }
            }, 250);
        });
    }
}