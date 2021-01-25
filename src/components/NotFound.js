import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NotFound extends Component {

    render() {
        return (
            <section className="justify-self-center self-center text-white text-center text-3xl py-10">
                <h2 style={{ paddingBottom: 20 }}>
                    Sorry, that page was not found.
                    <br />
                    <Link to="/" ><u>Return home</u></Link>
                </h2>
            </section>
        )
    }
}
