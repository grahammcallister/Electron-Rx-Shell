import Apple from "./fruit-apple";
import Banana from "./fruit-banana";
import Tree from "./tree";

export default class Basket {
    public Id: string;
    public Apples: Apple[];
    public Bananas: Banana[];
    public Trees: Tree[];

    constructor(id: string) {
        this.Id = id;
        this.Apples = new Array<Apple>();
        this.Bananas = new Array<Banana>();
        this.Trees = new Array<Tree>();
        }
}
