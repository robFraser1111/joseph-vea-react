import React, { Component } from 'react'

export default class Home extends Component {

    componentDidMount() {
        this.props.background();
    }

    render() {
        return (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">

                {/*
                <div className="justify-self-center self-center">
                    <iframe title="Spotify" src="https://open.spotify.com/embed/artist/7haTfRcmlhxzWtonlmgPVo" width="300" height="80" frameborder="0"></iframe>
                </div>
                

                
                <div className="youtube justify-self-center self-center">
                    <iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/olWAhoORHo0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                */}
                
            </section>
        )
    }
}
