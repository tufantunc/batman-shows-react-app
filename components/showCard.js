import React, {Component} from 'react';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';
import Link from 'next/link';
import SanitizeHtml from 'sanitize-html';
import CustomStyle from './customStyle.scss';

class ShowCard extends Component {
    render() {
        const {show, listIndex} = this.props;
        return (
            <div className={`${Bootstrap.card} ${Bootstrap['mt-3']}`}>
                <img className={Bootstrap['card-img-top']} src={show.image.medium} alt={show.name}/>
                <div className={Bootstrap['card-body']}>
                    <h5 className={`${Bootstrap['card-title']} ${CustomStyle.showTitle}`}>{show.name}</h5>
                    <p className={Bootstrap['card-text']}>{`${SanitizeHtml(show.summary.substr(0,77), {allowedTags: []})}...`}</p>
                    <Link href={`/show?id=${listIndex}`}>
                        <a className={`${Bootstrap.btn} ${Bootstrap['btn-primary']}`}>See Details</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ShowCard;