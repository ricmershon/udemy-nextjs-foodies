import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function fetchMeals() {
    // 3 second simulated delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}