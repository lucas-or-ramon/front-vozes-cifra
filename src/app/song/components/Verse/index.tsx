import { Chords } from "@/@services/interfaces";
import { useEffect, useState } from "react";
import styles from './Verse.module.scss';
import { Box } from "@mui/material";

interface _VerseProps {
    chorus: boolean;
    verse: string;
    chords: Chords[];
}

function Verse(props: _VerseProps) {
    const [chordsString, setChordsString] = useState<string>('');
    const { chorus, verse, chords } = props;

    const buildChords = () => {
        const verseWithChords: string[] = Array(verse.length + 1).fill('\u00A0');
        chords.forEach(chord => {
            const position = chord.position;
            const chordName = chord.chord;
            for (let i = 0; i < chordName.length; i++) {
                verseWithChords[position - 1 + i] = chordName[i];
            }
        });
        const verseWithChordsString = verseWithChords.join("");
        setChordsString(verseWithChordsString);
    };

    useEffect(() => {
        buildChords();
    }, []);


    return (
        <Box className={styles.Verse} style={{ fontWeight: chorus ? 'bold' : 'normal' }}>
            <p className={styles.Chord}>{chordsString}</p>
            <p className={styles.Lyric}>{verse}</p>
        </Box>
    );
}

export default Verse;