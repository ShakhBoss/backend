import { APIGatewayProxyHandler } from "aws-lambda";
import * as fs from "fs";
import * as path from "path";

export const handler: APIGatewayProxyHandler = async () => {
    try {
        // JSON faylni o‘qish
        const productsFile = path.resolve(__dirname, "mock-products.json");
        const productsData = fs.readFileSync(productsFile, "utf8");
        const products = JSON.parse(productsData);

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(products)
        };
    } catch (error: any) {  // ✅ Xatolikni TypeScript'ga to‘g‘ri ko‘rsatish
        console.error("Lambda error:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({ 
                message: "Internal server error", 
                error: error.message || "Unknown error"
            })
        };
    }
};
