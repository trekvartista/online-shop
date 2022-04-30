import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post("api/type", type)

    return data
}
export const fetchTypes = async () => {
    const { data } = await $host.get("api/type")

    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post("api/brand", brand)

    return data
}
export const fetchBrands = async () => {
    const { data } = await $host.get("api/brand")

    return data
}

export const createItem = async (item) => {
    const { data } = await $authHost.post("api/item", item)

    return data
}
export const fetchItems = async (typeId, brandId, page, limit = 3) => {
    const { data } = await $host.get("api/item", {params: {
        typeId, brandId, page, limit
    }})
    return data
}
export const fetchConcreteItem = async (id) => {
    const { data } = await $host.get("api/item/" + id)

    return data
}


export const addItemToBasket = async (id) => {
    const { data } = await $authHost.post("api/basket/" + id)

    return data
}

export const getAllBasketItems = async () => {
    const { data } = await $authHost.get("api/basket")

    return data
}