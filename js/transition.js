import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {

    in ({ from, to, done }) {
        /* Gsap */
        const tl = new TimelineLite();
        tl.fromTo(to, { duration: 3 }, { left: "-100%", top: "50%" }, { left: "0%" })
            .fromTo(to, { duration: 3 }, { height: "2vh" }, {
                height: "90vh",
                top: "10%",
                onComplete: function() {
                    from.remove();
                    done();
                }
            })
            .fromTo(to.children[0], { duration: 2 }, { opacity: 0 }, { opacity: 1 });
    }
    out({ from, done }) {
        done();
    }
}

export default Fade;