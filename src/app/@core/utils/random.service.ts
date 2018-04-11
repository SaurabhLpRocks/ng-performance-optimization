import { Injectable } from '@angular/core';
import { WebWorkerService } from 'angular2-web-worker';

@Injectable()
export class RandomService {

    constructor(private _webWorkerService: WebWorkerService) {
    }

    /**
     * Shuffles the input array objects.
     *
     * @param {any[]} array
     * @returns {any[]}
     * @memberof RandomService
     */
    shuffleArray(array: any[]): Promise<any[]> {
        return this._webWorkerService.run(this.suffleArrayInWorker, array)
    }

    suffleArrayInWorker(array: any[]) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    }

    randomName() {
        const i = Math.floor(Math.random() * this.adjectives.length);
        const j = Math.floor(Math.random() * this.nouns.length);
        return [
            `${this.adjectives[i]} ${this.nouns[j]}`,
            `${this.adjectives[i]}.${this.nouns[j]}@gmail.com`,
            this.randomNumber()
        ];
    }

    randomNumber(): number {
        return Math.floor(Math.random() * 9000000000) + 1000000000;
    }

    /**
     * Gets the random date between the given date range. Ex randomDate(new Date(1900, 0, 1), new Date())
     *
     * @param {Date} start
     * @param {Date} end
     * @returns
     * @memberof RandomService
     */
    randomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    adjectives: string[] = ['adamant', 'adroit',
        'amatory', 'animistic', 'antic', 'arcadian', 'baleful', 'bellicose', 'bilious', 'boorish',
        'calamitous', 'caustic', 'cerulean', 'comely', 'concomitant', 'contumacious', 'corpulent', 'crapulous',
        'defamatory', 'didactic', 'dilatory', 'dowdy', 'efficacious', 'effulgent', 'egregious', 'endemic', 'equanimous',
        'execrable', 'fastidious', 'feckless', 'fecund', 'friable', 'fulsome', 'garrulous', 'guileless', 'gustatory',
        'heuristic', 'histrionic', 'hubristic', 'incendiary', 'insidious', 'insolent', 'intransigent', 'inveterate',
        'invidious', 'irksome', 'jejune', 'jocular', 'judicious', 'lachrymose', 'limpid', 'loquacious', 'luminous',
        'mannered', 'mendacious', 'meretricious', 'minatory', 'mordant', 'munificent', 'nefarious', 'noxious', 'obtuse',
        'parsimonious', 'pendulous', 'pernicious', 'pervasive', 'petulant', 'platitudinous', 'precipitate',
        'propitious', 'puckish', 'querulous', 'quiescent', 'rebarbative', 'recalcitant', 'redolent', 'rhadamanthine',
        'risible', 'ruminative', 'sagacious', 'salubrious', 'sartorial', 'sclerotic', 'serpentine', 'spasmodic',
        'strident', 'taciturn', 'tenacious', 'tremulous', 'trenchant', 'turbulent', 'turgid', 'ubiquitous',
        'uxorious', 'verdant', 'voluble', 'voracious', 'wheedling', 'withering', 'zealous'];
    nouns: string[] = ['ninja', 'chair', 'pancake', 'statue', 'unicorn', 'rainbows', 'laser', 'senor', 'bunny',
        'captain', 'nibblets', 'cupcake', 'carrot', 'gnomes', 'glitter', 'potato', 'salad', 'toejam', 'beets',
        'toilet', 'exorcism', 'stick figures', 'mermaid eggs', 'sea barnacles', 'dragons', 'jellybeans', 'dolls',
        'bushes', 'cookies', 'apples', 'ice cream', 'ukulele', 'kazoo', 'banjo', 'opera singer', 'circus', 'trampoline',
        'carousel', 'carnival', 'locomotive', 'hot air balloon', 'praying mantis', 'animator', 'artisan', 'artist',
        'colorist', 'inker', 'coppersmith', 'director', 'designer', 'flatter', 'stylist', 'leadman', 'limner',
        'make-up artist', 'model', 'musician', 'penciller', 'producer', 'scenographer', 'set decorator', 'snakes',
        'silversmith', 'teacher', 'auto mechanic', 'beader', 'bobbin boy', 'clerk of the chapel', 'fil', 'curtains'];
}
