import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import './PageOne.css';
function PageOne() {
    return( 
    <div className='pageone'>
        <ScrollContainer>
            <ScrollPage>
                <Animator>
                    <h1> Page One</h1>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    </div>
    )
}
export default PageOne; 