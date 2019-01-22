import React, {Component} from 'react';
import Head from 'next/head';
import Header from './header';
import Breadcrumb from './breadcrumb';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';
import CustomStyle from './customStyle.scss';

class Layout extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Batman Shows</title>
                </Head>
                <Header />
                <div className={`${Bootstrap.container} ${CustomStyle.mt80px}`}>
                    <Breadcrumb/>
                </div>
                <div className={`${Bootstrap.container} ${Bootstrap['mt-2']}`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;