import React, { Component } from 'react';

export default class About extends Component {

    componentDidMount() {
        this.props.background();
    }
    
    render() {
        return (
            <section className="justify-self-center self-center text-white text-1xl py-10">
                <p style={{ paddingBottom: 20 }}>
                    Like many people, I have found myself hooked to my phone and various social media platforms. Whether it be for my music or my personal life, I realised that these things began to take hold of most of my 'free time'.
                    <br /><br />
                    <a href="https://open.spotify.com/artist/7haTfRcmlhxzWtonlmgPVo?si=vl4xCka_QPuadBTm6TAgxA" target="_blank" rel="noreferrer"><u>Find Me</u></a> follows my journey of self-awareness and a commitment to finding out who I am outside of my addiction. This song served as a moment of reflection on who I want to be and how I'd like to use my life.
                    <br /><br />
                    <a href="https://open.spotify.com/artist/7haTfRcmlhxzWtonlmgPVo?si=vl4xCka_QPuadBTm6TAgxA" target="_blank" rel="noreferrer"><u>Half As Much</u></a> explores a journey of self acceptance and love. It is a letter written by our inner voice that tells us that we are 'good enough' and that we deserve to be loved 'Half As Much' as we love others. This song embodies a salsa groove, anchored in undeniable Rnb and Neo Soul goodness.
                    <br /><br />
                    <a href="https://distrokid.com/hyperfollow/josephvea/half-as-much-ep" target="_blank" rel="noreferrer"><u>Plastic Man</u></a> explores identity through the lens of a man feeling detached from his culture. As the son of parents who immigrated from Tonga to New Zealand, the song explores the risks of denying culture and the impact of that new environment on young children who are left to feel like they don't belong anywhere. The song however goes on to find comfort in knowing there is a place in the world for those who are not strongly connected to their heritage, a place in between these two worlds.
                    <br /><br />
                    <a href="https://distrokid.com/hyperfollow/josephvea/half-as-much-ep" target="_blank" rel="noreferrer"><u>Walls</u></a> highlights the vital role that vulnerability plays in allowing someone to form closer relationships with those they love. The need to open up to those we care about in life's low moments in order to fully embrace, celebrate and share the highs. It is a call to a scarier, yet fuller way of living. We have always celebrated those who have shown bravery in sport or combat. This song is a call for a new bravery, it's about putting more than your body on the line. 
                </p>
            </section>
        )
    }
}
