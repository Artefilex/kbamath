export const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "GET",
        headers: { "Content-Type": "application/Json" },
    });
    const response = await data.json();
    return [response]; // Veriyi bir dizi içinde döndür
}

export const postData = async (bodyData) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: { "Content-Type": "application/Json" },
        body: JSON.stringify({bodyData})
    });
    const response = await data.json();
    return [response]; // Veriyi bir dizi içinde döndür
}

