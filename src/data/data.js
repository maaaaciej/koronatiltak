import Beer from '../assets/beer.svg';
import Mask from "../assets/mask.svg";
import Store from "../assets/store.svg";
import Drink from "../assets/drink.svg";
import Keyboard from "../assets/keyboard.svg";
import Group from "../assets/group.svg";
import Cake from "../assets/cake.svg";
import NoDrink from "../assets/nodrink.svg";
import Tree from "../assets/tree.svg";

const tiltak = [
    {
        icon: Mask,
        status: "mandatory",
        text: "Munnbind er påbudt på kollektivtransport og innendørs på alle offentlige steder der du ikke kan opprettholde 1 meter avstand"
    },
    {
        icon: Store,
        status: "mandatory",
        text: "Munnbind er påbudt for ansatte og gjester på serveringssteder i alle situasjoner man ikke sitter ved et bord"
    },
    {
        icon: Drink,
        status: "mandatory",
        text: "Maksgrensen for arrangementer uten faste sitteplasser er på 20 personer"
    },
    {
        icon: Beer,
        status: "mandatory",
        text: "Utesteder slipper ikke inn etter 22.00"
    },
    {
        icon: Keyboard,
        status: "mandatory",
        text: "Det er påbudt med hjemmekontor så langt det er mulig. Arbeidsgiver skal kunne dokumentere at alle ansatte har fått beskjed om at de skal ha hjemmekontor"
    },
    {
        icon: Group,
        text: "Antallet kontakter i uken bør ikke overstige 10 personer (ikke inkludert egen husstand og barneskole/barnehageklasser)",
    },
    {
        icon: Cake,
        status: "mandatory",
        text: "Det er forbudt med private samlinger over tilsammen 10 personer"
    },
    {
        icon: NoDrink,
        status: "mandatory",
        text: "Sjenkestopp på alle utesteder klokken 24.00"
    },
    {
        icon: Tree,
        status: "mandatory",
        text: "Forbudt med flere enn 200 til stede på arrangementer utendørs"
    }
];

export default tiltak;