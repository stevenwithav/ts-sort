import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
	10,
	3,
	-5,
	0,
	0.9,
	30,
	400,
	0.2,
	96,
]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('RfhurFEWmf');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(5);
linkedList.add(-90);
linkedList.add(0.6);

linkedList.sort();
linkedList.print();
