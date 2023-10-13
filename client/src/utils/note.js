export const getData = async () => {
    const data = await fetch("https/note",{
        method: "GET",
        headers: { "Content-Type": "application/Json" },
    });
    const response = await data.json();
    return [response]; // Veriyi bir dizi içinde döndür
}