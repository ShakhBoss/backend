
import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class ProductServiceStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Lambda funksiyasini yaratish
        const getProductsListLambda = new lambda.Function(this, "GetProductsListHandler", {
            runtime: lambda.Runtime.NODEJS_18_X,  // Node.js versiyasini tanlash
            code: lambda.Code.fromAsset("lambda"),  // lambda katalogidan kod yuklash
            handler: "getProductsList.handler"
        });

        // API Gateway yaratish
        const api = new apigateway.RestApi(this, "ProductServiceAPI");

        // /products endpointini yaratish va Lambda bilan bog‘lash
        const productsResource = api.root.addResource("products");
        productsResource.addMethod("GET", new apigateway.LambdaIntegration(getProductsListLambda));
    }
}
