import Image from 'next/image';
import { notFound } from 'next/navigation';

import { fetchMeal } from '@/lib/data';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
    const meal = fetchMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }
    
    return {
        title: meal.title,
        description: meal.summary
    };
};

export default function MealDetailsPage({ params }) {
    const meal = fetchMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image
                        src={`https://rmersh-udemy-nextjs-foodie-users-images.s3.amazonaws.com/${meal.image}`}
                        alt={meal.title}
                        fill
                    />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styles.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }}
                ></p>
            </main>
        </>
    );
};