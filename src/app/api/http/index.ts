export class HttpResponse {
    private static toObject = (data: any) => {
        return JSON.stringify(
            data,
            (_, value) =>
                typeof value === "bigint" ? value.toString() : value // return everything else unchanged
        );
    }
    static status = (statusCode: number) => {
        return {
            json: (data: Record<string, unknown>) => {
                return new Response(HttpResponse.toObject(data), {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    status: statusCode,
                });
            },
            end: () => {
                return new Response(null, {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    status: statusCode,
                });
            },
        }
    }
}