import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';
import {addBreadcrumbItem, removeBreadcrumbItem} from '../lib/store';

class About extends Component {
    componentWillMount() {
        this.props.addBreadcrumb({
            name: "About",
            url: "/about"
        });
    }
    componentWillUnmount() {
        const breadCrumbItem = this.props.breadCrumb.find(item => item.url === "/about");
        const index = this.props.breadCrumb.indexOf(breadCrumbItem);
        this.props.removeBreadcrumb(index);
    }
    render() {
        return (
            <Layout>
                <h1>Batman series project</h1>
                <h5>A react app that shows Batman series <small className={Bootstrap['text-muted']}>with TVMaze api &amp; SSR functionality.</small></h5>
                <p className={Bootstrap.lead}>Used frameworks:</p>
                <ol>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                </ol>
            </Layout>
        );
    }
}

function mapStateToProps (state) {
    const { breadCrumb } = state;
    return { breadCrumb }
}

function mapDispatchToProps (dispatch) {
    return {
        addBreadcrumb: (data) => dispatch(addBreadcrumbItem(data)),
        removeBreadcrumb: (data) => dispatch(removeBreadcrumbItem(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);