import Highway from "@dogstudio/highway";
import Fade from "./transition";

const H = Highway.Core({
    transitions: {
        default: Fade
    }
})