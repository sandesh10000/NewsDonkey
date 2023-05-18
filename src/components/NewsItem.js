import React, { Component } from 'react'
import donkeynewspaper from './donkey_reading_newspaper.png'
export class NewsItem extends Component {
    render() {
        let {title,description,imgurl,newsurl,author,date}=this.props;
        return (
            <div className='my-3'>
                <div className="card " >
                    <img src={imgurl?imgurl:donkeynewspaper} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p class="card-text"><small className="text-body-secondary">By {author==null?"Trust Me Bro":author} on {date} </small></p>
                            <a href={newsurl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
