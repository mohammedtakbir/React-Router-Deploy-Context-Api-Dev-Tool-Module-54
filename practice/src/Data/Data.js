export const data = async() => {
    const productsData = await fetch('tShirts.json');
    const tShirts = await productsData.json();
    return tShirts;
}