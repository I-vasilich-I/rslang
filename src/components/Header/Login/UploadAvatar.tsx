import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { AVATAR_UPLOAD_URL } from '../../../constants/constants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }),
);

interface Props {
    setAvatar: React.Dispatch<React.SetStateAction<string>>;
}

export default function UploadButton(props: Props) {
    const classes = useStyles();
    const [image, setImage] = useState<File | null>(null);
    const { setAvatar } = props;

    const uploadHandler = () => {
        try {
            if (image) {
                const formData = new FormData();
                formData.append('file', image);
                formData.append('upload_preset', 'avatarPreset');
                const options = {
                    method: 'POST',
                    body: formData,
                };
                console.log(options);
                fetch(AVATAR_UPLOAD_URL, options)
                    .then((res) => res.json())
                    .then((data) => {
                        setAvatar(data.secure_url);
                        console.log(data.secure_url);
                    })
                    .catch((e) => console.log(e));
            }
        } catch (e) {
            console.log(e);
        }
    };

    const onImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length) {
            setImage(event.target.files[0]);
        }
    };

    useEffect(() => {
        if (image) {
            console.log('useeffect', image);
            uploadHandler();
        }
    }, [image]);

    return (
        <div className={classes.root}>
            <input
                accept='image/*'
                className={classes.input}
                id='icon-button-file'
                type='file'
                onChange={(e) => onImageSelect(e)}
            />
            <label htmlFor='icon-button-file'>
                <IconButton color='primary' aria-label='upload picture' component='span'>
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
    );
}
