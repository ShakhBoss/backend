export const handler: APIGatewayProxyHandler = async () => {
    try {
        const products = [
            { id: "1", name: "Laptop", price: 1200 },
            { id: "2", name: "Phone", price: 800 },
            { id: "3", name: "Tablet", price: 500 }
        ];

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",  // ✅ CORS ni yoqish
                "Access-Control-Allow-Methods": "GET, OPTIONS",
            },
            body: JSON.stringify(products)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",  // ✅ CORS ni yoqish
            },
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};
