import Mask from "../assets/mask.svg";
import Store from "../assets/store.svg";
import Drink from "../assets/drink.svg";
import Keyboard from "../assets/keyboard.svg";
import Group from "../assets/group.svg";
import Cake from "../assets/cake.svg";
import NoDrink from "../assets/nodrink.svg";
import Ruler from "../assets/ruler.svg";
import Car from "../assets/car.svg";
import Munnbind from "../assets/munnbind.svg"

const tiltak = [
    {
        icon: Group,
        text: "Antallet kontakter i uken bør ikke overstige 10 personer (ikke inkludert egen husstand, arbeidskollegaer og barneskole/barnehageklasser)",
    },
    {
        icon: Munnbind,
        status: "reklame",
        text: `Munnbind Til Alle tilbyr høykvalitetsmunnbind til en pris folk har råd til å betale. Munnbindene er av type 1 og godkjent til bruk på offentlig transport og fly. <a href="https://munnbindtilalle.no"> Sjekk ut Munnbind Til Alle </a>`
    },
    {
        icon: Car,
        text: "Hold deg mest mulig hjemme. Unngå innenlandsreiser som ikke er nødvendige arbeidsreiser, eller reiser til fritidseiendom der du ikke har kontakt med andre",
    },
    {
        icon: Ruler,
        text: "Forsøk å holde minst to meters avstand til folk i risikogrupper. Unngå å besøke helsehus og langtidshjem dersom du har vært nærmere enn 1 meter til personer utover dine nærmeste"
    },
    {
        icon: Store,
        status: "mandatory",
        text: "Alle virksomheter der det foregår kultur- og fritidsaktiviteter stenges (treningssentre, kinoer, teatre, lekeland)"
    },
    {
        icon: Mask,
        status: "mandatory",
        text: "Munnbind er påbudt på kollektivtransport, taxi og innendørs på alle offentlige steder der du ikke kan opprettholde 1 meter avstand"
    },
    {
        icon: Drink,
        status: "mandatory",
        text: "Alle private arrangementer forbys"
    },
    {
        icon: Keyboard,
        status: "mandatory",
        text: "Det er påbudt med hjemmekontor så langt det er mulig. Arbeidsgiver skal kunne dokumentere at alle ansatte har fått beskjed om at de skal ha hjemmekontor"
    },
    {
        icon: Cake,
        status: "mandatory",
        text: "Ved spesielle anledninger kan du invitere opp til 5 personer hjem til deg selv, antallet skal ikke gå over 10 stykker til sammen"
    },
    {
        icon: NoDrink,
        status: "mandatory",
        text: "Forbud mot alkoholservering. Serveringssteder kan holde åpent uten å servere alkohol. Munnbind er påbudt for ansatte og gjester i alle situasjoner der man ikke sitter ved et bord"
    },
];

export default tiltak;