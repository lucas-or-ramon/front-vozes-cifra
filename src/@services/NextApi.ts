import AxiosRequest from "./AxiosRequest";
import { Song } from "./interfaces";

class NextApi extends AxiosRequest {
    constructor() {
        super('/api', {})
    }

    public async getSongById(id: string) {
        return this.api.get<Song>('/songs', {
            params: {
                id,
            },
        });
    }
}

export default new NextApi();