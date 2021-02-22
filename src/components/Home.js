import React, { Component } from 'react'

export default class Home extends Component {

    componentDidMount() {
        this.props.background();
    }

    render() {

        const iframeStyles = {
            boder: 'none',
            width: '350px',
            height: '588px'
        }

        return (
            <section className="grid grid-cols-1 gap-4 py-10">

                <div className="justify-self-center self-center">
                    <iframe style={iframeStyles} src="https://bandcamp.com/EmbeddedPlayer/album=4199557519/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=4206688961,2589540885,2544887583,977857814/esig=b682a9a312c2ce0ac9de3d6eb91b52f4/" seamless><a href="https://josephvea.bandcamp.com/album/half-as-much-ep">Half As Much EP by Joseph Vea</a></iframe>
                </div>
                
            </section>
        )
    }
}
