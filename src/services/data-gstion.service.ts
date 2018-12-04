import { CD } from '../models/CD';
import { Book } from '../models/Book';

export class DataGestion {

    cdList: CD[] = [
        {
            band: 'The Pogues',
            name: 'Rum, Sodomy and the Lashes',
            description: [
                'Genre: celtic punk',
                'Year: 1986'
            ],
            isLend: false
        },
        {
            band: 'Iron Maiden',
            name: 'Piece of Mind',
            description: [
                'Genre: heavy metal',
                'Year: 1983'
            ],
            isLend: false
        },
        {
            band: 'Daughters',
            name: 'You Don\'t Get What You Want',
            description: [
                'Genre: post-punk, noise',
                'Year: 2018'
            ],
            isLend: true
        }
    ];

    bookList: Book[] = [
        {
            author: 'Philip K. Dick',
            name: 'En Attendant l\'Année Dernière',
            description: [
                'Genre: SF',
                'Year: 1966'
            ],
            isLend: false
        },
        {
            author: 'H. P. Lovecraft',
            name: 'Dans l\'Abime du Temps',
            description: [
                'Genre: Fantastique - Horreur',
                'Year: 1936'
            ],
            isLend: false
        },
        {
            author: 'Frank Herbert',
            name: 'Dune',
            description: [
                'Genre: SF',
                'Year: 1965'
            ],
            isLend: false
        }
    ];

    onToggleLend(object: any) {
        object.isLend = !object.isLend;
    }
}