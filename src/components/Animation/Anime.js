import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import './Anime.css';
function Anime() {
    return (
        <ScrollContainer>
            <ScrollPage page = {0}>
                <Animator animation = {batch(Fade(-1), Move(), Sticky())}>
                    <h1>Welcome</h1>
                </Animator>
            </ScrollPage>

        </ScrollContainer>
    )
}

export default Anime;