import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShowList } from '../lib/store';
import GetBatmanShows from '../lib/getBatmanShows';
import Layout from '../components/layout';
import ShowCard from '../components/showCard';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';

class Index extends Component {
    static async getInitialProps({ reduxStore }) {
        const { showList } = reduxStore.getState();
        if(showList.length === 0) {
            const data = await GetBatmanShows();
            reduxStore.dispatch(setShowList(data));
        }

        return { };
    }

    render() {
        const { showList } = this.props;

        return (
            <Layout>
                <h1>Welcome to Batman Shows Page</h1>
                <div className={Bootstrap.row}>
                    {showList.map(({show}, index) => (
                        <div className={Bootstrap['col-3']} key={show.id}>
                            {<ShowCard show={show} listIndex={index} />}
                        </div>
                    ))}
                </div>
            </Layout>
        );
    }
}

function mapStateToProps (state) {
    const { showList } = state;
    return { showList }
}

export default connect(mapStateToProps)(Index);