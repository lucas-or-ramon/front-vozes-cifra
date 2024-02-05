'use client';

import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NextApi from "../../@services/NextApi";
import { Song } from "../../@services/interfaces";
import Verse from "./components/Verse";

function SongPage() {
    const [song, setSong] = useState<Song>();

    const majorChordsToRaise = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const minorChordsToRaise = ['Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm']
    
    const raiseTone = () => {
        if (!song) return;

        const newSong = song;
        newSong.verses.forEach(verse => {
            verse.chords.forEach(chord => {
                if (majorChordsToRaise.includes(chord.chord)) {
                    const index = majorChordsToRaise.indexOf(chord.chord);
                    chord.chord = majorChordsToRaise[index + 1];
                } else if (minorChordsToRaise.includes(chord.chord)) {
                    const index = minorChordsToRaise.indexOf(chord.chord);
                    chord.chord = minorChordsToRaise[index + 1];
                }
            });
        });
    }

    const getSong = async () => {
        const response = await NextApi.getSongById('1')
        if (response.status && response.values) {
            setSong(response.values as Song);
        } else {
            console.log('Error');
        }
    }

    useEffect(() => {
        getSong();
    }, []);

    return (
        <Container>
            <Typography variant="h3">{song?.title}</Typography>
            <Typography variant="h5">{song?.artist}</Typography>
            {<>
                {song?.verses.map((verse, index) => {
                    return (
                        <Verse key={index} verse={verse.verse} chords={verse.chords} chorus={verse.chorus} />
                    );
                })}
            </>}
            <Typography variant="h6">{song?.tags}</Typography>
            {/* <Button onClick={lowerTone}>Baixar Meio Tom</Button> */}
            <Button onClick={raiseTone}>Aumentar Meio Tom</Button>
        </Container>
    );
}

export default SongPage;