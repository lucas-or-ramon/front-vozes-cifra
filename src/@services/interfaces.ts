export interface APIReturn<R> {
    status: boolean;
    values?: R;
    message?: string;
}

export interface Chords {
    number: number;
    chord: string;
    position: number;
}

export interface Verses {
    number: number;
    chorus: boolean;
    verse: string;
    chords: Chords[];
}

export interface Song {
    id: string;
    title: string;
    artist: string;
    tags: string[];
    verses: Verses[];
}