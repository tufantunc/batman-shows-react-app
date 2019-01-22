import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setShowList } from '../lib/store';
import Layout from '../components/layout';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';
import SanitizeHtml from 'sanitize-html';
import GetBatmanShows from '../lib/getBatmanShows';
import {addBreadcrumbItem, removeBreadcrumbItem} from '../lib/store';

class ShowPage extends Component {
    static async getInitialProps({reduxStore, query}) {
        const { showList } = reduxStore.getState();
        const { id } = query;

        if(showList.length === 0) {
            const data = await GetBatmanShows();
            reduxStore.dispatch(setShowList(data));
        }

        return { id };
    }
    componentWillMount() {
        const {id, showList} = this.props;
        const {show} = showList[id];
        this.props.addBreadcrumb({
            name: show.name,
            url: `/show?id=${this.props.id}`
        });
    }
    componentWillUnmount() {
        const url = `/show?id=${this.props.id}`;
        const breadCrumbItem = this.props.breadCrumb.find(item => item.url === url);
        const index = this.props.breadCrumb.indexOf(breadCrumbItem);
        this.props.removeBreadcrumb(index);
    }
    render() {
        const {id, showList} = this.props;
        const {show} = showList[id];

        return (
            <Layout>
                <div className={Bootstrap.jumbotron}>
                    <h1 className={`${Bootstrap['display-4']} ${Bootstrap['d-inline']}`}>{show.name}</h1>
                    <span className={`${Bootstrap.badge} ${Bootstrap['badge-success']} ${Bootstrap['d-inline']} ${Bootstrap['ml-3']}`}>Rating: {show.rating.average}</span>
                    <hr className={Bootstrap['my-4']} />
                    <div className={Bootstrap.row}>
                        <div className={Bootstrap['col-8']}>
                            <p className={Bootstrap.lead}>{SanitizeHtml(show.summary, {allowedTags: []})}</p>
                            <p>Genres: {show.genres.map((genre, index) => <mark className={Bootstrap['ml-2']} key={index}>{genre}</mark>)}</p>
                        </div>
                        <div className={`${Bootstrap['col-4']} ${Bootstrap['text-center']}`}>
                            <img src={show.image.medium} alt={show.name} className={Bootstrap['img-thumbnail']}/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapStateToProps (state) {
    const { showList, breadCrumb } = state;
    return { showList, breadCrumb }
}

function mapDispatchToProps (dispatch) {
    return {
        addBreadcrumb: (data) => dispatch(addBreadcrumbItem(data)),
        removeBreadcrumb: (data) => dispatch(removeBreadcrumbItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);