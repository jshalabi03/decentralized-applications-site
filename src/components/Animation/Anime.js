import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import './Anime.css';
function Anime() {
    return (
        <div className = 'page'>
            <ScrollContainer>
                <Animator animation = {batch(Fade(-3), Move(), Sticky())}>
                    <h1>Welcome</h1>
                </Animator>
            </ScrollContainer>
        </div>

    )
}

export default Anime;