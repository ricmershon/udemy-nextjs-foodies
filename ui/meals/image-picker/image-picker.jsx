'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import styles from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInputRef = useRef();

    function handlePickImageClick() {
        imageInputRef.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return
        }

        // Convert to data URL
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {pickedImage ? (
                        <Image
                            src={pickedImage}
                            alt='Image selected by user.'
                            fill
                        />
                    ) : (
                        <p>No image selected.</p>
                    )}
                </div>
                <input
                    ref={imageInputRef}
                    className={styles.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={styles.button}
                    type='button'
                    onClick={handlePickImageClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
};