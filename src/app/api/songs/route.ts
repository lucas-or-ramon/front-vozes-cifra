import BackVozesCifras from "@/@services/BackVozesCifras";
import { HttpResponse } from "../http";

export async function GET(req: Request) {
    try{
        // const { id } = req.url;
        const response = await BackVozesCifras.getSongById('1');
        if (response.status && response.values) {
            return HttpResponse.status(200).json({
                ...response.values
            });
        } else {
            return HttpResponse.status(500).json({
                message: 'erro ao buscar a música'
            });
        }
    } catch (error: any) {
        console.error(error);
        return HttpResponse.status(500).json({
            message: error.message
        });
    }
}