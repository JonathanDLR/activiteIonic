import { CD } from '../models/CD';
import { Book } from '../models/Book';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataGestion {

    cdList$ = new Subject<CD[]>();

    cdList: CD[] = [
        {
            band: 'The Pogues',
            name: 'Rum, Sodomy and the Lashes',
            description: [
                'Genre: celtic punk',
                'Year: 1986'
            ],
            isLend: false,
            emprunteur: ""
        },
        {
            band: 'Iron Maiden',
            name: 'Piece of Mind',
            description: [
                'Genre: heavy metal',
                'Year: 1983'
            ],
            isLend: false,
            emprunteur: ""
        },
        {
            band: 'Daughters',
            name: 'You Don\'t Get What You Want',
            description: [
                'Genre: post-punk, noise',
                'Year: 2018'
            ],
            isLend: false,
            emprunteur: ""
        }
    ];

    bookList$ = new Subject<Book[]>();

    bookList: Book[] = [
        {
            author: 'Philip K. Dick',
            name: 'En Attendant l\'Année Dernière',
            description: [
                'Genre: SF',
                'Year: 1966'
            ],
            isLend: false,
            emprunteur: ""
        },
        {
            author: 'H. P. Lovecraft',
            name: 'Dans l\'Abime du Temps',
            description: [
                'Genre: Fantastique - Horreur',
                'Year: 1936'
            ],
            isLend: false,
            emprunteur: ""
        },
        {
            author: 'Frank Herbert',
            name: 'Dune',
            description: [
                'Genre: SF',
                'Year: 1965'
            ],
            isLend: false,
            emprunteur: ""
        }
    ];

    constructor(private storage: Storage) {}

    onToggleLend(object: any) {
        object.isLend = !object.isLend;
    }

    emitCD() {
        this.cdList$.next(this.cdList.slice());
    }

    emitBook() {
        this.bookList$.next(this.bookList.slice());
    }

    saveCD() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cd').set(this.cdList).then(
                (data: firebase.database.DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    saveBook() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('book').set(this.bookList).then(
                (data: firebase.database.DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });  
    }

    retrieveCD() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cd').once('value').then(
                (data: firebase.database.DataSnapshot) => {
                    this.cdList = data.val();
                    this.emitCD();
                    resolve('CD récupérés avec succès!');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    retrieveBook() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('book').once('value').then(
                (data: firebase.database.DataSnapshot) => {
                    this.bookList = data.val();
                    this.emitBook();
                    resolve('Livres récupérés avec succès!');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    saveStorage() {
        this.storage.set('cd', this.cdList);
        this.storage.set('book', this.bookList);
    }

    fetchStorage() {
        this.storage.get('cd').then(
            (list) => {
                if (list && list.length) {
                    this.cdList = list.slice();
                }
                this.emitCD();
            }
        );
        this.storage.get('book').then(
            (list) => {
                if (list && list.length) {
                    this.bookList = list.slice();
                }
                this.emitBook();
            }
        );
    }
}