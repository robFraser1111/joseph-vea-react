import React, { Component } from 'react';

export default class About extends Component {

    componentDidMount() {
        this.props.background();
    }
    
    render() {
        return (
            <section className="justify-self-center self-center text-white text-2xl py-10">
                Joseph Vea is a singer/songwriter with stories to make an impact on the Australian music scene. With a uniquely smooth and deep tone of voice, he explores multiple genres within each of his tracks. Vea is a musician, an educator, and a stay at home dad who seeks to open conversations often kept in the musical too hard box.
                <br/><br/>
                Joseph's debut jam 'Half As Much' explores a journey of self acceptance and love. It is a letter written by our inner voice that tells us that we are 'good enough' and that we deserve to be loved 'Half As Much' as we love others. This song embodies a salsa groove, anchored in undeniable Rnb and Neo Soul goodness.
            </section>
        )
    }
}
