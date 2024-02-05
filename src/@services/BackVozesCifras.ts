import AxiosRequest from "./AxiosRequest";
import { Song } from "./interfaces";

class BackVozesCifras extends AxiosRequest {
    constructor() {
        super(process.env.BACK_VOZES_CIFRAS_API_URL as string, {
            "Content-Type": "application/json",
            "X-Api-Key": process.env.BACK_VOZES_CIFRAS_API_KEY as string,
        })
    }

    public async getSongById(id: string) {
        return this.api.get<Song>('/songs', {
            params: {
                id,
            },
        });
    }
}

export default new BackVozesCifras();