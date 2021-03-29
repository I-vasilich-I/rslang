import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Word } from '../../types/wordCard';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { playAudio } from '../../helpers/helpers';
import { BACKEND_API_URL } from '../../constants/constants';
import './WordCard.scss';

interface Props {
    word: Word;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            margin: 5,
            width: '100%',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            minWidth: 300,
        },
        cover: {
            minWidth: 170,
            width: '30%',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);

export const WordCard: React.FC<Props> = ({ word }: Props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.cover} image={`${BACKEND_API_URL}${word.image}`} title={word.word} />
            <div className={classes.details}>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {word.word} | {word.transcription} | {word.wordTranslate}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {ReactHtmlParser(word.textMeaning)}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {word.textMeaningTranslate}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {ReactHtmlParser(word.textExample)}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {word.textExampleTranslate}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton
                        aria-label='play/pause'
                        onClick={() => playAudio([word.audio, word.audioMeaning, word.audioExample])}
                    >
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <CardActions>
                        <Button variant='contained' size='small'>
                            в сложные слова
                        </Button>
                        <Button variant='contained' size='small'>
                            в удаленные слова
                        </Button>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
};
