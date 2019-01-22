import React, {Component} from 'react';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';
import { connect } from 'react-redux';
import Link from 'next/link';

class Breadcrumb extends Component {
    render() {
        const {breadCrumb} = this.props;
        return (
            <nav aria-label="breadcrumb">
                <ol className={Bootstrap.breadcrumb}>
                    {breadCrumb.map((bcItem, index) => (
                        <li key={index} className={`${Bootstrap['breadcrumb-item']} ${index === breadCrumb.lenght-1 ? Bootstrap.active : ''}`}>
                            <Link href={bcItem.url}>
                                <a>{bcItem.name}</a>
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>
        )
    }
}

function mapStateToProps (state) {
    const { breadCrumb } = state;
    return { breadCrumb }
}

export default connect(mapStateToProps)(Breadcrumb);